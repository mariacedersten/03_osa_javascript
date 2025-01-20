// Kehitä ohjelma, joka pyytää käyttäjää syöttämään 20 lukua. Kun kaikki luvut on syötetty, 
// ohjelman tulisi näyttää, kuinka monta näistä luvuista on parillisia.

let parilliset = 0;

for (let kertalaskuri = 0; kertalaskuri < 20; kertalaskuri++) {  // Kysytään 20 lukua
  let syote = Number(prompt("Syötä numero"));

  if (syote % 2 == 0) {  // Tarkistetaan, onko luku parillinen
    parilliset++;
  }
}

console.log("Parillisten määrä:", parilliset);  // Tulostetaan parillisten lukujen määrä
alert("Parillisten määrä: " + parilliset);  // Näytetään tulos alert-ikkunassa



let laskuri = 0;
let parillisetLuvut = 0;

do {
  let input = prompt("Anna lisää lukuja");
  let syote = Number(input);

  // Tarkistetaan, onko syöte luku ja onko se parillinen
  if (!isNaN(syote)) {
    if (syote % 2 === 0) {
      parillisetLuvut++;
    }
    laskuri++;
  } else {
    alert("Syötä kelvollinen numero!");
  }
} while (laskuri < 20);

console.log("Parillisia lukuja oli " + parillisetLuvut);
alert("Parillisia lukuja oli " + parillisetLuvut);


