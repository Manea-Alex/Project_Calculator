// Select all button elements on the page
const buttons = document.querySelectorAll("button");

// Log the width of the button container for debugging purposes
console.log(
  "The width of the buttons is ",
  document.getElementById("btns").offsetWidth
);
// Select the input display element where the results and inputs are shown
const input = document.getElementById("div");

// Define variables for the number input and the operation mode
let num, mode;

// Function to handle the equals operation based on the mode (operation type)
const equals = function (mode) {
  // Intermediary variables and a switch statement to handle different operations
  let string_i, reverse, count, final_counter;

  switch (mode) {
    // The case for division operation
    case "/":
      let intermediary1 = Number(num) / Number(input.textContent);
      string_i = intermediary1.toString();
      reverse = string_i.split("").reverse().join("");
      count = 0;

      for (let i = 0; i < string_i.length; i++) {
        if (reverse[i] != ".") count++;
        else break;
      }
      if (count > 11) {
        final_counter = count - 11;

        input.textContent = parseFloat(intermediary1.toFixed(final_counter));
        console.log("count final e ", final_counter);
      } else input.textContent = intermediary1;
      console.log(
        "lungimea intermediary la adunare e ",
        intermediary1.toString().length
      );

      break;
    // The case for multiplication operation
    case "×":
      console.log("inmultire");
      let intermediary2 = Number(num) * Number(input.textContent);
      input.textContent = intermediary2;
      string_i = intermediary2.toString();
      reverse = string_i.split("").reverse().join("");
      count = 0;

      for (let i = 0; i < string_i.length; i++) {
        if (reverse[i] != ".") count++;
        else break;
      }
      if (count > 11) {
        final_counter = count - 11;
        input.textContent = parseFloat(intermediary2.toFixed(final_counter));
        console.log("count final e ", final_counter);
      } else input.textContent = intermediary2;
      console.log(
        "lungimea intermediary la adunare e ",
        intermediary2.toString().length
      );

      break;
    // The case for addition operation
    case "+":
      let intermediary3 = Number(num) + Number(input.textContent);
      string_i = intermediary3.toString();
      reverse = string_i.split("").reverse().join("");
      count = 0;

      for (let i = 0; i < string_i.length; i++) {
        if (reverse[i] != ".") count++;
        else break;
      }

      if (count > 11) {
        final_counter = count - 11;
        input.textContent = parseFloat(intermediary3.toFixed(final_counter));
        console.log("count final e ", final_counter);
      } else input.textContent = intermediary3;
      console.log(
        "lungimea intermediary la adunare e ",
        intermediary3.toString().length
      );

      break;
    // The case for substraction operation
    case "-":
      console.log("scadere");
      if (num.length >= input.textContent.length) {
        leng = num.length;
      } else leng = input.textContent.length;
      console.log("lungimea e ", leng);
      let intermediary = Number(num) - Number(input.textContent);
      string_i = intermediary.toString();
      reverse = string_i.split("").reverse().join("");
      count = 0;
      for (let i = 0; i < string_i.length; i++) {
        if (reverse[i] != ".") count++;
        else break;
      }

      if (count > 11) {
        final_counter = count - 11;
        console.log("final counter ", final_counter);
        input.textContent = parseFloat(intermediary.toFixed(final_counter));
        console.log("count final e ", final_counter);
      } else input.textContent = intermediary;
      console.log(
        "lungimea intermediary la adunare e ",
        intermediary.toString().length
      );
      break;
    // The case for moudulo operation
    case "%":
      console.log("modul");
      let intermediary4 = Number(num) % Number(input.textContent);
      string_i = intermediary4.toString();
      reverse = string_i.split("").reverse().join("");
      count = 0;

      for (let i = 0; i < string_i.length; i++) {
        if (reverse[i] != ".") count++;
        else break;
      }
      if (count > 11) {
        final_counter = count - 11;
        input.textContent = parseFloat(intermediary4.toFixed(final_counter));
        console.log("count final e ", final_counter);
      } else input.textContent = intermediary4;
      console.log(
        "lungimea intermediary la adunare e ",
        intermediary4.toString().length
      );
      break;
  }
};

// Function to handle operations (+, -, *, /, %)
const operationHandler = function (op) {
  // Store the current input in num and clear the display
  num = input.textContent;
  input.textContent = "";
};

// Function to handle button clicks
const buttonHandler = function (e) {
  // If the button's content is a number, append it to the display
  if (!isNaN(Number(this.textContent))) {
    console.log(
      "btnhandler number",
      Number(this.textContent),
      "lungimea ",
      input.textContent.length
    );
    input.textContent += this.textContent;
    if (input.textContent.length >= 16) {
      alert(
        "You have reached the maximum amount of numbers that can be displayed"
      );
      console.log(input.textContent.length);
      input.textContent = 0;
      return;
    }

    console.log("Lungimea inputului: ", input.textContent.length);
    return;
  }

  // Switch statement to handle different button functions like clear, plus/minus, backspace, etc.
  switch (this.textContent) {
    case "AC":
      input.textContent = "";
      break;
    case "+/-":
      if (input.textContent.includes("-"))
        input.textContent = input.textContent.slice(
          1,
          input.textContent.length
        );
      else input.textContent = "-" + input.textContent;
      break;
    case ".":
      if (input.textContent.includes(".")) {
        if (input.textContent.indexOf(".") == input.textContent.length - 1) {
          input.textContent = display.textContent.slice(
            0,
            input.textContent.length - 1
          );
          console.log("index", input.textContent.indexOf("."));
        }
      } else input.textContent += ".";
      break;
    case "⇦":
      console.log(
        "inainte de taiere: ",
        input.textContent,
        "dupa taiere: ",
        input.textContent.slice(0, -1)
      );
      input.textContent = input.textContent.slice(0, -1);
      break;
    case "=":
      equals(mode);
      break;

    default:
      mode = this.textContent;
      operationHandler(this.textContent);
      break;
  }
};
if (input.textContent === undefined) input.textContent = "";
buttons.forEach((button) => button.addEventListener("click", buttonHandler));
