const first_container = document.querySelector(".first_container");
const second_container = document.querySelector(".second_container");
const submit = document.querySelector(".submit");
const buttons = document.querySelectorAll("#button");
const rate_button = document.getElementById("rate");

submit.addEventListener("click", () => {
  second_container.style.display = "block";
  first_container.style.display = "none";
});

buttons.forEach((rate) => {
  rate.addEventListener("click", () => {
    rate_button.innerHTML = rate.innerHTML;
  });
});