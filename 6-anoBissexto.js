// 6. Função para calcular se o ano é ano bissexto.

function anoBissexto(ano) {
  if (ano % 4 == 0) {
    if (ano % 100 == 0) {
      if (ano % 400 == 0) {
        console.log("O ano informado é um ano bissexto.");
      } else {
        console.log("O ano informado não é ano bissexto.");
      }
    } else {
      console.log("O ano informado é um ano bissexto.");
    }
  } else {
    console.log("O ano informado não é ano bissexto.");
  }
}
anoBissexto(2000);
