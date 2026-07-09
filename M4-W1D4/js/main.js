const searchInput = document.getElementById("searchField")
const searchBtn = document.getElementById("button-search")
const resultsTitle = document.getElementById("resultsTitle")

const albums = []

function createCard(album, container) {
  const col = document.createElement("div")
  col.classList.add("col", "mb-3")

  const card = document.createElement("div")
  card.classList.add("card")

  const img = document.createElement("img")
  img.src = album.album.cover_medium
  img.classList.add("card-img-top")

  const cardBody = document.createElement("div")
  cardBody.classList.add("card-body")

  const title = document.createElement("h5")
  title.classList.add("card-title")
  title.textContent = album.title

  cardBody.appendChild(title)
  card.appendChild(img)
  card.appendChild(cardBody)
  col.appendChild(card)
  container.appendChild(col)
}

/*function searchAndRender(query, containerId) {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      albums.push(...data.data)

      const container = document.getElementById(containerId)

      data.data.forEach((album) => createCard(album, container))
    })
    .catch((err) => {
    console.error("Error recovering albums:", err)
})
}

searchAndRender("eminem", "eminemSection")
searchAndRender("metallica", "metallicaSection")
searchAndRender("queen", "queenSection")
*/

const container = document.getElementById("searchSection")
const searchArtist = (query, container) => {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    .then((response) => response.json())

    .then((data) => {
      albums.length = 0
      albums.push(...data.data)
      renderAlbums(data.data, container)
    })

    .catch((e) => {
      console.error("Error recovering albums:", e)
    })
}

const renderAlbums = (albums, container) => {
  albums.forEach((album) => {
    createCard(album, container)
  })
}

window.addEventListener("DOMContentLoaded", () => {
  resultsTitle.textContent = "Eminem"
  container.innerHTML = ""
  searchArtist("eminem", container)
})

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim()
  if (query === "") return
  resultsTitle.textContent = "Search Results"
  container.innerHTML = ""
  searchArtist(query, container)
})

const btn = document.querySelector("#create-list")

btn.addEventListener("click", showModal)

function showModal() {
  const modal = document.createElement("div")
  const uniqueAlbums = [...new Set(albums.map((item) => item.album.title))]

  modal.className = "modal fade"
  modal.tabIndex = -1
  modal.setAttribute("role", "dialog")

  modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title">Album</h5>

          <button type="button" class="close" data-dismiss="modal">
            <span>&times</span>
          </button>
        </div>

        <div class="modal-body">
  <ul>
    ${uniqueAlbums.map((title) => `<li>${title}</li>`).join("")}
  </ul>
</div>

      </div>
    </div>
  `

  document.body.appendChild(modal)

  $(modal).modal("show")

  $(modal).on("hidden.bs.modal", function () {
    modal.remove()
  })
}
