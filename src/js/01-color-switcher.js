function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
};


refs.btnStart.addEventListener("click", () => {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
        refs.btnStart.setAttribute("disabled", "disabled");
    refs.btnStop.removeAttribute("disabled")
});



refs.btnStop.addEventListener('click', onStopChangeColor);
function onStopChangeColor() {
    console.log('eee');
    clearInterval(timerId)
    refs.btnStop.setAttribute("disabled", "disabled");
    refs.btnStart.removeAttribute("disabled")
}
