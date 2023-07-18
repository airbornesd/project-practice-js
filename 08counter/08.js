let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let count = document.querySelector("#output");
let output = document.querySelector("#display");
let start = document.querySelector("#start-btn");
let stop = document.querySelector("#stop-btn");

stop.addEventListener("click", () => {
  let counting = 0;
  count = counting;
  output = counting;
});

add.addEventListener("click", function () {
  let display = count.innerHTML++;
  output.innerHTML = display + 1;
});

subtract.addEventListener("click", function () {
  let display = count.innerHTML--;
  output.innerHTML = display - 1;
});

start.addEventListener("click", function () {
  let counter = 0;
  setInterval(() => {
    if (counter < 100) {
      counter++;
      let display = count.innerHTML++;
      output.innerHTML = display + 1;
    }
  }, 200);
});
