// 15. Array de par chave valor, acessando algumas delas.
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(Object.entries(student));
console.log(Object.entries(student)[0][0]);
console.log(Object.entries(student)[0][1]);
