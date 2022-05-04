// 1. Programa para gerar um programa

function currentDate() {
  let hoje = new Date();
  let dia = hoje.getDay();
  let diaDaSemana = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ];
  let diaDaSemanaHoje = diaDaSemana[dia - 1];
  console.log(`Hoje é: ${diaDaSemanaHoje}`);
  let hora = hoje.getHours();
  let minutos = hoje.getMinutes();
  let segundos = hoje.getSeconds();
  if (hora > 12) {
    console.log(`Hora atual: ${hora - 12} PM : ${minutos} : ${segundos}`);
  } else if (hora == 12) {
    console.log(`Hora atual: ${hora} PM : ${minutos} : ${segundos}`);
  } else {
    console.log(`Hora atual: ${hora} AM : ${minutos} : ${segundos}`);
  }
}
currentDate();

// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
// Resolvido, aprendi nova função usando o objeto new Date().
