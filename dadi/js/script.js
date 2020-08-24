var utente = Math.floor(Math.random() * 6) + 1;
var pc = Math.floor(Math.random() * 6) + 1;
document.getElementById('dado').innerHTML = utente;
document.getElementById('dado_pc').innerHTML = pc;


  if (utente > pc) {
    utente = "Win";
    document.getElementById('result').innerHTML = utente;
  }else if (utente == pc) {
    utente = "Draw";
    document.getElementById('result').innerHTML = utente;
  } else{
    utente = "Lose";
    document.getElementById('result').innerHTML = utente;
  }
