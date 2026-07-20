const filter = document.getElementById("filter")
const searchInput = document.getElementById("search")
const usersContainer = document.getElementById("usersContainer")
let users = []

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        users = await response.json()

        renderUsers(users)

    } catch (e) {
        console.error("Errore nel recupero degli utenti:", e)
    }
}

const renderUsers = (usersArray) => {
    usersContainer.innerHTML = ""

    usersArray.forEach(user => {
        usersContainer.innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
            </tr>
        `
    })
    
}

const filterUsers= () => {
    const property = filter.value

    const text = searchInput.value.toLowerCase().trim()

    const filteredUsers = users.filter(user => {

        return user[property]
        .toLowerCase()
        .includes(text)

    })

    renderUsers(filteredUsers)
}

filter.addEventListener("change", filterUsers)
searchInput.addEventListener("input", filterUsers)
getUsers()
