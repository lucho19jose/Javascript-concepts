class HashTable {
  constructor (size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i =0; i<key.length; i++) {
      hash = (hash + key.charCodeAt(i)*i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address]; // it will return an array when Colisión de hash happends
    console.log(currentBucket);
    if(currentBucket) {
      for(let i =0; i< currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if(currentBucket && currentBucket.length != 0) {
      if(currentBucket.length > 1){
        for(let i =0; i< currentBucket.length; i++) {
          if(currentBucket[i][0] === key) {
            let newbucket = currentBucket.filter(item => item[0] != key);
            if(newbucket.length>0){
              this.data[address] = newbucket;
            }else {
              delete this.data[address];
            }
            return this.data[address];
          }
        }
      }else{
        delete this.data[address];
        return currentBucket;
      }
    }

    return undefined;
  }

  getAllKeys(){
    let allkeys = [];
    for(let i = 0; i<this.data.length; i++) {
      if(this.data[i]){
        if(this.data[i].length>1){
          for(let j = 0; j<this.data[i].length; j++){
            allkeys.push(this.data[i][j][0]);
          }
        }else{
          allkeys.push(this.data[i][0][0]);
        }
      }
    }
    console.log(allkeys);
    return allkeys;
  }
}

const myHashTable = new HashTable(50);

//console.log(myHashTable);

myHashTable.set('jose', 22);
myHashTable.set('rubi', 18);
myHashTable.set('maria', 21);
myHashTable.set('juan', 21);

//console.log(myHashTable.get('rubi'));
/* console.log(myHashTable.data);
console.log("-----------------------------");
console.log(myHashTable.delete('maria'))
console.log(myHashTable.delete('rubi'))
console.log(myHashTable.delete('rubi'))
console.log("-----------------------------"); */
console.log(myHashTable.data);
myHashTable.getAllKeys();
