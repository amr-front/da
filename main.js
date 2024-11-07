let Input = document.getElementById("input");
let Parent = document.getElementById("Parent");
let Button = document.getElementById("go");

let cl = document.querySelector(".input");

let Em = document.createElement("p");
let Waring = document.createTextNode(
  "Ex:`YYYY/MM/DD` , YYYY-MM-DD ,   YYYY MM DD"
);
Em.appendChild(Waring);
cl.appendChild(Em);

let number = 3;
let Massage = setInterval(() => {
  number -= 1;
  if (number === 0) {
    clearInterval(Massage);
    Waring.nodeValue = "";
  }
}, 1000);

let Result = document.createElement("p");
Parent.appendChild(Result);
let Res = document.createTextNode("");
function Calc(val) {
  Res.nodeValue = "";
  let Time = new Date();
  let date = new Date(val);
  let Mils = 0,
    Sec = 0,
    Minute = 0,
    hour = 0,
    Day = 0,
    Month = 0,
    Year = 0;

  Mils = Math.abs(Time - date);
  Res.nodeValue = Time > date ? "(Time Left!)-" : "(Stay On Time!)-";

  Sec = Math.floor(Number(Mils / 1000));
  Minute = Math.floor(Number(Sec / 60));
  hour = Math.floor(Number(Minute / 60));
  Day = Math.floor(Number(hour / 24));
  Month = Math.floor(Number(Day / 30.33));
  Year = Math.floor(Number(Day / 365.5));
  Res.nodeValue += `Year/s:(${Year}) , Month:(${Month}) , Day:(${Day}) , Hour:(${hour}) , Min:(${Minute}) , Sec:(${Sec})`;
  Result.appendChild(Res);
}

Input.addEventListener("blur", (e) => {
  let InputCheck = /^\d{4}(\/|-|\s)\d{1,2}(\/|-|\s)\d{1,2}$/;
  Waring.textContent = "";
  if (InputCheck.test(Input.value)) {
    let [, month, day] = Input.value.split(/\/|-|\s/).map(Number);
    if (month > 0 && month <= 12 && day <= 31 && day > 0) {
      Input.style.borderColor = "greenyellow";
      Waring.textContent = "Done ✔";
    } else if (Input.value.length === 0) {
      Input.style.borderColor = "transparent";
      Waring.textContent = "";
    } else {
      Em.appendChild(Waring);
      Input.style.borderColor = "red";
      Waring.textContent = "Invalid Date Form";
    }
  } else if (Input.value.length === 0) {
    e.preventDefault();
    Waring.textContent = "";
    Input.style.borderColor = "transparent";
  } else {
    Input.style.borderColor = "red";
    Waring.textContent = "Invaded Date ❎";
  }
});

Button.addEventListener("click", (e) => {
  if (Waring.textContent !== "Done ✔") {
    e.preventDefault();
    Res.nodeValue = "";
  } else {
    Calc(Input.value);
  }
});
