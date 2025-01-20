// Kehitä ohjelma, joka pyytää käyttäjää syöttämään 20 lukua. Kun kaikki luvut on syötetty, 
//ohjelman tulisi näyttää, kuinka monta näistä luvuista on parillisia.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta. 

let parillisetLuvut = 0;

for (let i = 0; i < 20; i++) {
    let syote = Number(prompt(`Anna ${i + 1}. luku (20 luvusta):`));
    
    // Tarkistetaan, onko luku parillinen
    if (syote % 2 === 0) {
        parillisetLuvut++;
    }
}

// Näytetään lopputulos käyttäjälle
alert(`Syöttämistäsi luvuista ${parillisetLuvut} on parillisia.`);
console.log(`Syöttämistäsi luvuista ${parillisetLuvut} on parillisia.`);