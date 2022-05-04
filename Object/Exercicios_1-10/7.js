// 7. Criação de propriedade de string que mostra as possíveis substrings de uma palavra.
String.prototype.subset = function () {
  let subString = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length + 1; j++) {
      subString.push(this.slice(i, j));
    }
  }
  return subString;
};
console.log("dog".subset());
