function Room(number, type) {
  this.number = number;
  this.type = type;
  this.isAvailable = true;
}

Room.prototype.book = function () {
  this.isAvailable = false;
  return `Room ${this.number} has been booked`;
};

Room.prototype.checkOut = function () {
  this.isAvailable = true;
  return `Room ${this.number} has been checked out`;
};

module.exports = Room;
