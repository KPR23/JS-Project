class UI {
  constructor(hotel) {
    this.hotel = hotel;
    this.expandedReviews = new Set();
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

module.exports = UI;
