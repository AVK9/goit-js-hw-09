import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
  console.log(selectedDates[0]);
  },
};

// const fsdf = flatpickr(selector, options)

function alertMesage() {
    Notiflix.Notify.failure('Please choose a date in the future');
}

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
});

const timeInMs = Date.now();
console.log(timeInMs);
console.log(options.defaultDate);
let ms;
const timeLisn = document.querySelector("#datetime-picker");
timeLisn.addEventListener('input', onSetData);
function onSetData() {
     ms = Date.parse(`${timeLisn.value}`) - options.defaultDate;
    console.log(ms);   
    if (ms > 0 ) { 
        console.log(`'Будущее' ${ms}`);
        
    } else {
        alertMesage();

    };
console.log(ms);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
// console.log(`${days}:${hours}:${minutes}:${seconds}`);
    return { days, hours, minutes, seconds };
    
}
console.log(convertMs(ms));

}





// const currentDate = new Date();
// const localTime = currentDate.toLocaleTimeString("uk-Ua");
  

