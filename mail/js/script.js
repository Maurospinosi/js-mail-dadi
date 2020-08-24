var mail = prompt("inserisci la Mail");

var mail_utente = ['mauro@hotmail.com', 'spinosi@gmail.com', 'cimrop@gmail.com', 'maurospinosi@gmail.com'];

var mail_reg = false;

for(var i = 0; i<mail_utente.length; i++){
  if(mail == mail_utente [i]){
    mail_reg = true;
  }
}

document.getElementById('text').innerHTML = mail_reg;
