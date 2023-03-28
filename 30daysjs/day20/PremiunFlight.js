import { Flight } from "./Flight";
import { Reservation } from "./Reservation";

export class PremiumFlight extends Flight {
  constructor(origin, destination, date, capacity, price, specialService) {
    super(origin, destination, date, capacity, price);
    this.specialService = specialService;
  }

  sellTicket(passenger) {
    if(this.capacity>0) {
      this.passengers.push(passenger);
      this.price += this.specialService; 
      const reservation = new Reservation(this, passenger);
      return reservation;
    }
  }
}