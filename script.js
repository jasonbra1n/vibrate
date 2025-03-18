// Check if the Vibration API is supported
if ("vibrate" in navigator) {
  const vibrateButton = document.getElementById("vibrateButton");

  vibrateButton.addEventListener("click", () => {
    // Vibrate for 500 milliseconds
    navigator.vibrate(500);
  });
} else {
  alert("Vibration API is not supported in this browser.");
}
