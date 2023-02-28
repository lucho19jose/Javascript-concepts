function findFamousCats(cats) {
  for (let i = 0; i < cats.length; i++) {
    let numFollowers = 0;
    for (let j = 0; j < cats[i].followers.length; j++){
      numFollowers = numFollowers + cats[i].followers[j];
    }
    cats[i].num = numFollowers;
  }
  let mayors = [];
  console.log(cats); 
  let higher = cats[0];
  for (let i = 0; i < cats.length; i++) {
    if (cats[i].num > higher.num) {
      higher = cats[i]
      mayors = [];
    } else if (cats[i].num == higher.num) {
      if (mayors.length == 0) {
        mayors.push(higher);
      }
      higher = cats[i];
      mayors.push(higher)
    }
  }
  if (mayors.length > 0) {
    return mayors.map(item => item.name);
  } else {
    return [higher.name];
  }
}

console.log(findFamousCats([
  {
    name: "Luna",
    followers: [500, 200, 300]
  },
  {
    name: "Michi",
    followers: [100, 300]
  },
  {
    name: "Mica",
    followers: [1000, 300]
  },
]))

console.log(findFamousCats([
  {
    name: "Mimi",
    followers: [320, 120, 70]
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200]
  },
  {
    name: "Gizmo",
    followers: [250, 750]
  },
  {
    name: "Fuki",
    followers: [40, 30, 100, 200]
  },
  {
    name: "Bone",
    followers: [25, 750]
  }
])
)