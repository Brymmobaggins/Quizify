import { showMessage } from "../js/utils.js"; 

const loginButton = document.getElementById("login-btn")

loginButton.addEventListener("click", login)

export function login(){
   const username = document.getElementById("username").value.trim()
   console.log(username)
    
   if(!username || !email){
       return showMessage("kindly Log in", "red")
    }


    const users = JSON.parse(localStorage.getItem("users")) || []
    const isUserValid = users.find((user) => user.name === username && user.email === email )
   
   if(!isUserValid){
    return showMessage("You don't have account", "red")
   }
}