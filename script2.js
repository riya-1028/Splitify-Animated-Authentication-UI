const container = document.getElementById("container");

const welcome = document.querySelector(".welcome-box");
const login = document.querySelector(".login-box");


// Orange side par cursor
welcome.addEventListener("mouseenter", () => {

    container.classList.add("active");

});


// Login side par cursor
login.addEventListener("mouseenter", () => {

    container.classList.remove("active");

});