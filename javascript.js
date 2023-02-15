const btn = document.getElementById("btn");
const txt = document.querySelector("p");
let a = 10;
const max = 57;
const actual = max - 13;
const percentage = actual / max * 100;

btn.addEventListener("click", updateBtn);

function updateBtn() {
    if (btn.textContent === "Start machine") {
        btn.textContent = "Stop machine";
        txt.textContent = "The machine has started!";
    } else {
        btn.textContent = "Start machine";
        txt.textContent = "The machine is stopped.";
    }
}

console.log(23 + 97 + 80 + 100 + 100 + 20)
console.log((4 + 6 + 9) / 77)
console.log(a)