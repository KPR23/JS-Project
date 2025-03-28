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
    `;

      container.appendChild(roomDiv);
    });
  }
}

module.exports = UI;
