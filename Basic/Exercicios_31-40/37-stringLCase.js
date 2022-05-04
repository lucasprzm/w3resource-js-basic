function stringLowerCase(string) {
  if (string.length < 3) {
    console.log(string.toUpperCase());
  } else {
    console.log(
      string.substring(0, 3).toLowerCase() + string.substring(3, string.length)
    );
  }
}
stringLowerCase("PAÇoca");
stringLowerCase("oie");
stringLowerCase("CONta-corrente");
