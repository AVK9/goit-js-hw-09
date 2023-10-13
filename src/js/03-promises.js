import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

function alertMesage() {
  Notiflix.Notify.failure('Please choose a date in the future');
  Notiflix.Notify.success('Sol lucet omnibus');
};
alertMesage();