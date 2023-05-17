'use strict'


// let imageElement = document.createElement('img');
// // imageElement.setAttribute('src', 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg')
// imageElement.setAttribute('src', 'pics/pic.jpg')

// imageElement.setAttribute('alt', 'image');
// document.getElementById('wrapper').appendChild(imageElement);










// დავალება 2:
// ააწყეთ ინფუთის მაგილითი, როგორც ვივარჯიშეთ ლექციაზე, რასაც ჩავწერ ინფუთში და ღილაკის ან ენთერის დაჭერის შემთვევაში ეს მნიშნელობა უნდა ჩავარდეს li - ში, ხოლო ინფუთი უნდა გასუფთავდეს; ლი - ში ჩვენ დავამატეთ წაშლის ღილაკი, ხოლო თქვენ გაალამაზეთ და ღლაკის მაგივრად დაამატეთ აიქონი fontawesome - იდან, რომლის დაჭერის შემთხვევაში წაიშლება მთლიანი ლისტი;


// let inputField = document.querySelector('.inputClass');
// inputField.addEventListener('focus', function(){
//     // y.target.style.outline = 'none';
//     inputField.style.outline = 'none';

// });

// let addBtn = document.createElement('button');
// addBtn.classList.add('btn_btn');
// let addIbutton = document.createElement('i');
// addIbutton.classList.add('fa-solid', 'fa-circle-plus');
// document.addBtn.appendChild(addIbutton);

// let formElement = document.querySelector('.froms');
// let textInput = document.querySelector('.inputClass');
// let addButton = document.querySelector('.add_items');
// let ulItems = document.querySelector('.list_ul');
// let deleteItems = document.querySelector('.delete_items');


// addButton.addEventListener('click', function () {
//     let inputValue = textInput.value;
//     let liElement = document.createElement('li');
//     liElement.textContent = inputValue;
//     ulItems.appendChild(liElement);
// })



// let inputFieldText = document.querySelector(".input-Class");
// let buttonAdd = document.querySelector(".btn-add");
// let ulItem = document.querySelector(".ul-list");
// // let ClearAll = document.querySelector(".clearAllitems");
// // let formElement = document.querySelector(".form-element");

// buttonAdd.addEventListener('click', function(){
//     let inputValue = inputFieldText.value;
//     let liElement = document.createElement('li');
//     liElement.textContent = inputValue;
//     ulItem.appendChild(liElement);
//     inputFieldText.value = " ";

// })






// formElement.addEventListener('submit', function(prevent){
//     prevent.preventDefault();

//     let inputValue = textInput.value;
//     if(inputValue == " "){
//         return;
//     }

// let liList = document.createElement('li');
// // let btnDelete = document.createElement('button');
// // btnDelete.classList.add('.delete_items');
// // btnDelete.addEventListener('click', function(){
// //     liList.remove(); 
// // });

// liList.textContent = inputValue;




// })






// formElement.addEventListener("submit", function (event) {
//   event.preventDefault();
//   // 1. get input value

//   let inputValue = inputFieldText.value;
//   if (inputValue == " ") {
//     return;
//   }

//   // 2. input value in li tag -> ul
//   let liElement = document.createElement("li");

//   let btnDelete = document.createElement("button");
//   btnDelete.textContent = "Delete This Item";
//   btnDelete.addEventListener("click", function () {
//     liElement.remove();
//   });

//   liElement.textContent = inputValue;

//   liElement.appendChild(btnDelete);
//   ulItem.appendChild(liElement);

//   // 3. clear input value
//   inputFieldText.value = " ";
// });

// ClearAll.addEventListener("click", function () {
//   ulItem.innerHTML = " ";
// });




// deleteItems.addEventListener("click", function () {
//     ulItems.innerHTML = " ";
//   });


// //   let deletebutton = document.createElement('button');
// //   deletebutton.classList.add('delete_items');

// let elementTrash = document.createElement('i');
// elementTrash.classList.add('fa-solid','fa-trash');


// document.querySelector('.delete_items').appendChild(elementTrash);










// დავალება 1:
// დაამატეთ ბურგერის ლოგიკა. ბურგერი უნდა ააწყოთ ან დივებით ან სპანებით. დაჭერის დროს უნდა გამოხნდეს x ვიზუალი და ლამაზად გამოჩნდეს დამალული სანავიგაციო სტრუქტურა. მაგ: https://camex.ge https://www.galleria.ge 


let navigationElement = document.getElementById('navigationElement');
let burgerElement = document.getElementById('toggleButton');

burgerElement.addEventListener('click', function (){
    navigationElement.classList.toggle('activeNav');
    burgerElement.classList.toggle('activeLine');

})