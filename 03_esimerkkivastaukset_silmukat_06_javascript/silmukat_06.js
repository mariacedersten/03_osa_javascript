/* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.*/

let summa = 0;
let lukujenMaara = 0;

let numero = prompt("Syötä numero:");

// Tarkistetaan, että syöte on numero
if (isNaN(numero)) {
    alert("Syötä kelvollinen numero!");
} else {
    numero = parseFloat(numero); // Muutetaan syöte numeroksi
    summa += numero;
    lukujenMaara++;
}

while (true) {
    let vastaus;
    
    do {
        vastaus = prompt("Haluatko jatkaa numeroiden antamista? (k/e)");

        if (vastaus !== 'k' && vastaus !== 'e') {
            alert("Virheellinen syöte. Vastaa 'k' tai 'e'.");
        }
    } while (vastaus !== 'k' && vastaus !== 'e');

    if (vastaus === 'e') {
        break;
    }

    // Jos vastaus on 'k', pyydetään seuraavaa numeroa
    let seuraavaNumero = prompt("Syötä numero:");
    if (isNaN(seuraavaNumero)) {
        alert("Syötä kelvollinen numero!");
        continue; // Ohittaa tämän kierroksen ja pyytää syötteen uudelleen
    }

    seuraavaNumero = parseFloat(seuraavaNumero); // Muutetaan syöte numeroksi
    summa += seuraavaNumero;
    lukujenMaara++;
}

// Laske keskiarvo
let keskiarvo = summa / lukujenMaara;

// Näytä keskiarvo
console.log("Kaikkien syötettyjen numeroiden keskiarvo:", keskiarvo);
alert("Kaikkien syötettyjen numeroiden keskiarvo: " + keskiarvo);
