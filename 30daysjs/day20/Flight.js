import { Reservation } from "./Reservation.js";

export class Flight {
  constructor(origin, destination, date, capacity, price) {
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.price = price;
    this.passengers = [];
  }

  sellTicket(passenger) {
    if(this.capacity>0) {
      this.passengers.push({fullName: `${passenger.name} ${passenger.lastName}`, age: passenger.age});
      passenger.addFlight(this);
      const reservation = new Reservation(this, passenger);
      return reservation;
    }
  }
}