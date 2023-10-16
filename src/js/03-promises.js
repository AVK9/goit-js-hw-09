import Notiflix from 'notiflix';

const refs = {
  submitBtn: document.querySelector("form > button"),
  inputFirstDelay: document.querySelector("input[name=delay]"),
  inputDelayStep: document.querySelector("input[name=step]"),
  inputAmount: document.querySelector("input[name=amount]")
};

refs.submitBtn.addEventListener('click', onInputForm);
function onInputForm(evt) {
  evt.preventDefault();
  
   const firstDelay = refs.inputFirstDelay.value;
   const delayStep = refs.inputDelayStep.value;
   const amount = refs.inputAmount.value;

  for (let i = 1; i <= amount; i += 1) {
    const position = i;
    const delay = Number(firstDelay) + i*Number(delayStep);
    // console.log(firstDelay);
    // console.log(delayStep);

createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  });
  }
};

function createPromise(position, delay) {
const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
       res({ position, delay });
      } else {
         rej({ position, delay });
      }
    }, delay)
  })
  };