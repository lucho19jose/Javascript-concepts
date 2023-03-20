class Car {
  constructor(brand, model, year, mileage){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage= mileage;
    this.state = false;
  }

  turnOn(){
    this.state = true;
    console.log("thurnOn", this.state)
  }
  
  turnOff(){
    this.state = false;
    console.log("turnOff", this.state)
  }

  drive(kilometers){
    if(this.state) {
      this.mileage += kilometers;
      console.log(this.mileage)
      return this.mileage;
    }else{
      console.log(this.mileage)
      throw new Error('El auto está apagado')
    }
  }

}

const toyota = new Car("Toyota", "Corolla", 2020, 0);
toyota.turnOn();
toyota.drive(100);
toyota.mileage
// Output 100

const toyota2 = new Car("Toyota", "Corolla", 2020, 0);
toyota2.turnOff()
toyota2.drive(100)

//Output: Error("El auto está apagado")