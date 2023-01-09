let lock = document.querySelector(".lock");
let form = document.querySelector("form");
let docker = document.querySelector(".docker");
let input = document.querySelectorAll(".num");
let pin = document.querySelector(".display");
let click = document.querySelector("p");
let button = document.querySelector("button");
let door = document.querySelector(".door");
let del = document.querySelector(".delete");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close-modal");
let codeButton = document.querySelector(".code-button");
let codeGenerator = document.querySelector(".code-gen");
let blockquote = document.querySelector("blockquote");

lock.onclick = () => {
  lock.classList.toggle("open");
  if (lock.classList.contains("open")) {
    form.style.display = "block";
    modal.style.display = "block";
    click.style.display = "none";
  }
  if (!lock.classList.contains("open")) {
    form.style.display = "none";
    click.style.display = "block";
  }
};
codeButton.onclick = () => {
  codeGenerator.value = Math.floor(Math.random() * 10000);
  codeButton.innerHTML = "Back to form";
};
close.onclick = () => {
  modal.style.display = "none";
};
input.forEach((el, ind) => {
  console.log(el.);
  el.oninput = () => {
    pin.value += el.value;
    el.style.color = "red";
  };
});
form.onsubmit = (e) => {
  e.preventDefault();
  if (pin.value === codeGenerator.value) {
    door.style.animation = "unlock 10s linear";
    docker.style.animation = "door 10s linear";
    blockquote.style.animation = "click 5s linear";
  }
};
