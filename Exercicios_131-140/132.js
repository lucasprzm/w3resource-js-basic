// 132. Função para fatorar números e mostrar os valores únicos que foram usados na divisão dos números iniciais.
function fatoracaoPrimos(numero) {
  let array = [];
  let numeroDivisores = 0;
  // Se for primo, já resolve antes:
  for (let i = 2; i <= numero; i++) {
    if (numero % i == 0) {
      numeroDivisores++;
    }
  }
  if (numeroDivisores == 1) {
    array.push(numero);
    return console.log(array);
  }
  while (numero != 1) {
    for (let i = 2; i <= numero; i++) {
      //console.log("i linha 16", i);
      if (numero % i == 0) {
        numero = numero / i;
        //console.log("numero linha 19", numero);
        array.push(i);
        //console.log("array linha 21", array);
        while (numero % i == 0) {
          numero = numero / i;
          //console.log("numero linha 24", numero);
        }
      }
    }
  }
  console.log(array);
}
fatoracaoPrimos(101);
fatoracaoPrimos(100);
fatoracaoPrimos(103);
fatoracaoPrimos(104);
fatoracaoPrimos(105);
