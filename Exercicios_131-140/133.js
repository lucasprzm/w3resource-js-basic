// 133. Função para verificar se uma fração é própria ou imprópria.
function fracaoPropriaImpropria(fracao = []) {
  if (fracao[0] > fracao[1]) {
    console.log("Fração imprópria!");
  } else console.log("Fração própria!");
}
fracaoPropriaImpropria([12, 300]);
fracaoPropriaImpropria([2, 4]);
fracaoPropriaImpropria([103, 3]);
fracaoPropriaImpropria([104, 2]);
fracaoPropriaImpropria([5, 40]);
