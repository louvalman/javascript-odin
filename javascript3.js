let userName = prompt("Who's there"); // Create prompt that asks user to enter their name, sets their input in a variable called userName

if (userName === 'Admin') {
    let pass = prompt('Password?'); // If the user replies the prompt with Admin, ask in a new prompt for a password
    if (pass === 'TheMaster') { // If password prompt is answered with TheMaster,
        alert('Welcome!') // give user an alert that says Welcome!
    } else if (pass === '' || pass === null) { // If the user reply with an empty password, or cancels the prompt,
        alert('Cancelled'); // give user an alert that says Cancelled
    } else { // If the user gives any other password than 'empty' or 'TheMaster',
        alert('Wrong password'); // give user an alert that says Wrong password
    }
} else if (userName === '' || userName === null) { // If user enters a blank username or cancels username prompt,
    alert('Cancelled'); // give user an alert that says Cancelled
} else {
    alert("I don't know you"); // If user gives a valid input, that is not Admin, give user an alert that says I don't know you
}