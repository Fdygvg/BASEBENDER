const baseToTen = document.querySelector(".twoToTen");
const b10toTwo = document.querySelector(".tenToTwo");
const input = document.querySelector(".inputBox");
const body = document.getElementById("container");
const bases = document.querySelector(".buttons");
let calc = [];

bases.addEventListener("click", function (e) {
  let base = e.target.getAttribute("id");
  if (base === "base2") {
    let userInput = input.value;
    let result = parseInt(userInput, 2);
    console.log(result);
    input.value = result;
  }

  else if (base === "base3"){

    let userInput = input.value;
    let result = parseInt(userInput, 2);
    console.log(result);
  }
  input.value = result;

  
});

