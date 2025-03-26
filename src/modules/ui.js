function UI(hotel) {
  this.hotel = hotel;
}

UI.prototype.renderRooms = function () {
  const container = document.getElementById('roomsContainer');
  container.innerHTML = '';

  this.hotel.rooms.forEach((room) => {
    const roomDiv = document.createElement('div');
    roomDiv.className = `room ${room.isAvailable ? '' : 'booked'}`;
    roomDiv.innerHTML = `
    <h3>Room ${room.number} (${room.type})</h3>
    <p>${room.isAvailable ? 'Available' : 'Booked'}</p>
    ${
      room.isAvailable
        ? `<button onClick=bookRoom(${room.number})>Book Room</button>`
        : `<button onClick=checkOutRoom(${room.number})>Check Out</button>`
    }
    `;

    container.appendChild(roomDiv);
  });
};

module.exports = UI;
