// 118. Função para verificar se o valor de y está dentro da faixa de x e z.
function range(x, y, z) {
  console.log((y >= x && y <= z) || (y <= x && y >= z));
}
range(1, 2, -3);
range(1, 2, 3);
range(200, 350, 150);
