// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 


let km = prompt("scrivi i kilometri che vuoi percorrere")
let età = prompt("scrivi la tua età")
let costoBiglietto = km * 0.21

if(età >= 65 ){
    console.log(costoBiglietto * 40 / 100)
} 
else if( età <= 18 ){
    console.log(costoBiglietto * 20 / 100)
}
else(
    console.log(costoBiglietto)
)


