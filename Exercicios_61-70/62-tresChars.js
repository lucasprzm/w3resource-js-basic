function tresChars(string) {
  if (string.length >= 3) {
    console.log(
      string.substring(string.length - 3) +
        string.substring(0, string.length - 3)
    );
  } else {
    console.log("A string tem menos de 3 caracteres.");
  }
}
tresChars("joaquim");
tresChars("bruno");
