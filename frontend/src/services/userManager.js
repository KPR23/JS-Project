import { User } from '../modules/user.js';

export function saveUser(user) {
  localStorage.setItem(user.username, JSON.stringify(user));
}

export function registerUser(username, password) {
  if (localStorage.getItem(username)) {
    throw new Error('Username already exists');
  }
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters long');
  }
  if (username.length < 3) {
    throw new Error('Username must be at least 3 characters long');
  }
  if (password.length > 16) {
    throw new Error('Password must be less than 16 characters long');
  }
  const user = new User(username, password);
  saveUser(user);
  sessionStorage.setItem('user', JSON.stringify(user));

  return user;
}

export function loginUser(username, password) {
  const storedUser = localStorage.getItem(username);
  if (!storedUser) return null;
  const userData = JSON.parse(storedUser);
  const user = new User(userData.username, userData.password);
  if (user.username === username && user.validatePassword(password)) {
    sessionStorage.setItem('user', JSON.stringify(userData));
    return user;
  }
  return null;
}

export function getCurrentUser() {
  const storedUser = sessionStorage.getItem('user');
  if (!storedUser) return null;
  const userData = JSON.parse(storedUser);
  return new User(userData.username, userData.password);
}

export function logoutUser() {
  sessionStorage.removeItem('user');
}
