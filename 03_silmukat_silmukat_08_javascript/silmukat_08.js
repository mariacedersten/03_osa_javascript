// Tee ohjelma, joka kysyy aluksi käyttäjältä, kuinka monta numeroa he haluavat syöttää. 
//Saatuaan tämän tiedon ohjelman tulisi pyytää käyttäjää syöttämään jokainen näistä numeroista. 
//Kun kaikki numerot on syötetty, ohjelman tulisi selvittää ja näyttää käyttäjän antamista numeroista pienin ja suurin.

let количествоЧисел = parseInt(prompt("Сколько чисел вы хотите ввести?"));
let числа = [];

for (let i = 0; i < количествоЧисел; i++) {
    let число = parseFloat(prompt(`Введите число ${i + 1}:`));
    числа.push(число);
}

let наименьшееЧисло = Math.min(...числа);
let наибольшееЧисло = Math.max(...числа);

console.log(`Наименьшее число: ${наименьшееЧисло}`);
alert(`Наименьшее число: ${наименьшееЧисло}`);
console.log(`Наибольшее число: ${наибольшееЧисло}`);
alert(`Наибольшее число: ${наибольшееЧисло}`);