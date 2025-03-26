function Room(number, type) {
	this.number = number;
	this.type = type;
	this.isAvailable = true;
}

Room.prototype.book = function () {
	this.isAvailable = false;
};

Room.prototype.checkOut = function () {
	this.isAvailable = true;
};

module.exports = Room;
