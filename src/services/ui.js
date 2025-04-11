import { registerUser, loginUser } from './userManager.js';

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
      <input type="text" id="username" placeholder="Username">
      <input type="password" id="password" placeholder="Password">
      <button type="button" onclick="ui.registerUser()">Register</button>
      <button type="button" onclick="ui.loginUser()">Login</button>
      <div id="authStatus"></div>
    `;

    container.appendChild(form);
  }

  loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = loginUser(username, password);
    if (user) {
      alert('Login successful!');
      this.authStatus(user);
    } else {
      alert('Invalid credentials');
    }
  }

  registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try {
      const user = registerUser(username, password);
      alert('Registration successful!');
      this.authStatus(user);
    } catch (error) {
      alert('Registration failed: ' + error.message);
    }
  }

  authStatus(user) {
    const loginContainer = document.getElementById('loginContainer');
    loginContainer.innerHTML = '';

    if (user) {
      const authStatus = document.createElement('div');
      authStatus.id = 'authStatus';
      authStatus.textContent = 'Logged in as ' + user.username;
      loginContainer.appendChild(authStatus);

      const logoutButton = document.createElement('button');
      logoutButton.textContent = 'Logout';
      logoutButton.onclick = () => {
        sessionStorage.removeItem('user');
        this.renderLogin();
        this.renderRooms();
      };
      loginContainer.appendChild(logoutButton);
    } else {
      this.renderLogin();
    }
  }

  renderRooms() {
    const container = document.getElementById('roomsContainer');
    container.innerHTML = '';

    this.hotel.rooms.forEach((room) => {
      const isPremium = room.premiumService
        ? `<div class="premium-service">${room.premiumService}</div>`
        : '';
      const premiumClass = room.premiumService ? 'premium' : '';
      const roomDiv = document.createElement('div');
      roomDiv.className = `room ${
        room.isAvailable ? '' : 'booked'
      } ${premiumClass}`;
      roomDiv.innerHTML = `
        <h3>Room ${room.number} (${room.type})</h3>
        <p>${room.isAvailable ? 'Available' : 'Booked'}</p>
        ${isPremium}
        <div class="button-box">
          ${
            room.isAvailable
              ? `<button onclick="bookRoom(${room.number})">Book Room</button>`
              : `<button onclick="checkOutRoom(${room.number})">Check Out</button>`
          }
          <button onclick="ui.toggleReviews(${room.number})">Reviews</button>
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

    if (this.expandedReviews.has(roomNumber)) {
      reviewsContainer.classList.remove('visible');
      button.textContent = 'Reviews';
      this.expandedReviews.delete(roomNumber);
    } else {
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

    reviewsList.innerHTML = reviews
      .slice(0, 3)
      .map(
        (review) => `
        <div class="review">
          <h4>${review.email}</h4>
          <p>${review.body}</p>
        </div>
      `
      )
      .join('');
  }
}
