// 38. Programa para avaliar uma nota para aprovação, validada se exame final for true or false.
function notaA(nota, exameFinal) {
  if (exameFinal) {
    console.log(nota >= 90);
  } else {
    console.log(nota >= 89 && nota <= 100);
  }
}
notaA(78);
notaA(89, true);
notaA(99, true);
