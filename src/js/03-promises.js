import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('button'),
};

refs.form.addEventListener('input', valueFromForm);
refs.btn.addEventListener('submit', createPromise);
let dataForm = {};
// const delay = document.querySelector(`[name="delay"] `);
// const step = refs.form.elements.step.value;
// const amount = refs.form.elements.amount.value;

function valueFromForm(e) {
dataForm[e.target.name] = e.target.value;

  const delay = refs.form.elements.delay.value;
  const step = refs.form.elements.step.value;
  const amount = refs.form.elements.amount.value;
  console.log(delay);
  console.log(step);
  console.log(amount);
 }



function createPromise(position, delay) {
   console.log(`start ${position} and ${delay}`);
  const shouldResolve = Math.random() > 0.3;
  new Promise((resolve, reject) => {
    
  })

  setTimeout(()=>{

    if (shouldResolve) {
   Resolve({ dataForm });
    
   
  } else {
    // Reject
  }
  }, delay)

  
}

createPromise(2, 1500)
.then(({ position, delay }) => {
  console.log(`start ${position} and ${delay}`);
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
})
.catch(({ position, delay }) => {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
});
