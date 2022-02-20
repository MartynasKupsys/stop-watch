// ===================== PER ATSKIRAS FUNKCJAS =====================

// let min = 0;
// let sek = 0;
// let setTiming;

// const startTime = document.querySelector(".time");
// startTime.textContent = `00 : 00`;

// const timing = () => {
//   sek++;
//   if (sek === 59) {
//     min++;
//     sek = 0;
//   }
//   const time = document.querySelector(".time");
//   time.textContent = `${min} : ${sek}`;
// };

// const increment = () => {
//   if (!setTiming) {
//     setTiming = setInterval(timing, 1000);
//   }
// };

// const stop = () => {
//   clearInterval(setTiming);
//   setTiming = null;
// };

// const reset = () => {
//   clearInterval(setTiming);
//   setTiming = null;
//   min = 0;
//   sek = 0;
//   const time = document.querySelector(".time");
//   time.textContent = `${min} : ${sek}`;
// };

// ===================== SU KLASE BUDAS =====================

class Laikmatis {
  constructor(min, sek, setTiming) {
    this.min = min;
    this.sek = sek;
    this.setTiming = setTiming;
  }
  timing() {
    this.sek++;
    if (this.sek === 59) {
      this.min++;
      this.sek = 0;
    }
    if (this.min === 10) {
      alert("Time out");
      this.stop();
    }
    const time = document.querySelector(".time");
    time.textContent = `${this.min > 9 ? this.min : `0${this.min}`} : ${
      this.sek < 10 ? `0${this.sek}` : this.sek
    }`;
  }
  stop() {
    clearInterval(this.setTiming);
    this.setTiming = null;
  }
  reset() {
    clearInterval(this.setTiming);
    this.setTiming = null;
    this.min = 0;
    this.sek = 0;
    const time = document.querySelector(".time");
    time.textContent = `0${this.min} : 0${this.sek}`;
  }
}

const laikmatis = new Laikmatis(0, 0, null);
const startTime = document.querySelector(".time");
startTime.textContent = `00 : 00`;

const btnStart = document.querySelector(".btn-start");
btnStart.addEventListener("click", function () {
  if (!laikmatis.setTiming) {
    laikmatis.setTiming = setInterval(function () {
      laikmatis.timing();
    }, 1000);
  }
});

const btnStop = document.querySelector(".btn-stop");
btnStop.addEventListener("click", function () {
  laikmatis.stop();
});

const btnReset = document.querySelector(".btn-reset");
btnReset.addEventListener("click", function () {
  laikmatis.reset();
});
