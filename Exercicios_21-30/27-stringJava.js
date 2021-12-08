// 27. Programa para verificar se uma string inicia com as letras Java.

function stringJava(string) {
  console.log(string.substring(0, 4) == "Java");
}
stringJava("JavaScript");
stringJava("Javali");
stringJava("Jarvis");
stringJava("Jav");
