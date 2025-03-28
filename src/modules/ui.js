class UI {
  constructor(hotel) {
    this.hotel = hotel;
  }

  renderRooms() {
    const container = document.getElementById('roomsContainer');
    container.innerHTML = '';

    this.hotel.rooms.forEach((room) => {
      const isPremium = room.premiumService
        ? `<p>Premium Service: ${room.premiumService}</p>`
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
    ${
      room.isAvailable
        ? `<button onclick="bookRoom(${room.number})">Book Room</button>`
        : `<button onclick="checkOutRoom(${room.number})">Check Out</button>`
    }
    <div id="reviewsContainer-${room.number}">
      <button onclick="fetchReviews(${room.number})">Load reviews</button>
      <div id="reviewsList-${room.number}"></div>
    </div>
    `;

      container.appendChild(roomDiv);
    });
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
