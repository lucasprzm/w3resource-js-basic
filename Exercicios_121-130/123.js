// 123. Função para verificar se um array possui a permutação de um número.

function permutacao(array, n) {
  for (let i = 0; i < n; i++) {
    if (!array.includes(i + 1)) return false;
  }
  return true;
}
console.log(permutacao([1, 2, 3, 4, 5], 5));
console.log(permutacao([1, 2, 3, 5], 5));
