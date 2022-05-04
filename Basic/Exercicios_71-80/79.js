// 79. Função que verifica se um array de dois ou menos elementos possui os números 30 ou 40 repetidos.
function trintaQuarenta(array) {
  let trinta = 0;
  let quarenta = 0;
  if (array.length <= 2) {
    array.forEach((element) => {
      if (element == 30) {
        trinta++;
      } else if (element == 40) {
        quarenta++;
      }
    });
    console.log(trinta == 2 || quarenta == 2);
  } else {
    console.log("O array apresentado tem mais de dois elementos.");
  }
}
trintaQuarenta([30, 30]);
trintaQuarenta([40, 40]);
trintaQuarenta([30, 40]);
trintaQuarenta([30, 40, 50]);
