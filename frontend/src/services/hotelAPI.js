export class HotelAPI {
  static async fetchReviews() {
    const res = await fetch('http://localhost:8000/reviews');
    return await res.json();
  }

  static async addReview(email, roomNumber, body) {
    const res = await fetch('http://localhost:8000/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, roomNumber, body }),
    });
    return await res.json();
  }

  static async editReview(id, email, roomNumber, body) {
    const res = await fetch(`http://localhost:8000/reviews/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, roomNumber, body }),
    });
    return await res.json();
  }

  static async deleteReview(id) {
    const res = await fetch(`http://localhost:8000/reviews/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  }
}
