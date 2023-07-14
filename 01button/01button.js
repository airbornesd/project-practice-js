// event listeners
function handleClick() {
    alert("check console for output")
    console.log("Button clicked! ;)");
  }
  
  const button = document.getElementById("myButton");
  button.addEventListener("click", handleClick);
  

// element.addEventListener("click", function);
// button-2
const buttonTwo = document.querySelector(".btn-2");
let alertBtn = (() => alert('using events'));
buttonTwo.addEventListener("click", alertBtn);

// button-3 and mouseOver
const display = document.querySelector('div').childNodes[5];
display.style.backgroundColor = 'red';
display.style.width = "200px";
display.style.height = "100px";

let changeColor = (() => display.style.backgroundColor = '#1D5B79');
display.addEventListener("mouseover", changeColor);

// reveal more button
const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

let realContent = (() => {
    if(hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn');
    } else {
        hiddenContent.classList.add('reveal-btn');
    }
});

revealBtn.addEventListener("click", realContent);


//console.log(document.querySelector('div').classList);