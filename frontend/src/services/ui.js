import {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
} from './userManager.js';
import { HotelAPI } from './hotelAPI.js';

export class UI {
  constructor(hotel) {
    this.hotel = hotel;
    this.expandedReviews = new Set();
  }

  renderLogin() {
    const container = document.getElementById('loginContainer');
    container.innerHTML = '';

    const form = document.createElement('form');
    form.innerHTML = `
      <div class="input-row">
        <input type="text" id="username" placeholder="Username">
        <input type="password" id="password" placeholder="Password">
      </div>
      <div class="button-row">
        <button type="button" id="loginBtn">Login</button>
        <button type="button" id="registerBtn">Register</button>
      </div>
    `;

    container.appendChild(form);

    document.getElementById('loginBtn').addEventListener('click', async () => {
      await this.loginUser();
    });

    document
      .getElementById('registerBtn')
      .addEventListener('click', async () => {
        await this.registerUser();
      });
  }

  async loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = loginUser(username, password);
    if (user) {
      alert('Login successful!');
      await this.authStatus(user);
    } else {
      alert('Invalid credentials');
    }
  }

  async registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try {
      const user = registerUser(username, password);
      alert('Registration successful!');
      await this.authStatus(user);
    } catch (error) {
      alert('Registration failed: ' + error.message);
    }
  }

  async authStatus(user) {
    const loginContainer = document.getElementById('loginContainer');
    loginContainer.innerHTML = '';

    if (user) {
      const authStatus = document.createElement('div');
      authStatus.id = 'authStatus';
      authStatus.textContent = 'Logged in as ' + user.username;
      loginContainer.appendChild(authStatus);

      const logoutButton = document.createElement('button');
      logoutButton.textContent = 'Logout';
      logoutButton.onclick = async () => {
        logoutUser();
        this.renderLogin();
        await this.renderRooms();
      };
      loginContainer.appendChild(logoutButton);
    } else {
      this.renderLogin();
    }
    await this.renderRooms();
  }

  async renderRooms() {
    const container = document.getElementById('roomsContainer');
    container.innerHTML = '';
    const currentUser = getCurrentUser();
    const isLoggedIn = !!currentUser;
    const username = currentUser ? currentUser.username : null;

    let reviews = [];
    try {
      reviews = await HotelAPI.fetchReviews();
    } catch (error) {
      console.warn('Failed to fetch reviews:', error);
    }

    this.hotel.rooms.forEach((room) => {
      const counter = reviews.filter(
        (r) => r.roomNumber === room.number
      ).length;
      const isPremium = room.premiumService
        ? `<div class="premium-service">${room.premiumService}</div>`
        : '';
      const premiumClass = room.premiumService ? 'premium' : '';
      const roomDiv = document.createElement('div');
      roomDiv.className = `room ${
        room.isAvailable ? '' : 'booked'
      } ${premiumClass}`;
      const bookingInfo = room.isAvailable
        ? 'Available'
        : room.bookedBy
        ? `Booked by ${room.bookedBy}`
        : 'Booked';

      roomDiv.innerHTML = `
        <h3>Room ${room.number} (${room.type})</h3>
        <p>${bookingInfo}</p>
        ${isPremium}
         <p>${counter > 0 ? 'Reviews: ' + counter : 'No reviews yet'}</p>
        <div class="button-box">
          ${
            room.isAvailable
              ? `<button class="bookButton ${
                  !isLoggedIn ? 'disabled' : ''
                }" onclick="bookRoom(${room.number})">Book Room</button>`
              : `<button onclick="checkOutRoom(${room.number})" ${
                  !isLoggedIn || (room.bookedBy && room.bookedBy !== username)
                    ? 'class="disabled"'
                    : ''
                }>Check Out</button>`
          }
          <button onclick="ui.toggleReviews(${room.number})" ${
        counter > 0 ? '' : 'class="disabled"'
      }>Reviews</button>
        </div>
       
        <div id="reviewsContainer-${room.number}" class="reviews-container">
          <div id="reviewsList-${room.number}"></div>
        </div>
      `;

      container.appendChild(roomDiv);
    });
  }

  toggleReviews(roomNumber) {
    const reviewsContainer = document.getElementById(
      `reviewsContainer-${roomNumber}`
    );
    const reviewsList = document.getElementById(`reviewsList-${roomNumber}`);
    const button =
      reviewsContainer.previousElementSibling.querySelector(
        'button:last-child'
      );

    if (!reviewsList || !reviewsContainer) return;
    if (!reviewsList) {
      reviewsList.innerHTML = '<p>No reviews yet</p>';
    }

    if (this.expandedReviews.has(roomNumber)) {
      reviewsContainer.classList.remove('visible');

      button.textContent = 'Reviews';
      this.expandedReviews.delete(roomNumber);
    } else {
      this.expandedReviews.forEach((num) => {
        if (num !== roomNumber) {
          const otherContainer = document.getElementById(
            `reviewsContainer-${num}`
          );
          const otherButton =
            otherContainer.previousElementSibling.querySelector(
              'button:last-child'
            );
          if (otherContainer) {
            otherContainer.classList.remove('visible');
            if (otherButton) otherButton.textContent = 'Reviews';
          }
          this.expandedReviews.delete(num);
        }
      });

      reviewsContainer.classList.add('visible');
      button.textContent = 'Hide Reviews';

      if (!reviewsList.children.length) {
        window.fetchReviews(roomNumber);
      }

      this.expandedReviews.add(roomNumber);
    }
  }

  displayReviews(roomNumber, reviews) {
    const reviewsList = document.getElementById(`reviewsList-${roomNumber}`);
    if (!reviewsList) return;

    const roomReviews = reviews.filter(
      (review) => Number(review.roomNumber) === Number(roomNumber)
    );

    if (roomReviews.length === 0) {
      reviewsList.innerHTML = '<p>No reviews yet</p>';
      return;
    }

    reviewsList.innerHTML = roomReviews
      .slice(0, 3)
      .map(
        (review) => `
        <div class="review">
          <div class="review-header">
          <h4>${review.email}</h4>
          <p>${review.body}</p>
          </div>
          <div class="review-actions">
            <button onclick="ui.editReview('${review.id}', ${roomNumber})">Edit</button>
            <button onclick="ui.deleteReview('${review.id}')">Delete</button>
          </div>
        </div>
      `
      )
      .join('');
  }

  editReview(id, roomNumber) {
    const email = prompt('Enter your email:');
    if (!email) return;

    const body = prompt('Enter your review:');
    if (!body) return;

    HotelAPI.editReview(id, email, roomNumber, body)
      .then(async (response) => {
        alert('Review updated successfully!');
        try {
          const reviews = await HotelAPI.fetchReviews();
          this.displayReviews(roomNumber, reviews);
        } catch (error) {
          alert('Failed to refresh reviews. Please try again.');
        }
      })
      .catch((error) => {
        alert('Failed to update review. Please try again later.');
      });
  }

  deleteReview(id) {
    if (confirm('Are you sure you want to delete this review?')) {
      HotelAPI.deleteReview(id)
        .then(async (response) => {
          try {
            const reviews = await HotelAPI.fetchReviews();
            this.displayReviews(roomNumber, reviews);
            alert('Review deleted successfully!');
          } catch (error) {
            alert('Failed to refresh reviews. Please try again.');
          }
        })
        .catch((error) => {
          alert('Failed to delete review. Please try again later.');
        });
    }
  }
}
