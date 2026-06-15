let nameInput = document.getElementById("nameInput");
let roleInput = document.getElementById("roleInput");
let greetButton = document.getElementById("greetButton");
let output = document.getElementById("output");
let partyTheme = "first JavaScript party";

function sayHello() {
  let name = nameInput.value;
  let role = roleInput.value;
  output.innerText = "Welcome, " + name + " the " + role + " to your " + partyTheme.toUpperCase() + "!";
}

greetButton.onclick = sayHello;

