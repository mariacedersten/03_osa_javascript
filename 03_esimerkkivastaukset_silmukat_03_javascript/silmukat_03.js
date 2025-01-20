// Luo ohjelma, joka pyytää jatkuvasti käyttäjää syöttämään 
//etäisyyden (kilometreinä) ja ajan (tunteina) ja laskee sitten keskinopeuden. 
//Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi. 
//Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä.

let etaisyys, aika;

while (true) {  // Käytetään "true" loopissa ja breakataan, jos etäisyys on 0
  etaisyys = Number(prompt("Syötä etäisyys kilometreinä:"));

  if (etaisyys === 0) {
    console.log("Ei enempää keskinopeuksia");
    break;  // Lopettaa silmukan
  }

  aika = Number(prompt("Syötä aika tunteina:"));
  
  if (aika === 0) {
    console.log("Aika ei voi olla nolla");
    break;  // Jos aika on nolla, ohjelma lopettaa
  }

  let keskinopeus = etaisyys / aika;
  let pyoristetty = keskinopeus.toFixed(1);
  
  console.log(`Kun ajetaan ${etaisyys} kilometriä ${aika} tunnin aikana, keskinopeus on ${pyoristetty} km/h`);
  alert(`Kun ajetaan ${etaisyys} kilometriä ${aika} tunnin aikana, keskinopeus on ${pyoristetty} km/h`);
}
