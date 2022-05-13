let password = document.getElementById("passwoord");
let buttons = document.querySelectorAll("input[type=button]");
let controls = document.querySelectorAll("input:not([type=button])");
let controlButtons = document.querySelectorAll("input[type=checkbox]");
let controlMeters = document.querySelectorAll("input[type=range]");
let inputs = document.querySelectorAll("input");
let labels = document.querySelectorAll("label");
let rocket = document.getElementById("rocket");

let okButton = buttons[0];
let reset = buttons[1];
let launch = buttons[2];

let dir = document.querySelector("#direction");
let acc = document.querySelector("#acceleration");

dir.oninput = function () {
  rocket.style.transform = `rotateZ(${dir.value}deg)`;
};

function check2(button) {
  return button.checked == true;
}

for (let item = 0; item < controlButtons.length; item++) {
  controlButtons[item].onchange = function () {
    let buttonArray = Array.from(controlButtons);
    let bottonsCheck = buttonArray.every((button) => check2(button));
    console.log(bottonsCheck);
    if (bottonsCheck == true) {
      launch.removeAttribute("disabled");
    }
    reset.removeAttribute("disabled");
  };
  launch.disabled = true;
}

okButton.addEventListener("click", () => {
  if (password.value === "TrustNo1") {
    labels.forEach((label) => {
      label.style.color = "yellow";
    });
    controlButtons.forEach((button) => {
      button.disabled = false;
    });
    controlMeters.forEach((meter) => {
      meter.disabled = false;
    });
    password.disabled = true;
  }
  password.value = "";
});

launch.addEventListener("click", () => {
  rocket.style.transform = `rotateZ(${dir.value}deg) translateY(-5000px)`;
  rocket.style.transition = `${acc.value}ms`;
});

reset.addEventListener("click", () => {
  rocket.style.transform = "";
  rocket.style.transition = "";
  for (let item = 2; item < inputs.length - 2; item++) {
    inputs[item].checked = false;
    if (inputs[item].type == "range") {
      inputs[item].value = 50;
    }
    inputs[item].setAttribute("disabled", "");
  }
  labels.forEach((label) => {
    label.style.color = "";
  });
  launch.setAttribute("disabled", "");
  password.removeAttribute("disabled");
});
