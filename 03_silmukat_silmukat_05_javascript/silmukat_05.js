// Kehitä ohjelma, joka jatkaa käyttäjän pyytämistä syöttämään numeroita, kunnes käyttäjä syöttää 0. 
// Tässä vaiheessa ohjelma lopettaa toimintansa. 
// Lopetettuaan ohjelman tulisi laskea ja näyttää kaikkien syötettyjen numeroiden keskiarvo.

let summa = 0;
let lukujenMaara = 0;

while (true) {
    let syote = Number(prompt("Syötä numero (0 lopettaa):"));

    if (syote === 0) {
        break; // Lopetetaan, jos syöte on 0
    }

    // Lisätään luku summaan ja kasvatetaan laskuria
    summa += syote;
    lukujenMaara++;
}

if (lukujenMaara > 0) {
    let keskiarvo = summa / lukujenMaara;
    console.log("Syötettyjen lukujen keskiarvo on:", keskiarvo);
    alert("Syötettyjen lukujen keskiarvo on: " + keskiarvo);
} else {
    console.log("Et syöttänyt yhtään numeroa.");
    alert("Et syöttänyt yhtään numeroa.");
}