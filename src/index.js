const room1 = new Room(1, 'Single');
const room2 = new Room(2, 'Double');
const room3 = new Room(3, 'Suite');

const hotel = new Hotel('Grand Hotel');

hotel.addRoom(room1);
hotel.addRoom(room2);
hotel.addRoom(room3);

const ui = new UI(hotel);
ui.renderRooms();

global.bookRoom = function (number) {
  const room = hotel.rooms.find((room) => room.number === number);
  if (room) {
    alert(room.book());
    ui.renderRooms();
  }
};

global.checkOutRoom = function (number) {
  const room = hotel.rooms.find((room) => room.number === number);
  if (room) {
    alert(room.checkOut());
    ui.renderRooms();
  }
};
