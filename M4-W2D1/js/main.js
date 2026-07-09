const gallery = document.getElementById("gallery")
const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")

const searchImages = (query) => {
  return fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      Authorization: "npRmeA7F0tKIBfFqLfwZAcCq0T2hY6VxRxlfUkOkitLhLn7ts7oeWAou",
    },
  })
    .then((response) => response.json())

    .then(data => {
        createCards(data.photos)
    })

    .catch((e) => console.log(e))
}

const createCards = (photos) => {
    photos.forEach((photo) => {
        const card = document.createElement("div")

        card.className = "col-md-2 pb-5"

        card.innerHTML = `
            <div class="card h-100">
                <img src="${photo.src.medium}" class="card-img-top" alt="${photo.alt}">
                <div class="card-body">
                    <h5 class="card-title">${photo.photographer}</h5>
                    <p class="card-text">${photo.alt}</p>
                </div>
            </div>
        `

        gallery.appendChild(card)
    })
}


searchBtn.addEventListener("click", () =>{
    const query = searchInput.value.trim()

    if (query === "") return

    gallery.innerHTML = ""

    searchImages(query)
})


