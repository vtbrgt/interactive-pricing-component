const slider = document.getElementById("myinput");
const min = slider.min;
const max = slider.max;
const value = slider.value;

slider.style.background = `linear-gradient(to right, hsl(174, 86%, 45%) 0%, hsl(174, 86%, 45%) ${
  ((value - min) / (max - min)) * 100
}%, #DEE2E6 ${((value - min) / (max - min)) * 100}%, #DEE2E6 100%)`;

slider.oninput = function () {
  this.style.background = `linear-gradient(to right, hsl(174, 86%, 45%) 0%, hsl(174, 86%, 45%) ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, #DEE2E6 ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, #DEE2E6 100%)`;
};

let $range = document.querySelector("input");
let $value = document.querySelector("span");

$range.addEventListener("input", function () {
  $value.textContent = "$" + this.value + ".00";
});
