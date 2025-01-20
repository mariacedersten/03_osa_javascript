/* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.*/

let summa = 0;
let lukujenMaara = 0;

while (true) {
    let numero = parseFloat(prompt("Syötä numero:"));
    
    // Tarkistetaan, että syöte on luku
    if (isNaN(numero)) {
        alert("Syötä kelvollinen numero!");
        continue;
    }

    summa += numero;
    lukujenMaara++;

    let vastaus;
    do {
        vastaus = prompt("Haluatko jatkaa numeroiden antamista? (k/e)").toLowerCase();

        if (vastaus !== 'k' && vastaus !== 'e') {
            alert("Virheellinen syöte. Vastaa 'k' tai 'e'.");
        }
    } while (vastaus !== 'k' && vastaus !== 'e');

    if (vastaus === 'e') {
        break;
    }
}

// Laske keskiarvo
let keskiarvo = summa / lukujenMaara;

// Tulosta keskiarvo
alert(`Kaikkien syötettyjen numeroiden keskiarvo: ${keskiarvo}`);
console.log(`Kaikkien syötettyjen numeroiden keskiarvo: ${keskiarvo}`);