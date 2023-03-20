function arrayModified() {
  Array.prototype.myFilter = function (fn) { return this.filter(fn) }
}

// without using array methods

function arrayModified() {
  Array.prototype.myFilter = function (fn) { 
    const retArray = [];
    for (const item of this) {
      if(fn(item)){
        retArray.push(item);
      }
    }
    return retArray;
  }
}
