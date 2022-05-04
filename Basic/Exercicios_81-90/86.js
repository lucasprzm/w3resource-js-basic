// 86. Função para verificar qual a classificação de um ângulo de acordo com seu valor.
function anguloClassificacao(angulo) {
  if (angulo >= 0 && angulo < 90) {
    console.log("Ângulo agudo!");
  } else if (angulo == 90) {
    console.log("Ângulo reto!");
  } else if (angulo > 90 && angulo < 180) {
    console.log("Ângulo obtuso!");
  } else if (angulo == 180) {
    console.log("Ângulo de meia-volta!");
  }
}
anguloClassificacao(30);
anguloClassificacao(90);
anguloClassificacao(115);
anguloClassificacao(180);
