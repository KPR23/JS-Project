import './style.scss';
import { Room, PremiumRoom } from './modules/room.js';
import { UI } from './services/ui.js';
import { Hotel } from './modules/hotel.js';
import { HotelAPI } from './services/hotelAPI.js';

const room1 = new Room(1, 'Single');
const room2 = new Room(2, 'Double');
const room3 = new Room(3, 'Suite');
const room4 = new PremiumRoom(4, 'Premium', 'Breakfast');

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

window.ui = new UI(hotel);

const savedUser = sessionStorage.getItem('user');
if (savedUser) {
  const user = JSON.parse(savedUser);
  window.ui.authStatus(user);
} else {
  window.ui.renderLogin();
}
window.ui.renderRooms();

window.bookRoom = function (number) {
  const user = JSON.parse(sessionStorage.getItem('user'));
  if (!user) {
    alert('Please login to book a room');
    document.getElementById('bookButton').disabled = true;
    return;
  }
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
    const button = document.getElementById('checkoutButton');
    if (owner != room.bookedBy) {
      button.disabled = true;
    }
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
