function showSignupMessage() {
  let name = document.getElementById("nameInput").value;
  let region = document.getElementById("regionInput").value;
  let message
if (name == '') {
  message = 'Please enter both your name and region.';
} else if (region == '') {
  message = 'Please enter both your name and region.'
} else {
  message = `From ${region}, we welcome ${name} \nto the movement!`
}

  document.getElementById("output").innerText = message;
}

document.getElementById("signupButton").onclick = showSignupMessage
