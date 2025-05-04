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

export function isPasswordValid(password) {
  let strengthIndicator = document.querySelector("small");

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
}
document.getElementById("password").addEventListener("input", (e) => {
  isPasswordValid(e.target.value)
});
