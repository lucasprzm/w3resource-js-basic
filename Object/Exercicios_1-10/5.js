// 5. Determinação do volume de um cilindro, a partir da classe de um objeto.

class Cilindro {
  constructor(raio, altura) {
    this.raio = raio;
    this.altura = altura;
  }
  volume() {
    return (Math.PI * (this.raio * this.raio) * this.altura).toFixed(4);
  }
}

let cilindro = new Cilindro(4, 3.5);
console.log(cilindro.volume());
