'use strict'

const btn = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');
// btn.onclick = function() {
//     alert('World')
// }

// btn.addEventListener('click', () => {
//     alert('World');
// })

// btn.addEventListener('click', () => {
//     alert('World2');
// })

// let i = 0;
const deleteElement = (e) => {
  console.log(e.target);
  console.log(e.type);
//   i++;
//   if (i == 3) {
//     btn.removeEventListener("click", deleteElement);
//   }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btn.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once:true});
})

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event.target);
})