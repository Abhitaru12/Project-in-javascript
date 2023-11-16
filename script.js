
let signUpBtn = document.getElementById("signUpBtn");
let signInBtn = document.getElementById("signInBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signInBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = 'Sign In'
    signUpBtn.classList.add("diabled");
    signInBtn.classList.remove("diabled");
}

signUpBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    title.innerHTML = 'Sign Up'
    signUpBtn.classList.remove("diabled");
    signInBtn.classList.add("diabled");
}