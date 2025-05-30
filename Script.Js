const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let history = []; // Array para armazenar o histórico

function updateHistory(operation) {
    history.push(operation); // Adiciona a operação ao histórico
    document.getElementById('history').innerHTML = history.join('<br>'); // Atualiza a exibição do histórico
}

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
      let operation = `${display.innerText}`; // Formato da operação
      updateHistory(operation); // Atualiza o histórico
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

