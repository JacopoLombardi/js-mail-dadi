




// EXTRA -- collego le variabili Js con Tag HTML
const pMailList = document.querySelector('p');
let mailUser = document.querySelector('.input_mail');
const check = document.querySelector('.input_btn');
const pOutputText = document.querySelector('.output_text');

// Array con la lista delle mail consentite
const mailList = ['mail_1', 'mail_2', 'mail_3', 'mail_4', 'mail_5', 'mail_6'];

// EXTRA -- stampo su HTML tutte le mail consentite
pMailList.innerHTML += mailList.join(' -- ');

// variabile access per regolare i messaggi in uscita
let access = 'denied';


// EXTRA -- al click del Check esegui il controllo della mail
check.addEventListener('click', function(){

   // assegno a mailUser il valore letto dell'input
   mailUser = mailUser.value;

   // creo un For per controllare se la mail dell'utente è presente nella lista delle mail consentite
   for (let i=0; i<mailList.length; i++) {

      if (mailUser == mailList[i]){
         access = 'allowed';
         console.log('La tua Mail può accedere');
         pOutputText.innerHTML = `La tua Mail può accedere`    // EXTRA
      }
   }

   // se il valore della variabile Access non viene modificato nel For con Allowed avremmo il seguente messaggio
   if (access === 'denied'){
      console.log('la tua Mail non ha i permessi per accedere!!'); 
      pOutputText.innerHTML = `la tua Mail non ha i permessi per accedere!!`    // EXTRA
   }

})