// 119. Função para verificar se os dígitos de um número são crescentes.
function acrescimo(numero) {
  let string = numero.toString();
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= string[i + 1]) {
      return console.log(false);
    }
  }
  console.log(true);
}
acrescimo(1223);
acrescimo(138);
acrescimo(159);
acrescimo(213);
