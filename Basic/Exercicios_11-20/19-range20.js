// 19. Programa que determina se o número passado está em um range de 20 para cima ou 20 para baixo de 100 ou 400.
function faixaNumero(numero) {
  if (numero >= 80 && numero <= 120) {
    console.log("O número está entre 80 e 100");
  } else if (numero >= 380 && numero <= 420) {
    console.log("O número está entre 380 e 400");
  } else {
    console.log("O número não está dentro da faixa especificada.");
  }
}
faixaNumero(60);
faixaNumero(90);
faixaNumero(150);
faixaNumero(385);
