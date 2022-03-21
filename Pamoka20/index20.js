const knygosApieProgramavima = [
    {
      title: "The Pragmatic Programmer",
      author: 'David Thomas',
      goodReadsRating: 4.33,
      numberOfRatings: 18579
    },
    {
      title: "Clean Code",
      author: 'Robert C. Martin',
      goodReadsRating: 4.39,
      numberOfRatings: 18094
    },
    {
      title: "The Clean Coder",
      author: 'Robert C. Martin',
      goodReadsRating: 4.28,
      numberOfRatings: 7459
    },
    {
      title: "The Effective Engineer",
      author: 'Edmond Lau',
      goodReadsRating: 4.28,
      numberOfRatings: 1401
    },
    {
    // reikia perskaityti yra linkas
      title: "Eloquent JavaScript",
      author: 'Marijn Haverbeke',
      goodReadsRating: 4.15,
      numberOfRatings: 2680
    }
  ]

function vertinimas ( knyga ) {
console.log(knyga.goodReadsRating = `${knyga.goodReadsRating} is 5`)
}

  knygosApieProgramavima.forEach( vertinimas)


//   ++++++++++++++++++++++++++++++++++++++++++++++++++

function grazinaPavadinima (item){
    return item.title
}
  const knyguPavadinimai = knygosApieProgramavima.map(grazinaPavadinima)
  console.log (knyguPavadinimai)
   
//   +++++++++++++++++++++++++++++++++++++++++++


const vertinimasTrysIrPuse = knygosApieProgramavima.filter(tikrinaBalus)
function tikrinaBalus(taskai){
    if (taskai.goodReadsRating > 4.3){
        return taskai  
    } 
}

console.log(vertinimasTrysIrPuse)

// +++++++++++++++++++++++++++++++++++++++++++
let myPicher = document.getElementById("container").style.width = "200px";
console.log(myPicher)

document.getElementsByClassName



