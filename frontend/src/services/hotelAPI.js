export class HotelAPI {
  static async fetchReviews() {
    const res = await fetch('http://localhost:8000/reviews');
    return await res.json();
  }
}
