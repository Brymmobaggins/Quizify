/** @format */

import { showMessage } from "../js/utils.js";

const loginButton = document.getElementById("login-btn");
loginButton.addEventListener("click", login);

export function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    return showMessage("Enter your username and password", "red");
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const isUserValid = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!isUserValid) {
    return showMessage("your username or password is incorrect", "red");
  } else {
    setTimeout(() => {
      window.location.href = "../public/quizSelection.html";
    }, 2000);
  }
}
