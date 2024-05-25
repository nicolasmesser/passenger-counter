let count = 0;
let countArr = [];
let countStr = "";
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  countStr = "";
  countArr.push(count);
  if (countArr.length === 1) {
    countStr += countArr[0];
  } else {
    for (let i = 0; i < countArr.length-1; i++) {
      countStr += countArr[i] + " - ";
    }
    countStr += countArr[countArr.length-1];
  }
  saveEl.textContent = "";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = count;
}

function reset() {
  countArr = [];
  saveEl.textContent = "";
}
