const billInput = document.querySelector(".bill");
const peopleInput = document.querySelector(".people");
const tipPerPerson = document.querySelector(".tip");
const totalPerPerson = document.querySelector(".total");
const tips = document.querySelectorAll(".percent");
const tipCustom = document.querySelector(".percent-custom");
const resetBtn = document.querySelector(".reset");
const zero = document.querySelector(".zero");

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function (val) {
  val.addEventListener("click", handleClick);
});
tipCustom.addEventListener("input", tipInputFun);
resetBtn.addEventListener("click", reset);

billInput.value = "";
peopleInput.value = "";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0;

function billInputFun() {
  resetBtn.classList.remove("reset-bg");
  billValue = parseFloat(billInput.value);
  calculateTip();
}
function peopleInputFun() {
  resetBtn.classList.remove("reset-bg");
  peopleValue = parseFloat(peopleInput.value);
  if (peopleValue < 1) {
    zero.classList.add("visible");
    peopleInput.classList.add("zero-bg");
  } else {
    zero.classList.remove("visible");
    peopleInput.classList.remove("zero-bg");
    calculateTip();
  }
}
function tipInputFun() {
  resetBtn.classList.remove("reset-bg");
  tipValue = parseFloat(tipCustom.value / 100);
  tips.forEach(function (val) {
    val.classList.remove("color");
  });
  calculateTip();
}

function handleClick(event) {
  resetBtn.classList.remove("reset-bg");
  tips.forEach(function (val) {
    val.classList.remove("color");
    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add("color");
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = billValue / peopleValue + tipAmount;
    tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = "$" + total.toFixed(2);
  }
}

function reset() {
  resetBtn.classList.add("reset-bg");
  billInput.value = "";
  peopleInput.value = "";
  tipCustom.value = "";
  tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
  totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);
  tips.forEach(function (val) {
    val.classList.remove("color");
  });
}
