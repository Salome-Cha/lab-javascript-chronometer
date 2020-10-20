const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');


// Create an instance of the Chronometer class:
//let myChronometer = new Chronometer()


// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');



function printTime() {
printMinutes()
printSeconds()
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

// ==> BONUS
function printMilliseconds() {
// To do.
}

function printSplit() {
  
  const newListItem = document.createElement('li');
    newListItem.innerHTML = chronometer.splitClick();
    document.getElementById('splits').appendChild(newListItem);
}
    
function clearSplits() {
  document.getElementById('splits').innerHTML = '';
}

function setStopBtn() {
btnLeft.className = 'btn stop';
btnLeft.innerHTML = 'STOP'
}

function setSplitBtn() {
btnRight.className = 'btn split';
btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
btnLeft.className = 'btn start';
btnLeft.innerHTML = 'START';
}

function setResetBtn() {
btnRight.className = 'btn reset';
btnRight.innerHTML = 'RESET';  
}

// Start/Stop Button / Répond à l'event listener.

btnLeft.addEventListener('click', () => {
  
if (btnLeft.classList.contains("start")) {
  btnLeft.innerHTML = "STOP";
  btnLeft.classList.remove("start");
  btnLeft.classList.add('stop');
  chronometer.startClick(printTime);
  setStopBtn();
  setSplitBtn();
} else {
  btnLeft.innerHTML = "START";
  btnLeft.classList.remove("stop");
  btnLeft.classList.add('start');
  chronometer.stopClick();
  setStartBtn();
  setResetBtn();
  
};
});

// Reset/Split Button / Répond à l'event listener.

btnRight.addEventListener('click', () => {
 
if (btnRight.classList.contains("split")) {
    btnRight.innerHTML = "RESET";
    btnRight.classList.remove("split");
    btnRight.classList.add('reset');
    chronometer.resetClick();
    printTime();
    
   
} else {
    btnRight.innerHTML = "SPLIT";
    btnRight.classList.remove("reset");
    btnRight.classList.add('split');
    chronometer.splitClick();
    printSplit()
    clearSplits();
};
});

// NOT SURE OF THE RESULT! Don't do if it's the expected behavior.