class Room {
  constructor(number, type) {
    this.number = number;
    this.type = type;
    this.isAvailable = true;
  }

  book() {
    this.isAvailable = false;
    return `Room ${this.number} has been booked`;
  }

  checkOut() {
    this.isAvailable = true;
    return `Room ${this.number} has been checked out`;
  }
}

class PremiumRoom extends Room {
  constructor(number, type, premiumService) {
    super(number, type);
    this.premiumService = premiumService;
  }
}

module.exports = { Room, PremiumRoom };
