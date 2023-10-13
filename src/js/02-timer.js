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

const refs = {
    timerTime: document.querySelector(".timer"),
    dataDays: document.querySelector("[data-days]"),
    dataHours: document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    dataSeconds: document.querySelector('[data-seconds]'),
    startBtn: document.querySelector('[data-start]'),
};
    refs.startBtn.setAttribute("disabled", "disabled");

function alertMesage() {
    Notiflix.Notify.failure('Please choose a date in the future');
};

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
});

const timeInMs = Date.now();
// console.log(timeInMs);
// console.log(options.defaultDate);
let ms;
const timeLisn = document.querySelector("#datetime-picker");
timeLisn.addEventListener('input', onSetData);
function onSetData() {
     ms = Date.parse(`${timeLisn.value}`) - options.defaultDate;
    console.log(ms);   
    if (ms > 0) { 
              refs.startBtn.removeAttribute("disabled");
    } else {
        alertMesage();

    };
    refs.startBtn.addEventListener('click', onSetCounter);
    function onSetCounter() {
        let timerId = setInterval(function () {
        let timeСounter = convertMs(ms -= 1000)

        refs.dataDays.textContent = addLeadingZero(timeСounter.days);
        refs.dataHours.textContent = addLeadingZero(timeСounter.hours);
        refs.dataMinutes.textContent = addLeadingZero(timeСounter.minutes);
        refs.dataSeconds.textContent = addLeadingZero(timeСounter.seconds);

        setTimeout(() => { clearInterval(timerId)}, ms);    
  }, 1000);
    }

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
}

function addLeadingZero(value) {
   return value.toString().padStart(2, "0");
};

// const currentDate = new Date();
// const localTime = currentDate.toLocaleTimeString("uk-Ua");
  

