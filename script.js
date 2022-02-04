const counter = document.querySelector(".counter-number");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");

const container = document.querySelector(".counter-container");
const button = document.querySelectorAll('.button');
const dark = document.querySelector(".fas");

increase.addEventListener("click", () => {
  counter.textContent++;
});

reset.addEventListener("click", () => {

  counter.textContent = 0;
});

decrease.addEventListener("click", () => {
    if(counter.textContent > 0){
  counter.textContent--;
}
});

dark.addEventListener("click", () => {
    container.classList.toggle("dark-container");
    dark.classList.toggle("dark-icon");
    button.forEach(button => {
        button.classList.toggle("dark-button");  
    })
});
