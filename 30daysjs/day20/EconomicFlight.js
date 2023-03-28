import { Flight } from "./Flight.js";
import { Reservation } from "./Reservation.js";

export class EconomicFlight extends Flight {
  constructor(origin, destination, date, capacity, price) {
    super(origin, destination, date, capacity, price);
  }
  sellTicket(passenger) {
    if(this.capacity>0) {
      if(passenger.age<18 || passenger.age>65) {
        this.price -= this.price*0.2;
      }
      this.passengers.push(passenger);
      passenger.addFlight(this);
      const reservation = new Reservation(this, passenger);
      return reservation;
    }
  }
}