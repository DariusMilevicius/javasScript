

const randomNumbers = [1, 22, 543, 2, 6, 12, 55, 86, 6, 9, 12, 31, 51, 92, 3]


randomNumbers.sort(function(a, b) {
     return a - b;
  });
  console.log(randomNumbers);

//   ==============================================================
function grazinuVidurini(string){
 
    if (string.length % 2 === 0 ) {
        let index = Math.floor((string.length - 1) / 2);
        console.log (string.slice(index, index + 2))
    

    }else {
        let index = (string.length-1) / 2;
        // console.log (index);
        console.log (string [index])
    } 
 }

grazinuVidurini ("try4s eziukai ejo gatve ")


const septiniuKartotinis = function(num) {
if (num % 7 === 0 ) {
    console.log(true)
}else{
    console.log(false)
}
}


septiniuKartotinis(7)