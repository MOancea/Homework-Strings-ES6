//Tema 26.04 :)

// 1. Se da urmatorul string:
let badKids =
  "Lista copiilor pedepsiti este urmatoarea: Manuela, Rob, Vicentiu";
// 1.1 Verifica daca numele "Rob" se afla pe lista.

let name = "Rob";
console.log(
  `The name "${name}" ${badKids.includes(name) ? `is` : `is not`} on the list`
);

// 1.2 Daca numele "Rob" se afla pe lista, modifica lista, astfel incat in locul lui "Rob" sa fie "Mihai".

let newList = badKids.replace("Rob", "Mihai");
console.log(newList);

// 2. Se da urmatorul string:
const testGrades = [9.8, 6.85, 9.1, 7.8, 8.2];
// Sa se calculeze media aritmetica a notelor.
// HINT: Transforma string-ul intr-un array si apoi itereaza prin array.
let sum = 0;
testGrades.forEach((testGrades) => {
  sum += testGrades;
});
console.log(sum);

const average = sum / testGrades.length;
console.log(average);

// 3. Se da urmatorul obiect:
const props = {
  name1: "Minge fotbal Nike T90",
  price: 220,
  currency: "RON",
  brand: "Nike",
};
// 3.1. Extrage din obiect valorile urmatoarelor proprietati: name, price, currency.
const { name1, price, currency } = props;

// 3.2. Folosind proprietatile extrase anterior, afiseaza un mesaj de forma: "Produsul NAME are pretul PRICE".

const text = `Produsul ${name1} are pretul ${price} ${currency}.`;
console.log(text);

// 4. Se da inca un obiect:
const additionalProps = {
  isAvailable: true,
};
// Creeaza un obiect nou, care sa contina proprietatile obiectelor props si additionalProps.

const newProps = Object.assign({}, props, additionalProps);
console.log(newProps);
