/** @format */

//  function to show messages
export function showAlert(mesage, color) {
  const feedBackDiv = document.createElement("div");
  feedBackDiv.textContent = mesage;
  feedBackDiv.style.color = "#ffff"
  feedBackDiv.style.backgroundColor = color
  feedBackDiv.style.opacity = "0.5"
  feedBackDiv.style.width = "350px"
  // feedBackDiv.style.margin = "auto"
  feedBackDiv.style.position = "absolute"
  feedBackDiv.style.top = "22%"
  feedBackDiv.style.left = "37%" 
  feedBackDiv.style.padding = "0.55rem"
  feedBackDiv.style.borderRadius = "5px"
 

  document.body.appendChild(feedBackDiv);
  
  setTimeout(() => {
    feedBackDiv.remove();
  }, 3000);
} 

// function to show password strength
export function passwordStrength(password) {
  let strengthIndicator = document.getElementById("password-strength");

  let strength = "weak";
  let color = "red";

  if (password.length == 6) {
    color = "orange";
    strength = "fair";
  } else if (password.length > 6) {
    color = "green";
    strength = "strong";
  }

  strengthIndicator.textContent = `${strength}`;
  strengthIndicator.style.color = color;
  ``;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("password").addEventListener("input", (e) => {
    passwordStrength(e.target.value);
  });
});
