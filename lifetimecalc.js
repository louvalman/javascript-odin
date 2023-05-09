const postSupply = document.querySelector(".para");
let age;
let amount;

function calculateSupply(age, amount) {
  age = parseFloat(
    prompt("How old are you?", "Type your age").replace(",", ".")
  );
  amount = parseFloat(
    prompt(
      "How many do you need pr. day of the product?",
      "Type your average pr. day"
    ).replace(",", ".")
  );
  const maxAge = 80;
  let finalDays = (maxAge - age) * 365; // finds your remaining years, and multiplies with 365 to find days left to live until eighty
  let supply = amount * finalDays;
  let finalSupply = `You will need ${supply} to last you for the rest of your life.. meaning your remaining ${finalDays} days until you're ${maxAge}`;
  postSupply.textContent += finalSupply;
  return finalSupply;
}

calculateSupply(age, amount);
