// 127.  Função que converte um número para binário e inverte a ordem do binário, gerando um número diferente.
function inversaoBinario(numero) {
  console.log(parseInt(numero.toString(2).split("").reverse().join(""), 2));
}
inversaoBinario(56);
inversaoBinario(244);
