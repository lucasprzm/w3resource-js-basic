// 2. Função que deleta uma chave de um determinado objeto.
function deletarChaveObjeto() {
  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
  console.log(student);
  delete student.rollno;
  console.log(student);
}
