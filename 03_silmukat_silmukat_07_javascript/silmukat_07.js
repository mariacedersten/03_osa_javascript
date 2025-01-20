// Tee ohjelma, joka kysyy kymmentä numeroa. Ohjelma laskee ja tulostaa summan ja keskiarvon sekä 
// tulostaa pienimmän ja suurimman numeron.
// Tähän on ainakin kaksi vaihtoehtoa, löydät ne esimerkkivastaukset - kansiosta

let summa = 0;
let lukujenMaara = 0;
let maxLuku = -Infinity; // ensimmäinen käyttäjän antama luku on isompi kuin tämä
let minLuku = Infinity;  // ensimmäinen käyttäjän antama luku on pienempi kuin tämä

for (let i = 0; i < 10; i++) { // kysytään 10 numeroa
  let syote = Number(prompt("Anna luku:"));
    
  if (isNaN(syote)) {
    alert("Syötä kelvollinen luku!");
    i--; // Vähennetään laskuria, jotta voidaan pyytää oikea syöte
  } else {
    summa += syote;
    lukujenMaara++;

    if (syote > maxLuku) {
      maxLuku = syote;
    }

    if (syote < minLuku) {
      minLuku = syote;
    }
  }
}

let keskiarvo = summa / lukujenMaara;
console.log("Lopussa lukujen summa on:", summa);
alert("Lopussa lukujen summa on: " + summa);
console.log("Lopussa lukujen keskiarvo on:", keskiarvo);
alert("Lopussa lukujen keskiarvo on: " + keskiarvo);
console.log("Isoin annettu luku on:", maxLuku);
alert("Isoin annettu luku on: " + maxLuku);
console.log("Pienin annettu luku on:", minLuku);
alert("Pienin annettu luku on: " + minLuku);