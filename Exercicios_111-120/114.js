// 114. Função para verificar se uma frase inicia com palavra maiúscula e termina com ponto final.
function frase(string) {
  console.log(/[A-Z]/.test(string[0]) && /[.]/.test(string[string.length - 1]));
}
frase("Lucas.");
frase("Teste.");
frase("legal");
