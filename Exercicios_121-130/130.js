function numeroDePares(num) {
  let pares = 0;
  let string = num.toString();
  for (let i = 0; i <= string.length; i++) {
    if (arrayString[i] % 2 == 0) {
      pares++;
    }
  }
  console.log(pares);
}
numeroDePares(123);
numeroDePares(1020);
numeroDePares(1238946);
