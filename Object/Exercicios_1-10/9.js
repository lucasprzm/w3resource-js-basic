// 9. Classe de um círculo com os métodos área e perímetro.
class Circulo {
  constructor(raio) {
    this.raio = raio;
  }
  area() {
    return this.raio * this.raio * Math.PI;
  }
  perimetro() {
    return 2 * Math.PI * this.raio;
  }
}
let circulo = new Circulo(3);
console.log(circulo.area());
console.log(circulo.perimetro());
