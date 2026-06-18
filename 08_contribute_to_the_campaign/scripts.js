let totalDonations = 0;

function giveTenDollars() {
  totalDonations = totalDonations + 10;

  document.getElementById("totalDisplay").innerText = "Total raised: $" + totalDonations;

  let message = "Thanks for your $10!";

  if (totalDonations > 0 && totalDonations <= 50){
    message = "📢 Just getting started";
  } else if (totalDonations >= 50 && totalDonations < 100) {
    message = "🎉 We've hit our first campaign milestone! 📣 Gaining momentum!"; 
  } else if (totalDonations >= 100 && totalDonations <150) {
    message = "🚀 Goal smashed! You powered this campaign! 🔥 Almost at full strength";
  } else if (totalDonations >= 150) {
    message = "🚀 Full campaign launch!"
  document.getElementById("thankYouMessage").innerText = message;
  }
}

function takeTenDollars() {
  if (totalDonations > 0) {
    totalDonations = totalDonations - 10;

    document.getElementById("totalDisplay").innerText = "Total raised: $" + totalDonations;

    let message = "Thanks for your $10";
  } else if (totalDonations <= 0) {
    let message = "Can't refund ho"
    document.getElementById("thankYouMessage").innerText = message;
  }
}

document.getElementById("giveButton").onclick = giveTenDollars

document.getElementById("takeButton").onclick = takeTenDollars

