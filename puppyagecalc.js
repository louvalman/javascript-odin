const postAge = document.querySelector(".para");
const age = prompt("What's the age of your dog in human years?", "");

function calculateDogAge(age) {
  dogYears = age * 7;
  postAge.textContent += `Your dog is ${dogYears} years old in dog years!`;
}

calculateDogAge(age);
