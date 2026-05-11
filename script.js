"use strict";
// 1) Quali sono i tipi primitivi principali in TypeScript?
console.log("esercizio 1");
console.log(`i tipi di dati primitivi in ts sono: 
    -string
    -number
    -boolean
    -undefined
    -null
    -any`);
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
console.log("esercizio 2");
let nome = "Roberto";
let età = 30;
let typeScritpStudente = true;
console.log(nome);
console.log(età);
console.log(typeScritpStudente);
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
console.log("esercizio 3");
const greet = (name) => {
    return "Ciao " + name;
};
console.log(greet("Roberto"));
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
console.log("esercizio 4");
const sum = (a, b) => {
    return a + b;
};
console.log(sum(10, 20));
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
console.log("esercizio 5");
const fullPrice = (a) => {
    return a * 1.22;
};
console.log(fullPrice(10));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
console.log("esercizio 6");
const sumString = (a, b) => {
    const c = a + b;
    return c.length;
};
console.log(sumString("sono", "roberto"));
// 7) Cos'è un Type Union e come si scrive?
console.log("esercizio 7");
console.log(`in TS il type Union perfette a una variabile o paramento  di accettare diversi tipi`);
let x;
x = "roberto";
console.log("x può essere" + " " + x);
x = 300;
console.log(x);
// 8) Crea una variabile che possa contenere un numero, null o undefined.
console.log("esercizio 8");
let y;
y = 300;
console.log(y);
y = null;
console.log(y);
y = undefined;
console.log(y);
// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
console.log("esercizio 9");
let actualMounth = "maggio";
// let actualMounth: mounth= 'winter' --> questo è errato 'winter' non fa parte della dichiarazione di muonth
console.log(actualMounth);
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
console.log("esercizio 10");
const numbers = [1, 2, 3];
const numeri = [1, 2, 3];
console.log(numeri);
const numeri2 = [1, 2, 3];
console.log(numeri2);
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
console.log("esercizio 11");
let dati = ["uno", "due", "tre", 4, 5];
console.log(dati);
// 12) Qual è la differenza tra type e interface?
console.log("esercizio 12");
console.log(`la differenza tra type e interface è:
    -l'interface è pensata per descrivere oggetti e supporta l'estensione
    -il type non supporta l'estensione `);
// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
console.log("esercizio 13");
const user = {
    firstname: "Roberto",
    lastname: "Cafagna",
    age: 30,
};
console.log(user);
// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
console.log("esercizio 14");
const User1 = {
    email: "test@gmial.com",
};
const User2 = {
    email: "test2@gmial.com",
    phone: "335556677",
};
console.log(User1);
console.log(User2);
// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
console.log("esercizio 15");
const Studenti = [
    {
        nome: "stefano",
        voto: 10,
    },
    {
        nome: "roberto",
        voto: 3,
    },
    {
        nome: "carlo",
        voto: 6,
    },
];
console.log(Studenti);
//
//
//
//
// metodo alternativo
// const Studenti: Array<Studente> = [
//   {
//     nome: "stefano",
//     voto: 10,
//   },
//   {
//     nome: "roberto",
//     voto: 3,
//   },
//   {
//     nome: "carlo",
//     voto: 6,
//   },
// ]
//
//
//
//
//
// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
console.log("esercizio 16");
const LamiaAuto = {
    assicurato: false,
    targa: "FG 15230 AB",
    anno: 1993,
    km: 21.189,
    modello: "fiat uno",
    numeroPorte: 5,
};
console.log(LamiaAuto);
// 17) Crea un oggetto che implementi l'interfaccia Auto.
console.log("esercizio 17");
const LamiaAuto2 = {
    assicurato: true,
    targa: "CD 16890 SG",
    anno: 1972,
    km: 200.845,
    modello: "Lancia Delta",
    numeroPorte: 5,
};
console.log(LamiaAuto);
// 18) Cosa sono i Generics in TypeScript?
console.log("esercizio 18");
const boxDiNumeri = { contenuto: 42 };
console.log(boxDiNumeri);
const boxDitesti = { contenuto: "ciao" };
console.log(boxDitesti);
console.log(`i generics in TS sono un modo per scrivere codice riutilizzabile e tipicizzato in modo flessibile
    -un generics ti permette di utilizzare un tipo come paramentro`);
// 19) È possibile avere più tipi generici in un'interfaccia?
console.log("esercizio 19");
console.log(`si in Ts è possibile avere più tipi generics in una solo interfaccia, separandoli con la virgola`);
const risposta = {
    data: "ok",
    error: null,
};
console.log(risposta);
// 20) Crea un'interfaccia generica per una risposta API.
console.log("esercizio 20");
