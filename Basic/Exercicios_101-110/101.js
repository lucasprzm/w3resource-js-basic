// 101. Função para verificar se as letras são do alfabeto latino e se não possui nenhuma letra minúscula ou maiúscula adjacente a outra.
function stringLatina(string) {
  let latina = 0;
  let adjacente = true;
  for (let i = 0; i < string.length; i++) {
    if (
      (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) ||
      (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122)
    ) {
      latina++;
    }
  }
  if (latina == string.length) {
    for (let i = 0; i < string.length; i++) {
      if (
        (string.charCodeAt(i) >= 65 &&
          string.charCodeAt(i) <= 90 &&
          ((string.charCodeAt(i + 1) >= 65 && string.charCodeAt(i + 1) <= 90) ||
            (string.charCodeAt(i - 1) >= 65 &&
              string.charCodeAt(i - 1) <= 90))) ||
        (string.charCodeAt(i) >= 97 &&
          string.charCodeAt(i) <= 122 &&
          ((string.charCodeAt(i + 1) >= 97 &&
            string.charCodeAt(i + 1) <= 122) ||
            (string.charCodeAt(i - 1) >= 97 &&
              string.charCodeAt(i - 1) <= 122)))
      ) {
        adjacente = false;
      }
    }
    console.log(adjacente);
  } else {
    console.log("A String não é composta somente de letras latinas.");
  }
}
stringLatina("xYr");
stringLatina("XXyx");
stringLatina("luCaS");
stringLatina("lUCAs");
