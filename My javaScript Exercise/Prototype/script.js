function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hello, I'm ${this.name}!`);
};

Player.prototype.getMarker = function () {
  console.log(`My marker is ${this.marker}`);
};

Object.getPrototypeOf(Player.prototype);

Object.setPrototypeOf(Player.prototype, Person.prototype);

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is "X"
player2.getMarker(); // My marker is "O

let animal = {
  eats: true,
  walk() {
    console.log("Animal Walk");
  },
  sleep() {
    this.isSleeping = true;
  },
};
let rabbit = {
  jumps: true,
  __proto__: animal,
};

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`);
  } else {
    console.log(`Inherited: ${prop}`);
  }
}

rabbit.walk = function () {
  console.log("Rabbit Jump! bounce! bounce!");
};

rabbit.sleep();

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

let user = {
  name: "John",
  surname: "Smith",
  set FullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get FullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};
