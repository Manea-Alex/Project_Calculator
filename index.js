const buttons = document.querySelectorAll("button");
console.log(
  "The width of the buttons is ",
  document.getElementById("btns").offsetWidth
);
const input = document.getElementById("div");
console.log(input);
function display(e) {
  input.textContent = this.textContent;
  return;
  console.log(this.textContent);
}

let num, mode;

const equals = function (mode) {
  let string_i, reverse, count, final_counter;

  switch (mode) {
    case "/":
      let intermediary1 = Number(num) / Number(input.textContent);
      string_i = intermediary1.toString();
      reverse = string_i.split("").reverse().join("");
      count = 0;

      for (let i = 0; i < string_i.length; i++) {
        if (reverse[i] != ".") count++;
        else break;
      }
      console.log(
        "count e ",
        count,
        "primul numar e ",
        Number(num),
        "al doilea numar e ",
        Number(input.textContent),
        "Variabila intermediara e: ",
        intermediary1,
        "cu lungimea intermediary.tostring().length",
        intermediary1.toString().length
      );
      if (
        // intermediary1.toString().length >= 14 &&
        count > 12
      ) {
        final_counter = count - 11; //3 decimals after, actually it doesnt work like i thought it would
        //but anyways.
        input.textContent = parseFloat(intermediary1.toFixed(final_counter));
        console.log("count final e ", final_counter);
      } else input.textContent = intermediary1;
      console.log(
        "lungimea intermediary la adunare e ",
        intermediary1.toString().length
      );

      break;
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
      console.log(
        "count e ",
        count,
        "primul numar e ",
        Number(num),
        "al doilea numar e ",
        Number(input.textContent),
        "Variabila intermediara e: ",
        intermediary2,
        "cu lungimea intermediary.tostring().length",
        intermediary2.toString().length
      );
      if (
        // intermediary2.toString().length >= 14 &&
        count > 11
      ) {
        final_counter = count - 11; //3 decimals after, actually it doesnt work like i thought it would
        //but anyways.
        input.textContent = parseFloat(intermediary2.toFixed(final_counter));
        console.log("count final e ", final_counter);
      } else input.textContent = intermediary2;
      console.log(
        "lungimea intermediary la adunare e ",
        intermediary2.toString().length
      );

      break;
    case "+":
      let intermediary3 = Number(num) + Number(input.textContent);
      string_i = intermediary3.toString();
      reverse = string_i.split("").reverse().join("");
      count = 0;

      for (let i = 0; i < string_i.length; i++) {
        if (reverse[i] != ".") count++;
        else break;
      }

      console.log(
        "count e ",
        count,
        "count final e ",
        count - 11,
        "primul numar e ",
        Number(num),
        "al doilea numar e ",
        Number(input.textContent),
        "Variabila intermediara e: ",
        intermediary3,
        "cu lungimea intermediary.tostring().length",
        intermediary3.toString().length
        // "numaru final dupa crop cand pun numar in paranteza la tofixed()",
        // parseFloat(intermediary3.toFixed(6)),
        // "numaru final dupa crop cand pun variabila in paranteza la tofixed()",
        // parseFloat(intermediary3.toFixed(count - 11))
      );
      if (
        // intermediary3.toString().length >= 14 &&
        count > 11
      ) {
        final_counter = count - 11; //3 decimals after, actually it doesnt work like i thought it would
        input.textContent = parseFloat(intermediary3.toFixed(final_counter));
        console.log("count final e ", final_counter);
      } else input.textContent = intermediary3;
      console.log(
        "lungimea intermediary la adunare e ",
        intermediary3.toString().length
      );

      break;
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
      console.log(
        "count e ",
        count,
        "primul numar e ",
        Number(num),
        "al doilea numar e ",
        Number(input.textContent),
        "Variabila intermediara e: ",
        intermediary,
        "cu lungimea intermediary.tostring().length",
        intermediary.toString().length
      );
      //3 decimals after, actually it doesnt work like i thought it would
      //but anyways.
      if (
        // intermediary.toString().length >= 14 &&
        count > 11
      ) {
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
      console.log(
        "count e ",
        count,
        "primul numar e ",
        Number(num),
        "al doilea numar e ",
        Number(input.textContent),
        "Variabila intermediara e: ",
        intermediary4,
        "cu lungimea intermediary.tostring().length",
        intermediary4.toString().length
      );
      if (
        // intermediary4.toString().length >= 14 &&
        count > 11
      ) {
        final_counter = count - 11; //3 decimals after, actually it doesnt work like i thought it would
        //but anyways.
        input.textContent = parseFloat(intermediary4.toFixed(final_counter));
        console.log("count final e ", final_counter);
      } else input.textContent = intermediary4;
      console.log(
        "lungimea intermediary la adunare e ",
        intermediary4.toString().length
      );
      break;
  }

  console.log(
    "iese din functia equals",
    Number(num),
    Number(input.textContent)
  );
  console.log(mode);
  if (mode === undefined) {
    console.log("mod nedefinit");
    return;
  }
  if (num === undefined) {
    console.log("numar nedefinit");
    return;
  }
};

const operationHandler = function (op) {
  num = input.textContent;
  input.textContent = "";
};
const buttonHandler = function (e) {
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

    //afiseaza numerele. Dau click pe 8 sa zicem, il pune in input. Dupa
    //aleg semnu sa zicem '-' si nu l pune, dupa dau click pe alt numar si
    //l pune.
  }

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

    // console.log("The mode is", mode);

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
