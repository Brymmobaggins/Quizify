


import { showMessage } from "../js/utils.js";
const signUpForm = document.getElementById("signup-form");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form submission

  // capture user fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    return showMessage("Fill in all field", "red");
  }

  
  const users = JSON.parse(localStorage.getItem("users")) || [];
  // check if users exists
  const userExists = users.find(
    (user) => user.name === name || user.email === email
  );

  if (userExists) {
    return showMessage(
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

    // show success message
    showMessage("Registration successful! Redirecting to login..");
 
    // Redirect to login page after 2 seconds
    setTimeout(() => {
      window.location.href = "../public/login.html";
    }, 2000);
  }
  //   clear field users enters
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});
