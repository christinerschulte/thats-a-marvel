//get form input
const form = document.querySelector('form')
const onSubmit = ev =>{
    ev.preventDefault()
    const movieTitle = ev.target.movieTitle.value



    console.log(movieTitle)
}

//addEventListener
form.addEventListener('submit', onSubmit) 
