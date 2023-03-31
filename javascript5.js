// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
const day = new Date().getDay();
const para = document.querySelector("p");

switch (day) {
    case 0:
        para.textContent = "It's Sunday, time to relax!";
        break;
    case 1:
        para.textContent = "Happy Monday!";
        break;
    case 2:
        para.textContent = "It's Tuesday. You got this!";
        break;
    case 3:
        para.textContent = "Hump day already!";
        break;
    case 4:
        para.textContent = "Just one more day 'til the weekend!";
        break;
    case 5:
        para.textContent = "Happy Friday!";
        break;
    case 6:
        para.textContent = "Have a wonderful Saturday!";
        break;
    default:
        para.textContent = "Something went horribly wrong... It's not any day of the week?";
}