// 50. Programa para mudar para maiuscula a primeira letra de cada palavra de uma determinada string.
function maiuscula(string) {
  for (let i = 0; i < string.length; i++) {
    let element = string.charCodeAt(i);
    if (i == 0 || string.charCodeAt(i - 1) == 32) {
      string = string.replace(string[i], String.fromCharCode(element - 32));
    }
  }
  console.log(string);
}
maiuscula("pedro silva");
maiuscula("lucas prazeres de matos");
