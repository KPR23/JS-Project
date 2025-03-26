function Hotel() {
	this.rooms = [];
}

Hotel.prototype.addRoom = function (room) {
	this.rooms.push(room);
};
