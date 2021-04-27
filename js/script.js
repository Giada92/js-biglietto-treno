/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */


//chiedere all'utente il numero di chilometri da percorrere
var kmPercorrere = parseInt(prompt("Quanti km devi percorrere oggi?"));
console.log(kmPercorrere);
document.getElementById("km_percorsi").innerHTML = kmPercorrere + " km";

//chiedere all'utente l'età del passeggero
var etaPasseggero = parseInt(prompt("Quanti anni ha il passeggero?"));
console.log(etaPasseggero);
document.getElementById("eta_passeggero").innerHTML = etaPasseggero + " anni";

//costo del biglietto al km
var costoKm = 0.21;
console.log(costoKm);

//sconto del biglietto minorenni
var scontoMinorenni = 0.2;
console.log(scontoMinorenni);

//sconto del biglietto over65
var scontoOver = 0.4;
console.log(scontoOver);

//prezzo del biglietto in base all'età
var prezzo;

if (etaPasseggero >= 18 && etaPasseggero < 65) {
    prezzo = Math.round((kmPercorrere * costoKm) * 100) / 100;
    console.log(prezzo);
}else if (etaPasseggero < 18) {
    prezzo = Math.round((kmPercorrere * costoKm * scontoMinorenni) * 100) / 100;
    console.log(prezzo);
}else {
    prezzo = Math.round((kmPercorrere * costoKm * scontoOver) * 100) / 100;
    console.log(prezzo);
}

document.getElementById("costo_biglietto").innerHTML = prezzo + " euro";