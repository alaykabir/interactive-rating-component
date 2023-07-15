const submit_button = document.getElementById("submit");
const rating_card = document.querySelector(".container");
const thanks_card = document.querySelector(".result-container");
const rating_numbers = document.querySelectorAll(".rating-number");
const result = document.getElementById("rate");


let click = false;
rating_numbers.forEach((number) => {
  number.addEventListener("click" , () =>{
    result.innerHTML = number.innerHTML;
    click = true;
  })
})

submit_button.addEventListener("click", () => {
  if(click){
    thanks_card.classList.remove("hidden");
    rating_card.classList.add("hidden");
  }
});
