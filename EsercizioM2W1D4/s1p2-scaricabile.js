/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
   Number = rappresentazione di un valore numerico
   String = rappresentazione di una sequenza di caratteri
   Boolean = rappresentazione di un valore logico che può essere true o false
   Null = rappresentazione di un valore nullo, sono tutti quei valori che non hanno nessun valore o per svuotare una variabile
   Undefined = rappresentazione di un valore non definito, sono tutti quei valori che non sono stati ancora assegnati
   Object = rappresentazione di un oggetto
   BigInt = rappresentazione di valori numerici molto grandi

*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* 
   Un oggetto in JavaScript è un contenitore di dati e metodi. Può contenere proprietà (variabili) e funzioni, che permettono di rappresentare e manipolare i dati contenuti nell’oggetto.
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = 12;
const num2 = 20;
const somma = num1 + num2;
console.log(`Esercizio 3 - Somma: ${somma}`);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const x = 12;
console.log(`Esercizio 4 - x: ${x}`);

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name = "Claudia";
console.log(`Esercizio 5 - name: ${name}`);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const sottrazione = 4 - x;
console.log(`Esercizio 6 - Sottrazione: ${sottrazione}`);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name1 = "john";
const name2 = "John";
console.log(`Esercizio 7 - name1: ${name1}`);
console.log(`Esercizio 7 - name2: ${name2}`);
console.log(`Esercizio 7 - name1 === name2: ${name1 === name2}`);
console.log(`Esercizio 7 - name1.toLowerCase() === name2.toLowerCase(): ${name1.toLowerCase() === name2.toLowerCase()}`);
