function moneyBox(coins) {
  let saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5); // $5
moneyBox(5); // $5

function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox $${saveCoins}`); 
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5); // $5
myMoneyBox(5); // $10
myMoneyBox(15); // 25


const moneyBoxAna = moneyBox();
moneyBoxAna(10); // 10
moneyBoxAna(20); // 30
moneyBoxAna(5); // 35

function createPetList() {
  const pets = [];
  return function addPets(newPet = "") {
    if(newPet == "") {
      return pets;
    }else {
      pets.push(newPet)
    }
  }
}

const myPetList = createPetList();

console.log(myPetList("michi"));

console.log(myPetList("firulais"));

console.log(myPetList());