//48. Revertendo string.
function reverseString(string) {
  let novaString = "";
  for (let i = 1; i <= string.length; i++) {
    novaString += string[string.length - i];
  }
  console.log(novaString);
}
reverseString("Gabriel");
reverseString("Pedro");
reverseString("Bruno");
reverseString("Legal");
reverseString("Olá, tudo bem!");
