//crea una funzione che controlli due numeri interi. Ritorna true se uno dei due è 50 o se la somma dei due è 50.

function addition(num1, num2) {
    return num1 === 50 || num2 === 50 || num1 + num2 === 50
}

console.log(addition(25, 25))
console.log(addition(20, 30))
console.log(addition(20, 10))

//crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata
function deleteCharacter(string, position) {
    return string.slice(0, position) + string.slice(position + 1)
}

console.log(deleteCharacter("Certamente", 6))

//crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna true se rispecchiano queste condizioni, altrimenti torna false

function controlNumber(num1,num2) {
        return (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) || (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100);
}
console.log(controlNumber(50,50))
console.log(controlNumber(80,50))

//crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "Los" o "New", altrimenti ritorni 'false'

function nameCity(name){
    if (name.startsWith("Los") || name.startsWith("New")) {
        return name
    } else {
        return false
    }
}

console.log(nameCity("Los Angeles"))
console.log(nameCity("London"))
console.log(nameCity("New York"))

//crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro.

const array = [0, 11, 24, 48, 25, 37, 90]

function sumArray (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++ ){
        sum += array[i];
    }
    return sum;
}

console.log(sumArray(array))

// crea una funzione che controlli che un array NON contenga i numeri 1 0 3. Se NON li contiene, ritorna 'true', altrimenti ritorna 'false'

const array1 = [0, 11, 24, 48, 25, 37, 90]
const array2 = [28, 95, 14, 66, 74]

function controlsArray(array) {
    if (array.includes(1) || array.includes(0) || array.includes(3)) {
        return false
    }

    return true
}

console.log(controlsArray(array1))
console.log(controlsArray(array2))

// crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro
const degrees1 = 45
const degrees2 = 90
const degrees3 = 120
const degrees4 = 180
function angleType(degrees) {
    if (degrees < 90) {
        return "Acuto"  
    } else if (degrees === 90) {
        return "Retto"
    } else if (degrees < 180) {
        return "Ottuso"
    } else if (degrees === 180) {
        return "Piatto"
    }   
}

console.log(angleType(degrees1))
console.log(angleType(degrees2))
console.log(angleType(degrees3))
console.log(angleType(degrees4))


// crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili Torino" deve ritornare "Fiat".
const phrase = "Fabbrica Italiana Automobili Torino"
const phrase2 = "North Atlantic Treaty Organization"

function acronym(phrase) {
    let words = phrase.split(" ")
    let acronym = ""

    for (let i = 0; i < words.length; i++) {
        acronym += words[i].charAt(0)
    }

    return acronym.charAt(0) + acronym.slice(1).toLowerCase();
}

console.log(acronym(phrase))
console.log(acronym(phrase2))

// Esercizi Extra


// partendo da una stringa (passata come parametro) ritorna il carattere più usato nella stringa stessa.

const string1 = "Mi piace programmare in JavaScript"

function mostUsedCharacter(string) {
    let charCount = {};
    let maxChar = "";
    let maxCount = 0;

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        charCount[char] = (charCount[char] || 0) + 1;

        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(mostUsedCharacter(string1));

// Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.

const string2 = "Roma"
const string3 = "Ramo"
const string4 = "Remo"

function areAnagrams(str1, str2) {
    let cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("").sort().join("")
    let cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("").sort().join("")

    return cleanStr1 === cleanStr2
}

console.log(areAnagrams(string2, string3))
console.log(areAnagrams(string4, string2))

//Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data. 
// Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].

const word = "cartine"
const anagramsList = ["carenti", "incerta", "espatrio"]

function findAnagrams(word, anagramsList) {
    let newAnagrams = []
    for (let i = 0; i < anagramsList.length; i++) {
        if (areAnagrams(word, anagramsList[i])) {
            newAnagrams.push(anagramsList[i])
        }
    }
    return newAnagrams
}

console.log(findAnagrams(word, anagramsList))

//Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è

const palindromeString1 = " Amo Roma"
const palindromeString2 = "Ciao"

function isPalindrome(string) {
    let cleanString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    if (cleanString === cleanString.split("").reverse().join("")) {
        return true
    }
    return false
}

console.log(isPalindrome(palindromeString1))
console.log(isPalindrome(palindromeString2))

//Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981

//6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini. 

// Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”

// Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.

//Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.

//Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN: