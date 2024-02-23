
// EXTRA -- collego le variabili Js con Tag HTML
const pMailList = document.querySelector('.mail_permesse');
const mailUser = document.querySelector('.input_mail');
const check = document.querySelector('.input_btn');
const pOutputText = document.querySelector('.output_text');

// Array con la lista delle mail consentite
const mailList = ['mail_1', 'mail_2', 'mail_3', 'mail_4', 'mail_5', 'mail_6'];

// EXTRA -- stampo su HTML tutte le mail consentite
pMailList.innerHTML += mailList.join(' -- ');


// EXTRA -- al click del Check esegui il controllo della mail
check.addEventListener('click', function(){

   // variabile che serve da rilevatore per il ciclo For, perchè quando veniva inserita una mail giusta,
   // in output stampava sia il messaggio della mail giusta, sia quello della mail sbagliata dato che 
   // il For continuava, e una volta in fondo, anche la condizione di riga 36 si avverava.
   let x = '';

   // creo un For per controllare se la mail dell'utente è presente nella lista delle mail consentite
   for (let i=0; i<mailList.length; i++){

      if (mailUser.value === mailList[i]){        
         console.log('La tua Mail può accedere');
         pOutputText.innerHTML = `La tua Mail può accedere`    // EXTRA
         x = 'mail controllata';
      }
      // se il valore della variabile Access non viene modificato nel For con Allowed avremmo il seguente messaggio
      else if (i === (mailList.length - 1) && (x != 'mail controllata')){
         console.log('la tua Mail non ha i permessi per accedere!!'); 
         pOutputText.innerHTML = `la tua Mail non ha i permessi per accedere!!`    // EXTRA
      }  
   }

})