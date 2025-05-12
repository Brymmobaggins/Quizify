// /** @format */

// if (!name || !email || !password) {
//   return showMessage("Fill in all field", "red");
// }

// // Instead of hashing on the frontend, send the data to the backend
// fetch("/signup", {
//   // Assuming a /signup endpoint on your backend
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ name, email, password }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     if (data.success) {
//       showMessage("Registration successful! Redirecting to login..");
//       setTimeout(() => {
//         window.location.href = "../public/login.html";
//       }, 2000);
//     } else {
//       showMessage(data.message, "red"); // Display error message from backend
//     }
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//     showMessage("An error occurred during registration.", "red");
//   });

// //   clear field users enters
// document.getElementById("name").value = "";
// document.getElementById("email").value = "";
// document.getElementById("password").value = "";
