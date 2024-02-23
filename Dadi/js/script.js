
// dichiaro le variabili e ne assegno subito un numero Random da 1 a 6
const numRandomUser = Math.ceil(Math.random() * 6);
const numRandomPc = Math.ceil(Math.random() * 6);

// EXTRA -- dichiaro delle variabili che assumono il valore della classe in HTML
const divNumUser = document.querySelector('.num_user');
const divNumPc = document.querySelector('.num_pc');
const divTextOutput = document.querySelector('.text_output');
let message = '';

// EXTRA -- scrivo in HTML il valore dei numeri estratti
divNumUser.innerHTML = numRandomUser;
divNumPc.innerHTML = numRandomPc;


// visualizzazione dei numeri estratti in console
console.log(numRandomPc, numRandomUser)


// se numRandomUser è inferiore di numRandomPc, vince il Pc
if(numRandomUser < numRandomPc){
   console.log('Pc vince il gioco dei Dadi!');
   message = 'Pc';   //EXTRA
}
// se numRandomUser è maggiore a numRandomPc, vince l'User
else if(numRandomUser > numRandomPc){
   console.log('User vince il gioco dei Dadi!');
   message = 'User';   //EXTRA
}
// oppure se i 2 numeri sono uguali la partita finisce in Parità
else{
   console.log('Parità');
   message = 'Parità';   //EXTRA
}



// EXTRA -- condizione per cui mandare i messaggi all'HTML
if((message === 'Pc') || (message === 'User')){
   divTextOutput.innerHTML = `${message} vince il gioco dei Dadi!`;
}
else if(message === 'Parità'){
   divTextOutput.innerHTML = `${message}`;
}


