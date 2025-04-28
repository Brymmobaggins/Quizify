/** @format */

import { showError } from "../js/utils.js";

const signUpForm = document.getElementById("signup-form");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form submission

  // capture user fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    return showError("Fill in all field", "red");
  }

  // if (isPasswordValid(password)) {
  // }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  // check if users exists
  const userExists = users.find(
    (user) => user.name === name || user.email === email
  );

  if (userExists) {
    return showError(
      "You have already have an account, kindly Log in",
      "green"
    );
  } else {
    const newUser = {
      name,
      email,
      password,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  }
  //   clear field users enters
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});
