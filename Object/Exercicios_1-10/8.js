setInterval(() => {
  let relogio = new Date();
  let horas = relogio.getHours();
  let minutos = relogio.getMinutes();
  let segundos = relogio.getSeconds();
  console.log(`${horas}:${minutos}:${segundos}`);
}, 1000);
