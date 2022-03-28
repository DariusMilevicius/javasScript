

let myInput = document.querySelector("input");
myInput.addEventListener("change", function (event){
    console.log (event.target.value)
})




// ++++++++++++++++++++++++++++++++++++
const h1 = document.createElement('h1')
document.body.appendChild(h1)
// h1.innerText= "Sveikis"

function addText(event){
 h1.innerText = `Sveiki  ${myInput.value}`

}
myInput.addEventListener('input', addText)

// myInput.addEventListener("input", function(event){
//     h1.innerText = `Sveiki  ${event.target.value}`
// })


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

