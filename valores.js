
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
//llamando eventos
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});


h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = "456"

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

pid.innerHTML = "";
pid.appendChild(img);


////////////////////////////////////////////////////////////////
function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
  }



//eventlistener

const input3 = document.querySelector('#calculo3');
const input4 = document.querySelector('#calculo4');
const btn1 = document.querySelector('#btn');
const Result = document.querySelector('#resultado');

btn1.addEventListener('click', sumarInputValues)

function sumarInputValues() {
 const sumaInputs1 = parseInt(input3.value) + parseInt(input4.value);
  Result.innerText = "Resultado: " + sumaInputs1;
 }