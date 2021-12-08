// 23. Programa criado para trocar a primeira letra com a última letra de uma string. No caso de uma string com apenas um caractere, imprime a string.

function stringFL(string) {
  if (string.length <= 1) {
    console.log(string);
  } else {
    console.log(
      string.substring(string.length - 1) +
        string.substring(1, string.length - 1) +
        string.substring(0, 1)
    );
  }
}
stringFL("lucas");
stringFL("pedro");
stringFL("proximo");
stringFL("a");
stringFL("ab");
