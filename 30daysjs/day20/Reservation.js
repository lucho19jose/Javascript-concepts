export class Reservation {
  constructor(flight, passenger) {
    this.flight = flight;
    this.passenger = passenger;    
  }

  reservationDetails() {
    return {
      origin: flight.origin,
      destionation: flight.destionation,
      date: flight.date,
      reservedBy: `${this.passenger.name} ${this.passenger.lastName}`/* name passenger */
    }
  }
} 