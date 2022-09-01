const texts = document.querySelector("#final");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("")

  p.innerText = text;
  
  if (e.results[0].isFinal) {
    // if (text.includes("how are you")) {
    //   p = document.createElement("p");
    //   p.classList.add("reply");
    //   p.innerText = "I am fine";
    //   texts.appendChild(p);
    // }
    // if (
    //   text.includes("what's your name") ||
    //   text.includes("what is your name")
    // ) {
    //   p = document.createElement("p");
    //   p.classList.add("reply");
    //   p.innerText = "My Name is Long Vu";
    //   texts.appendChild(p);
    // }
    // if (text.includes("open my YouTube")) {
    //   p = document.createElement("p");
    //   p.classList.add("replay");
    //   p.innerText = "opening youtube channel";
    //   texts.appendChild(p);
    //   console.log("opening youtube");
    //   window.open("https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ");
    // }
    p = document.createElement("p");
  }
});

// document.querySelector("#start").onclick = () => {
//   recognition.start();
// // this.openFullscreen()
// document.querySelector("#status").innerHTML =`Voice Recognition is on`
// };

recognition.addEventListener("end", () => {
  recognition.start();

});

recognition.start();

document.querySelector("#clear").onclick = () => {
  location.reload()
};

document.querySelector('.fa-keyboard').addEventListener('click', function(e) {
  textarea = document.querySelector('#t-final');
  if(textarea.style.display === "none"){
    textarea.style.display = "block";
  } else {
    textarea.style.display = "none"
  }
})