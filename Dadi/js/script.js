
// dichiaro le variabili e ne assegno subito un numero Random da 1 a 6
const numRandomUser = Math.ceil(Math.random() * 6);
const numRandomPc = Math.ceil(Math.random() * 6);

console.log(numRandomPc, numRandomUser)
// se numRandomUser è inferiore a numRandomPc, vince il Pc
if(numRandomUser < numRandomPc){
   console.log('Pc vince il gioco dei Dadi!');
}
// se i 2 numeri sono uguali la partita finisce in Parità
else if(numRandomUser === numRandomPc){
   console.log('Parità');
}



