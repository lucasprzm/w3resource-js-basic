// 131. Função que calcula o subtotal de um array, somando os elementos 
function subtotalArray(array = []) {
  let arraySubtotal = [array[0]];
  for (let i = 1; i < array.length; i++) {
    arraySubtotal.push(array[i] + arraySubtotal[i - 1]);
  }
  console.log(arraySubtotal);
}
subtotalArray([1, 2, 3, 4, 5]);
subtotalArray([1, 2, -3, 4, 5]);
subtotalArray([10, 25, 60, 80, 9, 10]);
