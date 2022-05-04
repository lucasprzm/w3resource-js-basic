// 16. Programa para obter a soma de dois números, caso os dois sejam iguais, triplicar a soma dos dois.

function somaTripla(valorUm, valorDois) {
  if (valorUm == valorDois) {
    console.log((valorUm + valorDois) * 3);
  } else {
    console.log(valorUm + valorDois);
  }
}
somaTripla(3, 6);
somaTripla(7, 7);
