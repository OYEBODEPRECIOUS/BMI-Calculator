/** @format */
const formData = document.getElementById("form-data");
console.log(formData);

function calculateBMI(e) {
  e.preventDefault();
  let displayMessage = document.getElementById("display-message");
  let nameInput = document.getElementById("name-input").value;
  let weightInput = document.getElementById("weight-input").value;
  let heightInput = document.getElementById("height-input").value;

  //   BMI logic => mass / height **
  let BMICalc = weightInput / heightInput ** 2;
  displayMessage.textContent = `Hello ${nameInput}, your BMI is ${BMICalc} kg/m`;
}

formData.addEventListener("submit", calculateBMI);

let birthYear = Number(2004);

// age calculator
function ageCalc() {
  let age = new Date().getFullYear - 2024;
  console.log(age);
}

//
