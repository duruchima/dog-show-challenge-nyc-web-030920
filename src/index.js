//fetch dogs from local api
// create table rows for each dog
// add event listener for edit button on dogs
// submit patch request to update dog information **remember to prevent default on submit
// perform new get fetch on dog api to obtain most up to date information
const dogApi = 'http://localhost:3000/dogs'



document.addEventListener('DOMContentLoaded', () => {
    
    renderDogs()
    console.log('test')
    function renderDogs(){
        fetch(dogApi)
        .then(response => response.json())
        .then(dogs => dogs.forEach((dog) => {
            makeDogRow(dog)
        }))
    }
    function makeDogRow(dog){
    let table = document.getElementById('table-body')
    let dogRow = table.insertRow(0)
    dogRow.dataset.id = `${dog.id}`
    dogRow.innerHTML = `<tr><td>${dog.name}</td> <td>${dog.breed}</td> 
    <td>${dog.sex}</td> 
    <td><button class='edit'>Edit</button></td></tr>`}
    
    let editDog = false
    const dogForm = document.getElementById('dog-form')
    const editBttn = Array.from(document.getElementsByClassName('edit'))
    editBttn.forEach((edit) => {
        edit.addEventListener('click', () => {
            console.log('listening')
            editDog = !editDog
            if (editDog) {
                dogForm.style.display = "block"
            } else {
                dogForm.style.display = "none"
            }

        })
    })
    
})