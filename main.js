//get form
const form = document.querySelector('form')

//create single list
const list = document.createElement('ul')

//create array
const movieArray = []

//make list item function
const createListItem = listItem =>{
    const item = document.createElement('li')
    item.textContent = listItem

    return item
}

//add items to list function & array
const addToList = item =>{    
    const listItem = createListItem(item)
    list.appendChild(listItem)

    movieArray.push(item)

    return list
}

//function when form is submitted
const onSubmit = ev =>{
    ev.preventDefault()
    const movieTitle = ev.target.movieTitle.value

    const movieList = document.querySelector('#movieList')
    movieList.appendChild(addToList(movieTitle))

    ev.target.reset()
}

form.addEventListener('submit', onSubmit) 
