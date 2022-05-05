var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
function temChave(objeto, chave) {
  let chaves = Object.keys(objeto);
  console.log(chaves.includes(chave));
}
temChave(student, "sclass");
temChave(student, "name");
temChave(student, "rollno");
