// 8. O programa JavaScript gera um valor inteiro aleatório entre 1 a 10,
// o usuário precisa chutar um número. Se o número que o usuário chutar estiver certo,
//o programa mostra "Acertou!", caso erre, mostre "Errou, tente novamente"

let valor = 0;
let chute = document.querySelector("#chute");
let enviar = document.querySelector("#enviar");
let paragrafo = document.querySelector("#paragrafo");

function sorteio() {
  valor = Math.floor(Math.random() * 9) + 1;
  console.log(valor);
  return valor;
}
sorteio();

enviar.addEventListener("click", () => {
  if (chute.value == valor) {
    paragrafo.innerHTML = "Acertou!";
  } else {
    paragrafo.innerHTML = "Errou, tente de novo!";
  }
});
