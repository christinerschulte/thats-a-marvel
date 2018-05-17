const form = document.querySelector('form')

const createListItem = listItem =>{
    const item = document.createElement('li')
    item.textContent = listItem

    return item
}

const onSubmit = ev =>{
    ev.preventDefault()
    const movieTitle = ev.target.movieTitle.value

    console.log(createListItem(movieTitle))

    ev.target.reset()
}

form.addEventListener('submit', onSubmit) 
