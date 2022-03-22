const animals = [
    {
      type: 'fox',
      wild: true
    }, 
    {
      type: 'cat',
      wild: false
    }, 
    {
      type: 'dog',
      wild: false
    }, 
    {
      type: 'rabbit',
      wild: true
    }, 
    {
      type: 'giraffe',
      wild: true
    }, 
    {
      type: 'monkey',
      wild: true
    }, 
  ]
// 11111111111111111111111111111111111111111111111111111111
//   const wildAnimals = animals.filter(laukinis)

//   function laukinis (animuls){
// return animals.waild === true
  
//   }
// 2222222222222222222222222222222222222222222222222
// const wildAnimals = animals.filter(function(laukinis) {
//     return animals.wild === true
// })

// 3333333333333333333333333333333333333333333333333
const wildAnimals = animals.filter(animals => animals.wild === true )
console.log(wildAnimals)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let firstArr = [1, 2, 3, 4, 5];
let secondArr = [6, 7, 8, 9, 10];

let allNumbers = firstArr.concat(secondArr);
console.log(allNumbers);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const firstArrayAnimals = ["dog", "cat", "parrot"];
const secondArrayAnimals = ["lizard", "rat", "cat"];

const machingAnimals = firstArrayAnimals.filter (elemant => secondArrayAnimals.includes(elemant));
console.log (machingAnimals)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function istrinimasIsArr (arr, number){
  let myNewArr = arr.filter(item => item !== number)
  console.log(myNewArr)

}

istrinimasIsArr(firstArr, 2)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const darbai = ['paimti darbus is masyvo', 'parasyti funkcija', 
'funckija turi skurti DOM elementus', 
'tie elementai turi buti sudeti i tevini ul konteineri']

const newH1 = document.createElement('h1')
newH1.innerText = 'sveiki pradekime JS '
document.body.appendChild(newH1)

const ul = document.createElement('ul')

function addList (arr){
arr.forEach(element => {
    let li = document.createElement('li')
    li.innerText = element 
    ul.append(li)
});
document.body.appendChild(ul)
}
addList (darbai)