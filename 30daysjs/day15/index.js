/* 
En este desafío deberás crear un sistema de administración para un hotel.

El objetivo de este ejercicio es utilizar closures para implementar la lógica de una función (hotelSystem) que administre un hotel. La función recibirá un parámetro rooms, definirá el número total de habitaciones.

El closure debe retornar las siguientes funciones:

searchReservation(id): esta función permitirá buscar una reservación por su ID. En caso de no encontrarla, se retornará un error con el mensaje "La reservación no fue encontrada".

getSortReservations(): esta función nos devolverá una copia de las reservaciones sin modificar el array original ordenando las reservaciones por fecha de check-in de manera ascendente.

addReservation(reservation): esta función se usará para agregar una nueva reservación. Debe asegurarse de que la habitación solicitada esté disponible para las fechas de check-in y check-out. En caso de que esté reservada, se retornará un error con el mensaje "La habitación no está disponible".

removeReservation(id): esta función eliminará la reservación correspondiente al ID recibido y la retornará. En caso de que la reservación no exista, se retornará un error con el mensaje "La reservación que se busca remover no existe".

getReservations(): esta función nos devolverá todas las reservaciones.

getAvailableRooms(checkIn, checkOut): esta función recibirá dos parámetros, checkIn y checkOut con formato "dd/mm". La función debe devolver las habitaciones disponibles para las fechas dadas.

El formato que recibirás para las reservaciones será el siguiente:

id: un identificador único
name: El nombre de quien agenda
checkIn: Fecha de llegada
checkOut: Fecha de salida
roomNumber: La habitación solicitada

*/

function hotelSystem(rooms) {
  let totalrooms = rooms;
  let reservations = [];

  function getSortReservations(){
    const reservationscopy = [...reservations];
    reservationscopy.sort((a, b) => {
      const keyA = new Date(`${a.checkIn}/2023`);
      const keyB = new Date(`${a.checkIn}/2023`);
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    })
    return reservationscopy;
  }
  
  function searchReservation(id) {
    const reservation = reservations.find(item => item.id === id);
    return reservation ? reservation : new Error("La reservación no fue encontrada");
  }

  function addReservation(reservation) {
    const reserexist = reservations.find(item => item.id == reservation.id);
    if(reserexist && new Date(reserexist.checkIn)<=new Date(reservation.checkIn) && new Date(reserexist.checkOut)>=new Date(reservation.checkOut)){
        return new Error("La habitación no está disponible");
    }else{
      reservations.push(reservation);
    }
    return reservations;
  }

  function removeReservation(id){
    const index = reservations.findIndex(item => item.id == id);
    if (index > -1) { 
      array.splice(index, 1); 
    }else {
      return new Error("La reservación que se busca remover no existe");
    }
    return reservations;
  }

  function getReservations(){
    return reservations;
  }

  function getAvailableRooms(checkIn, checkOut) {
    let availablesrooms = [];
    let unavailablesrooms = [];
    for(let i = 0; i<=reservations.length; i++){
      if(new Date(reservations[i]?.checkIn) >=new Date(checkIn) && new Date(reservations[i]?.checkOut) <= new Date(checkOut)){
        unavailablesrooms.push(reservations[i].roomNumber);
      }
    }
    for(let i = 1; i<=totalrooms; i++) {
      if(!unavailablesrooms.includes(i)){
        availablesrooms.push(i);
      }
    }
    return availablesrooms;
  }

  return {
    getSortReservations,
    searchReservation,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms
  }
}
