// Project - Sukursime ToDo saraso aplikacija
// 1. suskikurti UL ir prisidedam ji i document body
const myContainer = document.querySelector('.container');

let myInput = document.querySelector('input');
let myBtn = document.querySelector('button');
const myToDoUl = document.createElement('ul');
myContainer.appendChild(myToDoUl);
// 2.1 Mygtukas turi tureti event listeneri
myBtn.addEventListener('click', function(){
// ----------- String interpolation ---------- //
// if (myInput.value.length > 0) {
//   let newToDo = `<li>
//   <div class="left-side">
//     <input type="checkbox">
//     <span>${myInput.value}
//   </div>
//   <div class="right-side">
//     <i class="bi bi-pencil-fill"></i>
//     <i class="bi bi-trash-fill"></i>
//   </div>
// </li>`
// myToDoUl.insertAdjacentHTML("beforeend", newToDo)
//   myInput.value = '';
// } else {
//   alert('Enter the task')
// }
// ----------- End of string interpolation


  // 2.2 Issisaugoti teksta i kintamaji
  let inputText = myInput.value;
  // 2.21 patikrinti ar inputas nera tuscias
  if (inputText.length > 0) {
    // 2.3 teksta kartu su li isideti i ul
  let myLi = document.createElement('li');
  myLi.innerText = inputText;
      // prideti ckeck box'a
  const checkBoxInput = document.createElement('input');
  checkBoxInput.setAttribute('type', 'checkbox');
  checkBoxInput.addEventListener('click', () => console.log('checkbox'));

  myLi.appendChild(checkBoxInput);
// prideti ikonas is general chato
const deleteIcon = document.createElement('i');
const deleteClassList = ['bi', 'bi-trash-fill'];
// naudojame spread operatoriu 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
deleteIcon.classList.add(...deleteClassList);
deleteIcon.addEventListener('click', () => console.log('delete'));

const editIcon = document.createElement('i');
const editClassList = ['bi', 'bi-pencil-fill']
editIcon.classList.add(...editClassList);

editIcon.addEventListener('click', () => console.log('edit'));

myLi.appendChild(checkBoxInput)
myLi.appendChild(deleteIcon)
myLi.appendChild(editIcon)

// check box'ui ir ikonoms uzdeti event listenerius
// paspaudus kazkuri is ju, turetu parasyti koks 
// elementas buvo paspaustas
  myToDoUl.appendChild(myLi)
  // 2.3 istrinu teksta is input elemento
  myInput.value = ''


  } else {
    alert('Iveskite uzduoti')
  }


})




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
localStorage.setItem('kaipIsmokti', 'Bandyti');
const tests = localStorage.setItem('kaipIsmokti');
console.log(tests)