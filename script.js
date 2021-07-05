const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
const board = document.querySelector('.board');
canvas.width = 1305.6;
canvas.height = 722;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

ctx.lineWidth = 50;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;


function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
//   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  // hue++;
  // if (hue >= 360) {
  //   hue = 0;
  // }
  // if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
  //   direction = !direction;
  // }

  // if(direction) {
  //   ctx.lineWidth++;
  // } else {
  //   ctx.lineWidth--;
  // }

}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

// change color
const black = document.querySelector('.black');
black.addEventListener('click', ()=> {ctx.strokeStyle = '#000000'});

const blue = document.querySelector('.blue');
blue.addEventListener('click', ()=> {ctx.strokeStyle = '#0084FF'});

const red = document.querySelector('.red');
red.addEventListener('click', ()=> {ctx.strokeStyle = '#FF0000'});

const green = document.querySelector('.green');
green.addEventListener('click', ()=> {ctx.strokeStyle = '#14FF00'});

//change bgcolor

const redbg = document.querySelector('.redbg');
redbg.addEventListener('click', ()=>{board.style.background = 'red'})

const bluebg = document.querySelector('.bluebg');
bluebg.addEventListener('click', ()=>{board.style.background = 'blue'})

const yellowbg = document.querySelector('.yellowbg');
yellowbg.addEventListener('click', ()=>{board.style.background = 'yellow'})

const whitebg = document.querySelector('.whitebg');
whitebg.addEventListener('click', ()=>{board.style.background = 'white'})

const cyanbg = document.querySelector('.cyanbg');
cyanbg.addEventListener('click', ()=>{board.style.background = 'cyan'})

//eraser

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', ()=>{ctx.strokeStyle = 'white'; ctx.lineWidth = 100})

//size

const size = document.querySelector('#pen-size');
size.addEventListener('mouseup', ()=>{ctx.lineWidth = size.value*2});

//reset

const reset = document.querySelector('.reset');
reset.addEventListener('click', ()=>{ctx.clearRect(0,0,canvas.width,canvas.height); board.style.background = 'style.background'});

