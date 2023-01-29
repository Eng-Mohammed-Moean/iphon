const imge = document.querySelector(".img");
const container = document.querySelector(".container");

const phons = (phone) => {
    imge.src = phone;
}

const color = (color) => {
    container.style.background = color;
}