class Room {
  #creditCardNumber;

  constructor(number, type) {
    this.number = number;
    this.type = type;
    this.isAvailable = true;
  }

  book() {
    const creditCardNumber = prompt(
      'Provide your credit card number to book the room'
    );
    if (!creditCardNumber || !/^\d{16}$/.test(creditCardNumber)) {
      alert('Credit card number must be 16 digits');
      return;
    }
    this.setCreditCardNumber(creditCardNumber);
    this.isAvailable = false;
    return `Room ${
      this.number
    } has been booked using this card: ${this.getMaskedCardNumber()}`;
  }

  checkOut() {
    this.isAvailable = true;
    return `Room ${this.number} has been checked out`;
  }

  setCreditCardNumber(number) {
    if (!/^\d{16}$/.test(number)) {
      throw new Error('Credit card number must be 16 digits');
    }
    this.#creditCardNumber = number;
  }

  getMaskedCardNumber() {
    return '**** **** **** ' + this.#creditCardNumber.slice(-4);
  }
}

class PremiumRoom extends Room {
  constructor(number, type, premiumService) {
    super(number, type);
    this.premiumService = premiumService;
  }
}

module.exports = { Room, PremiumRoom };
