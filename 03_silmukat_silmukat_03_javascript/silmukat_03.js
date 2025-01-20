// Luo ohjelma, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä) ja ajan (tunteina) ja laskee sitten keskinopeuden. 
//Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi. Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä.
// Tehdään tämä opettajan esimerkkinä

let etaisyys, aika;

while (true) {
  etaisyys = parseFloat(prompt("Syötä etäisyys (kilometreinä). Syötä 0 lopettaaksesi:"));

  // Tarkista, jos etäisyys on 0, ohjelma lopettaa
  if (etaisyys === 0) {
    alert("Ohjelma lopetettu.");
    break;
  }

  // Tarkista, onko syöte kelvollinen
  if (isNaN(etaisyys) || etaisyys < 0) {
    alert("Syötä kelvollinen positiivinen luku etäisyydeksi.");
    continue;
  }

  aika = parseFloat(prompt("Syötä aika (tunteina):"));

  // Tarkista, onko aika kelvollinen
  if (isNaN(aika) || aika <= 0) {
    alert("Syötä kelvollinen positiivinen luku ajaksi.");
    continue;
  }

  // Laske keskinopeus
  let keskinopeus = etaisyys / aika;
  let pyoristettyKeskinopeus = keskinopeus.toFixed(1);

  // Tulosta tulos
  alert(`Kun etäisyys on ${etaisyys} km ja aika ${aika} tuntia, keskinopeus on ${pyoristettyKeskinopeus} km/h.`);
}