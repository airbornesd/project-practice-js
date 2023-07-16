// variables:

// const buttonPlay = document.getElementsByClassName("btn-sound");
// const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

// let arr = Array.from(buttonPlay);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   buttonPlay[i].addEventListener("click", function () {
//     //console.log("working");
//     audio.play();
//   });
// }

window.addEventListener('keydown', function(index) {
    
    const audio = document.querySelector(`audio[data-key = "${index.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();

});
