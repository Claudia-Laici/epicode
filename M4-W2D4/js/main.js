const searchInput = document.getElementById("search-input")
let allBooks = []
const cart = []

async function getBooks() {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/books`,
    )

    const data = await response.json()

    return data
  } catch (e) {
    console.error(e)
  }
}

const createBookCard = (book) => {
  const col = document.createElement("div")
  col.classList.add("col-12", "col-md-6", "col-lg-3")

  const card = document.createElement("div")
  card.classList.add(
    "card",
    "rounded-0",
    "h-100",
    "d-flex",
    "flex-column",
    "position-relative",
  )

  const img = document.createElement("img")
  img.src = book.img
  img.classList.add("card-img-top", "rounded-0")

  const content = document.createElement("div")
  content.classList.add("mt-4", "mb-4", "flex-grow-1")

  const category = document.createElement("span")
  category.classList.add(
    "text-muted",
    "font-monospace",
    "text-uppercase",
    "d-block",
    "mb-2",
  )
  category.textContent = book.category

  const title = document.createElement("h5")
  title.classList.add("fst-italic", "mb-3")
  title.textContent = book.title

  const price = document.createElement("p")
  price.classList.add("fw-semibold", "mb-0")
  price.textContent = `${book.price} €`

  content.append(category, title, price)

  const buttons = document.createElement("div")
  buttons.classList.add("d-flex", "gap-2")

  const addBtn = document.createElement("button")
  addBtn.classList.add("btn", "btn-dark", "rounded-0", "flex-fill", "add-cart")
  addBtn.textContent = "Aggiungi al carrello"

  const removeBtn = document.createElement("button")
  removeBtn.classList.add("btn", "btn-outline-dark", "rounded-0", "px-3")

  const icon = document.createElement("i")
  icon.classList.add("bi", "bi-x-lg")
  removeBtn.appendChild(icon)

  const badge = document.createElement("span")
  badge.classList.add(
    "badge",
    "bg-dark",
    "position-absolute",
    "top-0",
    "end-0",
    "m-2",
    "d-none",
  )
  badge.textContent = "Nel carrello"

  card.appendChild(badge)

  buttons.append(addBtn, removeBtn)

  card.append(img, content, buttons)
  col.appendChild(card)

  return { col, card, badge, addBtn, removeBtn }
}

const renderBooks = (books) => {
  const container = document.getElementById("books-container")

  container.innerHTML = ""

  books.forEach((book) => {
    const { col, card, badge, addBtn, removeBtn } = createBookCard(book)

    addBtn.addEventListener("click", () => {
      addToCart(book, card, badge, addBtn)
    })

    removeBtn.addEventListener("click", () => {
      removeFromCart(book, card, badge, addBtn)
    })

    container.appendChild(col)
  })
}

const addToCart = (book, card, badge, button) => {
  cart.push(book)

  badge.classList.remove("d-none")
  card.classList.add("selected-book")

  button.textContent = "Aggiunto"
  button.disabled = true

  renderCart()
}

const removeFromCart = (book, card, badge, button) => {
  const index = cart.indexOf(book)
  if (index !== -1) cart.splice(index, 1)

  badge.classList.add("d-none")
  card.classList.remove("selected-book")

  button.textContent = "Aggiungi al carrello"
  button.disabled = false

  renderCart()
}

const init = async () => {
  allBooks = await getBooks()
  renderBooks(allBooks)
}

init()

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase()

  if (query.length < 3) {
    renderBooks(allBooks)
    return
  }

  const filteredBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(query),
  )

  renderBooks(filteredBooks)
})

const renderCart = () => {
  const list = document.getElementById("cart-items-list")
  const totalCart = document.getElementById("cart-total")

  list.innerHTML = ""

  if (cart.length === 0) {
    list.innerHTML = `<li class="list-group-item text-muted">Il carrello è vuoto</li>`
  }

  let total = 0

  cart.forEach((book) => {
    total += book.price

    const item = document.createElement("li")
    item.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center",
    )
    item.innerHTML = `
      <span>${book.title}</span>
      <span class="fw-semibold">${book.price} €</span>
    `
    list.appendChild(item)
  })

  totalCart.textContent = `${total.toFixed(2)} €`
}
