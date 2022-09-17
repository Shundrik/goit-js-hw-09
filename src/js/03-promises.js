import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('button'),
};

refs.form.addEventListener('input', valueFromForm);
refs.btn.addEventListener('submit', createPromise);

let firstDelay = 0;
let stepDelay = 0;
let amount = 0;


// let dataForm = {};

function valueFromForm(e) {
  
  // dataForm[e.target.name] = e.target.value;
// console.log("change");
  firstDelay = +refs.form.elements.delay.value;
  stepDelay = +refs.form.elements.step.value;
  amount = +refs.form.elements.amount.value;

  console.log(firstDelay);
}
console.log(firstDelay);
console.log(stepDelay);
console.log(amount);

function createPromise(position, delay) {

// let firstDelay = 1000;
// let step = 500;
// let amount = 5;

// function createPromise(position, delay) {
for (let i = 1; i <= amount; i += 1) {
 let  delay = firstDelay;
  console.log(delay);
  let position = 0;
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      position += i;
      // console.log(delay);
      console.log(`start ${position} and ${delay}`);
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, firstDelay);
    firstDelay += step;
  });

  p.then(({ position, delay }) => {
    console.log(`start ${position} and ${delay}`);
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  }).catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
}

