// 103. Função para verificar um número inteiro e remover 1 dígito que vai gerar o maior número dentro do próprio número.
function removerDigito(numero) {
  let string = numero.toString();
  let maior = 0;
  let array = string.split("");
  for (let i = 0; i < array.length; i++) {
    let itemRemovido = array.splice(i, 1);
    let testeMaior = array.join("");
    array.splice(i, 0, itemRemovido);
    if (testeMaior > maior) {
      maior = testeMaior;
    }
  }
  console.log(maior);
}

removerDigito(1245);
removerDigito(100);
removerDigito(54943248);
