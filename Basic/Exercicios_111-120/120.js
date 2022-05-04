// 120. Função para verificar se certas coordenadas estão dentro de um círculo.
function dentroCirculo(circulo, posicao) {
  let { x, y, r } = circulo;
  let { a, b } = posicao;
  console.log(a <= x + r && b <= y + r);
}
dentroCirculo({ x: 10, y: 10, r: 10 }, { a: 12, b: 15 });
dentroCirculo({ x: 5, y: 5, r: 8 }, { a: 15, b: 15 });
