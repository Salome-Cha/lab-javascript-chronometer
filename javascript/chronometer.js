class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(printTime) {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1; //we want this to run every 1000 miliseconds
      if (printTime) {
        printTime();
      }
    }, 1000);
  }
  getMinutes() {
  return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
   return this.currentTime % 60
  }
  twoDigitsNumber(number) {  //On voit dans les tests qu'il faut un argument ici. On l'apl number.
    if (number < 10) {
      return `0${number}`
    } else {
      return `${number}`
    }
  }
  stopClick() {
    clearInterval(this.intervalId) 
  }
  resetClick() {
    this.currentTime = 0;
  }
  
  splitClick() {
      return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
      }
}

