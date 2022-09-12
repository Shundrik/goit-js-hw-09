const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};
const btnStart = refs.start.addEventListener('click', startChangeColor);
const btnStop = refs.stop.addEventListener('click', stopChangeColor);

let setID = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function createColor() {
  return (document.body.style.backgroundColor = getRandomHexColor());
}

function startChangeColor() {
  setID = setInterval(createColor, 1000);
  // refs.start.removeEventListener("click",()=>{
  //   console.log("remove");
  // })
  refs.start.disabled = true;

}

function stopChangeColor() {
  clearInterval(setID);
  refs.start.disabled = false;
}
