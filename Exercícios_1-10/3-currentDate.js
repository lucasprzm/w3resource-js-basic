// 3. Programa para gerar a data de hoje no formato XX/XX/XXXX.

function date() {
  let hoje = new Date();
  let dia = hoje.getDate();
  if (dia < 10) {
    dia = "0" + dia;
  }

  console.log(`${dia}/${hoje.getMonth() + 1}/${hoje.getFullYear()}`);
}
date();
