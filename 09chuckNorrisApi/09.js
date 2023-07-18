const fetchDataBtn = document.querySelector("#fetchdata");
const result = document.querySelector("#result");

fetchDataBtn.addEventListener("click", async function getData() {
  result.innerText = "Loading....";
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var joke = data.value;
      result.innerHTML = joke;
    });
});

