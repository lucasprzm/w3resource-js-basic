function numeroHora(minutos) {
  if (minutos >= 0) {
    if (minutos % 60 == 0) {
      console.log(`${Math.floor(minutos / 60)}:${minutos % 60}0`);
    } else if (minutos % 60 < 10) {
      console.log(`${Math.floor(minutos / 60)}:0${minutos % 60}`);
    } else {
      console.log(`${Math.floor(minutos / 60)}:${minutos % 60}`);
    }
  } else {
    console.log(`O número digitado é menor do que zero.`);
  }
}
numeroHora(450);
numeroHora(200);
numeroHora(-220);
numeroHora(720);
numeroHora(40);
numeroHora(1441);
