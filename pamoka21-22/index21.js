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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let duomenysIsBD = [
    {
      id: 1,
      name: "Leanne Graham",
      photo: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    },
    {
      id: 2,
      name: "Ervin Howell",
      pgoto: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618"
        }
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains"
      }
    },
    {
      id: 3,
      name: "Clementine Bauch",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653"
        }
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications"
      }
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1727&q=80",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990"
        }
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services"
      }
    },
    {
      id: 5,
      name: "Tom Dietrich",
      username: "Tom",
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      email: "TomDietr@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342"
        }
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems"
      }
    },
  ];
const mainContainer = document.createElement('div');

function sukuriamaVienaKortele(arr){
    arr.forEach(elemant => {
   let cardDiv = document.createElement('div');  
   let cardImg = document.createElement('img');
   let cardH3 =  document.createElement('h3');
   cardH3.innerText = elemant.address.city;

   let cardA = document.createElement('a')
   cardA.innerText = 'Nuoroda i svetaine'
   cardA.href = elemant.website

    })
}





