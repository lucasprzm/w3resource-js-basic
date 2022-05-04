// 113. Função que soma a metade dos inteiros, gravando o valor de cada um no resultado.
function somaFracoes(num) {
  let resultado = 0;
  if (Number.isInteger(num)) {
    while (num > 0) {
      resultado += num;
      num = Math.floor(num / 2);
    }
    console.log(resultado);
  } else {
    console.log("O número fornecido não é um inteiro.");
  }
}
somaFracoes(26);
somaFracoes(8);
somaFracoes(32);
