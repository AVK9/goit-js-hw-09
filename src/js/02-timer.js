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
console.log(timeInMs);
console.log(options.defaultDate);
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
        timeСounter = convertMs(ms -= 1000)
            console.log(ms);
        let padStartDay = `${timeСounter.days}`.length <= 1 ? 2 : `${timeСounter.days}`.length;
        refs.dataDays.textContent = `${timeСounter.days}`.padStart(padStartDay, "0");
        refs.dataHours.textContent = `${timeСounter.hours}`.padStart(2, "0");
        refs.dataMinutes.textContent = `${timeСounter.minutes}`.padStart(2, "0");
        refs.dataSeconds.textContent = `${timeСounter.seconds}`.padStart(2, "0");



        // refs.dataDays.textContent = timeСounter.days;
        // refs.dataHours.textContent = timeСounter.hours;
        // refs.dataMinutes.textContent = timeСounter.minutes;
        // refs.dataSeconds.textContent = timeСounter.seconds;
        }, 1000);

        setTimeout(() => { clearInterval(timerId)}, ms);
            
        let timeСounter = convertMs(ms);
       
        // console.log(`${timeСounter.days}`.length);
        // console.log(timeСounter.days);
        // console.log(`${timeСounter.days}`.length <= 1 ? 2 : `${timeСounter.days}`.length);
        // let padStartDay = `${timeСounter.days}`.length <= 1 ? 2 : `${timeСounter.days}`.length;
        // refs.dataDays.textContent = `${timeСounter.days}`.padStart(padStartDay, "0");
        // refs.dataHours.textContent = `${timeСounter.hours}`.padStart(2, "0");
        // refs.dataMinutes.textContent = `${timeСounter.minutes}`.padStart(2, "0");
        // refs.dataSeconds.textContent = `${timeСounter.seconds}`.padStart(2, "0");

        // console.log((timeСounter.minutes));
        
        // `${timeСounter.days}`.length = 1 ? 2 : `${timeСounter.days}`.length

        // setTimeout(() => {
        //     clearInterval(timerId); alert('stop');
        // }, 5000);


//  timerId = setInterval(() => {
    
//   }, 1000);


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

function addLeadingZero(sss) {
    
   let dsfddf = `${sss}`.padStart(2, "0");
    console.log(dsfddf);
}
addLeadingZero(1)


// const currentDate = new Date();
// const localTime = currentDate.toLocaleTimeString("uk-Ua");
  

