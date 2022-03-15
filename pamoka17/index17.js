
const dienosPietus= {
    ingridienta : "kotletas bulves darzoves kompotas",
    kaina: 12.5,
    ivertinimas: "trys zvaigzdutes",
    vietove: "vilnius",
    rekomendacija: "pasaka",

}

console.log(dienosPietus);

for (let i = 20; i>=0; i = i - 4 ){
    console.log(i)
}

const skaiciai= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ];
console.log(skaiciai);

// for (let i = 0; skaiciai.length -1; i++ ){
//     if (skaiciai[i] % 2 ===1){
//     console.log(skaiciai[i])
//     }
// }
//                              !!!reikia pasiziureti!!!

const myArr = ['One', 'Two', 'Sofa', 'Stalas', 'test'];

for (let i = myArr.length -1; i >=0; i--){
    console.log(myArr[i])
}


const duagiauNeiAstuoni = [];
const skaiciai1 = [0, 5, 29, 23, 4, 5, 2, 5, 24, 89, 6, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
for (let i = 0; i < skaiciai1.length; i++){
    if (skaiciai1[i] > 8 ){
        duagiauNeiAstuoni.push(skaiciai1[i])
    }
    
}
console.log(duagiauNeiAstuoni)

let didziausiasSkaicius = 0; 

for (let i = 0; i < skaiciai1.length; i++ ){
    if (didziausiasSkaicius< skaiciai1[i]){
        didziausiasSkaicius = skaiciai1[i]
    }
}
console.log(didziausiasSkaicius)
