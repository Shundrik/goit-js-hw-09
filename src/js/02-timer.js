// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

// document.body.style.backgroundColor = red;

const refs = {
  input: document.querySelector('input[type="text"]'),
  start: document.querySelector('button[data-start]'),
  timer: document.querySelector('.timer'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
// document.body.style.backgroundColor = red;
refs.timer.style.display="flex";
refs.timer.style.gap="20px";
refs.timer.style.margin="10px";
refs.timer.style.color="brown";

refs.start.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const date1 = selectedDates[0];
    const date2 = Date.now();
    deltaDate = date1 - date2;

    if (selectedDates[0] < date2) {
      // window.alert("Please choose a date in the future");
     return Notiflix.Notify.warning('"Please choose a date in the future"');
    }
    
    refs.start.disabled = false;
  

    refs.start.addEventListener('click', start);

    function start() {
    //   const stoper = date2;
      refs.input.disabled = true;
      refs.start.disabled = true;

      const setintervalTimer = setInterval(() => {
        const deltaDateNew = date1 - Date.now();
        const time = convertMs(deltaDateNew);

        refs.days.textContent = pad(time.days);
        refs.hours.textContent = pad(time.hours);
        refs.minutes.textContent = pad(time.minutes);
        refs.seconds.textContent = pad(time.seconds);
        
        const sum =
          refs.days.textContent +
          refs.hours.textContent +
          refs.minutes.textContent +
          refs.seconds.textContent;
        console.log(+sum);

        if (+sum === 0) {
          clearInterval(setintervalTimer);
          console.log('stop');
          refs.start.disabled = false;
          Notiflix.Notify.success('timer STOP')
        }
      }, 1000);
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
function pad(value) {
  return String(value).padStart(2, '0');
}


// function time() {
//   timer.start();
// }

// ---- timer

// const timer = {
//     start() {
//       const startTime = Date.now();

//       setInterval(() => {
//         let currentTime = Date.now();
//       //   console.log(currentTime);
//   const deltaTime = currentTime - startTime;

//         console.log(deltaTime);
//         console.log(convertMs(deltaTime));
//       }, 1000);

//     },
//   };
