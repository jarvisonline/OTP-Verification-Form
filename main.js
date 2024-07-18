let inputs = document.querySelectorAll(".container .fields input");
let btn = document.querySelector(".container .verify-btn");

let handleOtp = (e) => {
  let input = e.target;
  let inputValue = input.value;
  input.value = "";
  input.value = inputValue ? inputValue[0] : "";

  let inputIndex = input.dataset.index;

  if (inputValue.length > 0 && inputIndex < inputs.length - 1) {
    input.nextElementSibling.disabled = false;
    input.nextElementSibling.focus();
    input.previousElementSibling.disabled = true;
  }

  if (e.key == "Backspace" && inputIndex > 0) {
    input.previousElementSibling.disabled = false;
    input.previousElementSibling.focus();
    input.nextElementSibling.disabled = true;
  }

  if (inputs[5].value != "") {
    btn.disabled = false;
    btn.classList.add("active");
  } else {
    btn.disabled = true;
    btn.classList.remove("active");
  }
};

inputs[0].focus();

inputs.forEach((input, index) => {
  input.dataset.index = index;
  input.addEventListener("keyup", handleOtp);
});
