//

console.clear();
console.log("Hello world");

let a = 4;
let b = 3;

console.log(a);
console.log(b);

let c = a + b;
console.log(c);

// let nameButton = document.getElementById("pressme");
let addButton = document.getElementById("addButton");
let tryButton = document.getElementById("tryButton");

// set the event listener functions for each button
// nameButton.addEventListener("click", sayhi);
addButton.addEventListener("click", addNumbers);
tryButton.addEventListener("click", isGreater);

$("#pressme").click(sayhi);

// this is getting called when the greeting button is clicked
function sayhi() {
  // let userName = document.getElementById("users-name").value;

  // let myGreetingSpot = document.getElementById("greeting");

  let userName = $("#users-name").val();

  console.log(userName);
  $("#greeting").text("Hello, " + userName + "!!");

  //myGreetingSpot.innerHTML = "Hello, " + userName + "!!";
  //myGreetingSpot.style.fontWeight = "bold";
}

// this is getting called when the add button is clicked
function addNumbers() {
  let x = document.getElementById("number1").value;
  let y = document.getElementById("number2").value;

  let answerSpot = document.getElementById("answer");

  answerSpot.innerText = Number(x) + Number(y);
}

// this is getting called when pressing the button to try if a number is greater than 5
function isGreater() {
  let attemptText = document.getElementById("attempt").value;
  let attemptNumber = Number(attemptText);

  let resultSpot = document.getElementById("theResult");

  if (attemptNumber > 5) {
    resultSpot.innerText = "It was greater than 5!  Nice work!";
  } else {
    resultSpot.innerText = "It wasn't greater than 5.  You can try again.";
  }
}
