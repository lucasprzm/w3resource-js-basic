// 64. Programa para concatenar duas strings de mesmo tamanho, caso uma delas seja maior que a outra, a maior é cortada antes de concatenar as duas.
function concatenar(string1, string2) {
  if (string1.length == string2.length) {
    console.log(string1 + string2);
  } else if (string1.length > string2.length) {
    console.log(string1.substring(0, string2.length) + string2);
  } else if (string1.length < string2.length) {
    console.log(string1 + string2.substring(0, string1.length));
  }
}
concatenar("lucas", "lara");
concatenar("maria", "eduardo");
