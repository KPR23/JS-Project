import { User } from '../modules/user.js';

export function saveUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function registerUser(username, password) {
  const user = new User(username, password);
  saveUser(user);
  return user;
}

export function loginUser(username, password) {
  const storedUser = localStorage.getItem('user');
  if (!storedUser) return null;

  const userData = JSON.parse(storedUser);
  const user = new User(userData.username, userData.password);

  if (user.username === username && user.validatePassword(password)) {
    sessionStorage.setItem('user', JSON.stringify(user));
    return user;
  }
  return null;
}
