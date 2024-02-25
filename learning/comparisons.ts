const object1 = {
  name: "Luis",
  age: 26,
};

const object1Copy = {
  name: "Luis",
  age: 26,
};

const object2 = {
  name: "Roberto",
  age: 18,
};

// With js objects, it compares the reference
console.log(object1 === object2);
console.log(object1 === object1Copy);

// With arrays, it compares the reference as well
const colors1 = ["red", "green", "blue"];
const colors1Copy = ["red", "green", "blue"];
const colors2 = ["purple", "yellow", "violet"];

console.log(colors1 === colors1Copy);

// LO ANTERIOR BASICAMENTE FUE SHALOW COMPARISON
// SI QUEREMOS UNA COMPARACION MAS PROFUNDA, DEBEMOS CONVERTIRLOS EN STRING Y DESPUES COMPARARLOS
