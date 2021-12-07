// 10. Criar calculadora que o usuário coloca o valor e pode escolher se multiplica ou divide valor
// e gera o resultado.

let valorUm = document.querySelector("#valor1");
let valorDois = document.querySelector("#valor2");
let multiplicar = document.querySelector("#multiplicar");
let dividir = document.querySelector("#dividir");
let resultado = document.querySelector("#resposta");

multiplicar.addEventListener("click", (e) => {
  e.preventDefault();
  resultado.innerHTML = valorUm.value * valorDois.value;
});

dividir.addEventListener("click", (e) => {
  e.preventDefault();
  resultado.innerHTML = valorUm.value / valorDois.value;
});
