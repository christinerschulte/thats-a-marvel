//get form
const form = document.querySelector('form')

//create single list
const list = document.createElement('ul')

//create array
const movieArray = []

//make list item function
const createListItem = listItem =>{
    const item = document.createElement('li')
    item.textContent = `${listItem} `

    //add delete button
    const remove = document.createElement('button')
    remove.textContent = 'Delete'
    item.appendChild(remove)
    remove.addEventListener('click', removeFromList)

    return item
}

//add items to list function & array
const addToList = item =>{ 
    //add item to list   
    const listItem = createListItem(item)
    list.appendChild(listItem)

    //add to array
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

//delete function
function removeFromList(ev){
    //remove from list
    const removeItem = ev.path[1]
    const list = ev.path[2]
    list.removeChild(removeItem)

    return list

}

form.addEventListener('submit', onSubmit) 
