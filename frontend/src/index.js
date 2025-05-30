import './style.scss';
import { Room, PremiumRoom } from './modules/room.js';
import { UI } from './services/ui.js';
import { Hotel } from './modules/hotel.js';
import { HotelAPI } from './services/hotelAPI.js';
import { getCurrentUser } from './services/userManager.js';

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
    bookings.forEach((booking) => {
      const room = hotel.rooms.find(
        (room) => room.number === booking.roomNumber
      );
      if (room && room.isAvailable) {
        room.isAvailable = false;
        room.bookedBy = booking.bookedBy;
      }
    });
  }
}

function saveBookingsToLocalStorage() {
  const bookedRooms = hotel.rooms
    .filter((room) => !room.isAvailable)
    .map((room) => ({
      roomNumber: room.number,
      bookedBy: room.bookedBy,
    }));
  localStorage.setItem('hotelBookings', JSON.stringify(bookedRooms));
}

loadBookingsFromLocalStorage();

window.ui = new UI(hotel);

(async () => {
  const currentUser = getCurrentUser();
  if (currentUser) {
    await window.ui.authStatus(currentUser);
  } else {
    window.ui.renderLogin();
    await window.ui.renderRooms();
  }
})();

window.bookRoom = async function (number) {
  const user = getCurrentUser();
  if (!user) {
    alert('Please login to book a room');
    return;
  }
  const room = hotel.rooms.find((room) => room.number === number);
  if (room) {
    alert(room.book(user.username));
    saveBookingsToLocalStorage();
    await ui.renderRooms();
  }
};

window.checkOutRoom = async function (number) {
  const user = getCurrentUser();
  if (!user) {
    alert('Please login to check out a room');
    return;
  }

  const room = hotel.rooms.find((room) => room.number === number);
  if (!room) return;

  if (room.bookedBy && room.bookedBy !== user.username) {
    alert('You can only check out rooms that you have booked');
    return;
  }

  alert(room.checkOut());
  saveBookingsToLocalStorage();
  await ui.renderRooms();
};

window.fetchReviews = async function (roomNumber) {
  try {
    const reviews = await HotelAPI.fetchReviews();
    ui.displayReviews(roomNumber, reviews);
  } catch (error) {
    alert('Failed to load reviews. Please try again later.');
  }
};

window.addReview = async function () {
  const email = document.getElementById('reviewEmail').value;
  const roomNumber = parseInt(
    document.getElementById('reviewRoomNumber').value
  );
  const body = document.getElementById('reviewBody').value;

  if (!email || !roomNumber || !body) {
    alert('Please fill in all review fields');
    return;
  }

  try {
    await HotelAPI.addReview(email, roomNumber, body);
    alert('Review added successfully!');
    document.getElementById('reviewEmail').value = '';
    document.getElementById('reviewRoomNumber').value = '';
    document.getElementById('reviewBody').value = '';
    window.fetchReviews(roomNumber);
  } catch (error) {
    alert('Failed to add review. Please try again later.');
  }
};
