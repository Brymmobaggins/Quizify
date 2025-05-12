/** @format */

//  function to show messages
export function showMessage(mesage, color) {
  const div = document.createElement("div");
  div.textContent = mesage;
  div.style.color = color;

  document.body.appendChild(div);
  setTimeout(() => {
    div.remove();
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
  strengthIndicator.style.color = color;``
}

document.getElementById("password").addEventListener("input", (e) => {
  passwordStrength(e.target.value);
});



