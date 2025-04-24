/** @format */

export function showError(mesage, color) {
  const div = document.createElement("div");
  div.textContent = mesage;
  div.style.color = color;
  div.style.position = "fixed";

  document.body.appendChild(div);
  setTimeout(() => {
    div.remove();
  }, 3000);
}

// export function clearfiel