
// Array con la lista delle mail consentite
const mailList = ['mail_1', 'mail_2', 'mail_3', 'mail_4', 'mail_5', 'mail_6',];


// chiedo all'utente la sua mail
const mailUser = prompt('inserisci la tua mail: (mail_1-6)');


// variabile access per regolare i messaggi in uscita
let access = 'denied';


// creo un For per controllare se la mail dell'utente è presente nella lista delle mail consentite
for (let i=0; i<mailList.length; i++) {

   if (mailUser === mailList[i]){
      access = 'allowed';
      console.log('La tua Mail può accedere');
   }
}


// se il valore della variabile Access non viene modificato nel For con Allowed avremmo il seguente messaggio
if (access === 'denied'){
   console.log('la tua Mail non ha i permessi per accedere!!');
}




