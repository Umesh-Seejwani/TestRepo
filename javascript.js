// Answer 01

// function AddNumberClosure(num) {
//     return function addNumber(n) {
//       return n + num;
//     };
//   }
//   const addFive = AddNumberClosure(5);
//   console.log(addFive(10));  
//   console.log(addFive(20));  
//   console.log(addFive(30));  
    

  // Answer 02

//   function searchArray(array, val) {
//     if (array.length === 0) {
//       return false;
//     } else if (array[0] === val) {
//       return true;
//     } else {
//       return searchArray(array.slice(1), val);
//     }
//   }
//   let array = [1, 2, 3, 4, 5];
//   console.log(searchArray(array, 3));  
//   console.log(searchArray(array, 6));  
    

 // Answer 03

//  function addParagraph(text) {
//     let newPara = document.createElement('p');
//     newPara.textContent = text;
//     document.body.appendChild(newPara);
//   }

//   addParagraph('Umesh');


 // Answer 04

//  function addListItem(text) {
//     const list = document.querySelector('ul');
//     const newListItem = document.createElement('li');
//     newListItem.textContent = text;
//     list.appendChild(newListItem);
//   }
//   addListItem('Item 1');
//   addListItem('Item 2');
//   addListItem('Item 3');
    

 // Answer 05

//  function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }
  
 // Answer 06

//  function saveToLocalStorage(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }
//   const myObj = { name: 'Umesh', age: 20 };
//   saveToLocalStorage('myObj', myObj);


 // Answer 07

//  function getFromLocalStorage(key) {
//     const objStr = localStorage.getItem(key);
//     return objStr ? JSON.parse(objStr) : null;
//   }
//   const myObj = getFromLocalStorage('myObj');
//   console.log(myObj);


 // Answer 08

//  function saveObjectToLocalStorage(obj) {
//     // save each property of the object to localStorage
//     for (const [key, value] of Object.entries(obj)) {
//       localStorage.setItem(key, JSON.stringify(value));
//     }
  
//     // retrieve the object from localStorage and return it as a new object
//     const newObj = {};
//     for (const key of Object.keys(obj)) {
//       const value = JSON.parse(localStorage.getItem(key));
//       newObj[key] = value;
//     }
//     return newObj;
//   }
//   const myObj = { name: 'Umesh', age: 20, occupation: 'Designing };
//   const newObj = saveObjectToLocalStorage(myObj);
//   console.log(newObj);
    