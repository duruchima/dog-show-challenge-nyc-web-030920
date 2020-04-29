//fetch dogs from local api
// create table rows for each dog
// add event listener for edit button on dogs
// submit patch request to update dog information **remember to prevent default on submit
// perform new get fetch on dog api to obtain most up to date information
const dogApi = 'http://localhost:3000/dogs'
const editBttn = document.getElementsByTagName('button')


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
    // let cell1 = dogRow.insertCell(0)
    // let cell2 = dogRow.insertCell(1)
    dogRow.innerHTML = `<tr><td>${dog.name}</td> <td>${dog.breed}</td> 
    <td>${dog.sex}</td> 
    <td><button>Edit</button></td></tr>`}
})