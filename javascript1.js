// doodle #2

function myFunction() {
    let age = document.getElementById("age").value;
    let voteable = (age < 18) ? "Too young" : "Old enough";
    document.getElementById("demo").innerHTML = voteable + " to vote.";
}