// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

const h1 = document.querySelector('h1')
function changeTitle(title) {
    h1.textContent = title
}

   h1.addEventListener('mouseover', function () {
        changeTitle('Phone Store')
        h1.style.color = 'white'
    })

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
const body = document.querySelector('body')
const colors = '#202124'

function changeBackground(color) {
    body.style.backgroundColor = color
}

body.addEventListener('mouseover', function () {
    changeBackground(colors)
})


// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
const footer = document.querySelector('footer')

function changeAddress(newAddress){
    footer.textContent = newAddress
}

footer.addEventListener('mouseover', function () {
        changeAddress('Via Roma, 123 - Milano')
    })

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
const links = document.querySelectorAll('a')

function addClassToLinks() {
    links.forEach(a => {
        a.classList.add('linkClass')
    })
}

links.forEach(a => {
    a.addEventListener('mouseover', function () {
        addClassToLinks()
    })
})

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
const img = document.querySelectorAll('img')

function addClassToImg() {
    img.forEach(img => {
        img.classList.toggle('imgClass')
    })
}

img.forEach(img => {
    img.addEventListener('mouseover', function () {
        addClassToImg()
    })
})

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

const prices = document.querySelectorAll('.prezzo')

function changeColorPrice(price) {

    const randomColor =
        Math.floor(Math.random() * 16777215).toString(16)

    price.style.color = `#${randomColor}`
}

prices.forEach(price => {

    price.addEventListener('mouseover', function () {

        changeColorPrice(price)

    })

})

