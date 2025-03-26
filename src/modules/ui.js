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
    <button onClick=bookRoom(${room.number})>${
      room.isAvailable ? '' : 'disabled'
    }</button>
    <button onClick=checkOutRoom(${room.number})>${
      room.isAvailable ? 'disabled' : ''
    }</button>
    `;

    container.appendChild(roomDiv);
  });
};

module.exports = UI;
