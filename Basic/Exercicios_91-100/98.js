// 98. Função para verificar se uma string possui mais letras minúsculas ou maiúsculas, se tiver mais minúsculas, retorna a string totalmente minúscula e vice versa.
function transformarString(string) {
  let contMaiusculas = 0;
  let contMinusculas = 0;
  let novaString = "";
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      contMaiusculas++;
    } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      contMinusculas++;
    }
  }
  if (contMaiusculas >= contMinusculas) {
    novaString = string.toUpperCase();
  } else if (contMinusculas > contMaiusculas) {
    novaString = string.toLowerCase();
  }
  console.log(novaString);
}
transformarString("Write");
transformarString("PHp");
transformarString("LUCas");
transformarString("lucAS");
