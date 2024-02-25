const cardImg = document.querySelector(".card-img");
const selectText = document.querySelector(".select");
const characterYellow = document.querySelector(".yellow");
const characterPink = document.querySelector(".pink");
const header = document.querySelector("header");
const helpButton = document.querySelector(".help-button");
const helpText = document.querySelector(".help-text");

characterYellow.addEventListener("click", () => {
    cardImg.style.backgroundImage = "url('./pic/IMG_47927D3192E0-1.PNG')";
    selectText.style.color = "#ffce2e";
})
characterPink.addEventListener("click", () => {
    cardImg.style.backgroundImage = "url('./pic/IMG_47927D3192E0-1.PNG')";
    selectText.style.color = "#ff8baa";
})

helpButton.addEventListener("click", () => {
    helpText.style.display = "none";
    helpText.style.display = "block";
})


