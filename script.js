// accesing elements of HTML
const display = document.getElementById("display");

// mirror-display
const mirrorDisplay = document.getElementById("mirror-display");

// clear-button
document.getElementById("clear").addEventListener("click", function () {
  display.value = "";
  mirrorDisplay.innerText = "";
  stack = [];
});

// backspace-button
document.getElementById("back").addEventListener("click", function () {
  const updatedDisplay = display.value.slice(0, -1);
  display.value = updatedDisplay;
});

// all-digits
const digitBtn = document.getElementsByClassName("digit-button");
for (let i = 0; i < digitBtn.length; i++) {
  digitBtn[i].addEventListener("click", function () {
    display.value += digitBtn[i].textContent;
  });
}

<<<<<<< HEAD
<<<<<<< HEAD
// all-operators..
=======
// all-operators
>>>>>>> 1aa3605 (Initial commit)
=======
// all-operators..
>>>>>>> d1db3ec (Initial Commit)
const stack = [];
const operatorBtn = document.getElementsByClassName("operator");
for (let i = 0; i < operatorBtn.length; i++) {
  operatorBtn[i].addEventListener("click", function () {
    if (stack.length === 2) {
      const val = display.value.split(" ");
      let b = parseFloat(val[val.length - 1]);
      let operator = stack.pop();
      let a = parseFloat(stack.pop());
      if (operator === "+") {
        let result = a + b;
        stack.push(result);
        stack.push(operatorBtn[i].textContent);
        mirrorDisplay.innerText = result;
      } else if (operator === "-") {
        let result = a - b;
        stack.push(result);
        stack.push(operatorBtn[i].textContent);
        mirrorDisplay.innerText = result;
      } else if (operator === "×") {
        let result = a * b;
        stack.push(result);
        stack.push(operatorBtn[i].textContent);
        mirrorDisplay.innerText = result;
      } else if (operator === "%") {
        let result = Math.floor(a % b);
        stack.push(result);
        stack.push(operatorBtn[i].textContent);
        mirrorDisplay.innerText = result;
      } else if (operator === "÷") {
        if (b === 0) {
          display.value = "Error!!!";
        } else {
          let result = a / b;
          stack.push(result);
          stack.push(operatorBtn[i].textContent);
          mirrorDisplay.innerText = result;
        }
      }
      display.value = display.value + " " + operatorBtn[i].textContent + " ";
    } else {
      stack.push(display.value);
      display.value = display.value + " " + operatorBtn[i].textContent + " ";
      stack.push(operatorBtn[i].textContent);
    }
  });
}

// operations conditions
document.getElementById("equal").addEventListener("click", function () {
  const val = display.value.split(" ");
  let b = parseFloat(val[val.length - 1]);
  let operator = stack.pop();
  let a = parseFloat(stack.pop());

  if (operator === "+") {
    let result = a + b;
    display.value = result;
    mirrorDisplay.innerText = result;
  } else if (operator === "-") {
    let result = a - b;
    display.value = result;
    mirrorDisplay.innerText = result;
  } else if (operator === "×") {
    let result = a * b;
    display.value = result;
    mirrorDisplay.innerText = result;
  } else if (operator === "%") {
    let result = Math.floor(a % b);
    display.value = result;
    mirrorDisplay.innerText = result;
  } else if (operator === "÷") {
    if (b === 0) {
      display.value = "Error!!!";
    } else {
      let result = a / b;
      display.value = result;
      mirrorDisplay.innerText = result;
    }
  }
});
