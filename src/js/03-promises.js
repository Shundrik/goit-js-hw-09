import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('button'),
};

// refs.form.addEventListener('input', valueFromForm);
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  let delay = +e.currentTarget.delay.value;
  let step = +e.currentTarget.step.value;
  let amount = +e.currentTarget.amount.value;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        // console.log(`start ${position} and ${delay}`);
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
});
function createPromise(position, delay) {
  console.log(delay);

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    console.log(delay);
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
