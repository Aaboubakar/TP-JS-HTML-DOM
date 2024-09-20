// DOM Methods : changement du contenu de la balise p
document.getElementById('demo').innerHTML = 'Hello World !!!';

// DOM Methods : recuperation de la balise h4 ayant id=intro
const element = document.getElementById('intro');
// console.log(element);

const element1 = document.getElementsByTagName('p'); // Finding HTML Elements by Tag Name
console.log(element1);

// DOM Elements
const x = document.forms['frm1'];
// console.log(x);
// let text = '<ul>';
// for (let i = 0; i < x.length; i++) {
//   text += `<li>${x.elements[i].value}</li>`;
// }
// text += '</ul>';
// document.getElementById('demo1').innerHTML = text;
document.getElementById('myBtn1').onclick = setTimeout(displayBackground, 2000);

function displayBackground() {
  let text = '<ul>';
  for (let i = 0; i < x.length; i++) {
    text += `<li>${x.elements[i].value}</li>`;
  }
  text += '</ul>';
  document.getElementById('demo1').innerHTML = text;
  x.style.background = 'yellow';
}

// DOM HTML
function charger() {
  document.querySelector('.myImage').classList.add('img1');
  document.querySelector('.myImage').src = 'img/logo.jpg';
}

// DOM Forms
function validateForm() {
  let v = document.forms['myForm']['fname'].value;
  console.log(v);

  if (v == '') {
    alert('Name must be filled out');
    return false;
  }
}

function myFunction() {
  // Get the value of the input field with id="numb"
  let y = document.getElementById('numb').value;
  // If x is Not a Number or less than one or greater than 10
  let text1;
  if (isNaN(y) || y < 1 || y > 10) {
    text1 = 'Input not valid';
  } else {
    text1 = 'Input OK';
  }
  document.getElementById('demo2').innerHTML = text1;
}

// DOM Animations
function myMove() {
  let id = null;
  const elem = document.getElementById('animate');
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
// DOM Animations 2
function myMove2() {
  let id = null;
  const elem = document.getElementById('animate2');
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      // elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

// DOM Events
function changeText(id) {
  id.innerHTML = 'Ooops, les propriétés du texte ont changé !!!';
  id.style.background = 'green';
  id.style.color = 'white';
}

// Display Date and Hour
function displayDate() {
  document.getElementById('dat').innerHTML = Date();
  const dateTT = document.getElementsByClassName('dateT')[0];
  console.log(dateTT);
  dateTT.style.textDecoration = 'underline';
}

// DOM EventListener
var l = document.getElementById('myBtn2');
l.addEventListener('click', myFunction);
l.addEventListener('click', someOtherFunction);

function myFunction() {
  alert('Hello World!');
}

function someOtherFunction() {
  alert('This function was also executed!');
}

// 2e demo
const elemen = document.getElementById('myBtn3');
elemen.addEventListener('mouseover', myFunction1);
elemen.addEventListener('click', mySecondFunction);
elemen.addEventListener('mouseout', myThirdFunction);

function myFunction1() {
  document.getElementById('demo3').innerHTML += 'Moused over!<br>';
  elemen.style.background = 'green';
}

function mySecondFunction() {
  document.getElementById('demo3').innerHTML += 'Clicked!<br>';
  elemen.style.background = 'red';
}

function myThirdFunction() {
  document.getElementById('demo3').innerHTML += 'Moused out!<br>';
  elemen.style.background = 'yellow';
}
