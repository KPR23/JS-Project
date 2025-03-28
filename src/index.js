const Room = require('./modules/room');
const Hotel = require('./modules/hotel');
const UI = require('./modules/ui');
const HotelAPI = require('./modules/hotelAPI');

const room1 = new Room.Room(1, 'Single');
const room2 = new Room.Room(2, 'Double');
const room3 = new Room.Room(3, 'Suite');
const room4 = new Room.PremiumRoom(4, 'Premium', 'Breakfast');

const hotel = new Hotel('Grand Hotel');

hotel.addRoom(room1);
hotel.addRoom(room2);
hotel.addRoom(room3);
hotel.addRoom(room4);

function loadBookingsFromLocalStorage() {
  const savedBookings = localStorage.getItem('hotelBookings');
  if (savedBookings) {
    const bookings = JSON.parse(savedBookings);
    bookings.forEach((roomNumber) => {
      const room = hotel.rooms.find((room) => room.number === roomNumber);
      if (room && room.isAvailable) {
        room.isAvailable = false;
      }
    });
  }
}

function saveBookingsToLocalStorage() {
  const bookedRooms = hotel.rooms
    .filter((room) => !room.isAvailable)
    .map((room) => room.number);
  localStorage.setItem('hotelBookings', JSON.stringify(bookedRooms));
}

loadBookingsFromLocalStorage();

const ui = new UI(hotel);
ui.renderRooms();

window.bookRoom = function (number) {
  const room = hotel.rooms.find((room) => room.number === number);
  if (room) {
    alert(room.book());
    saveBookingsToLocalStorage();
    ui.renderRooms();
  }
};

window.checkOutRoom = function (number) {
  const room = hotel.rooms.find((room) => room.number === number);
  if (room) {
    alert(room.checkOut());
    saveBookingsToLocalStorage();
    ui.renderRooms();
  }
};

window.fetchReviews = async function (roomNumber) {
  try {
    const reviews = await HotelAPI.fetchReviews();
    ui.displayReviews(roomNumber, reviews);
  } catch (error) {
    alert('Failed to load reviews. Please try again later.');
  }
};
