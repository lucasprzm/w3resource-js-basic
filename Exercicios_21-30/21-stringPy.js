// 21. Programa para adicionar no início de uma string a string Py, caso a string não comece com Py.

function stringPy(string) {
  if (string.startsWith("Py")) {
    console.log(string);
  } else {
    console.log("Py" + string);
  }
}
stringPy("Lucas");
stringPy("Python");
