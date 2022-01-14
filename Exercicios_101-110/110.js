//110. Função que verifica quais números são pares, em um dado array, nos elementos de índices menores ao número escolhido. Nenhum número do array pode ser repetido.
function paresAntes(array, numero) {
  let indice = array.indexOf(numero);
  let pares = 0;
  for (let i = 0; i < indice; i++) {
    if (array[i] % 2 == 0) {
      pares++;
    }
  }
  console.log(pares);
}
paresAntes([1, 2, 3, 4, 5, 6, 7, 8], 5);
paresAntes(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  12
);
paresAntes(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  12
);
