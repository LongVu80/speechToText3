const texts = document.querySelector("#final");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.continuous = true;
let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
 

  
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("")

  texts.innerText = text;
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
    // p = document.createElement("p");
    texts.innerText = text
    // texts.push(text)
  }
});

document.querySelector("#start").onclick = () => {
  recognition.start();
// this.openFullscreen()
document.querySelector("#status").innerHTML =`Voice Recognition is on. Please speak up.`
};

recognition.addEventListener("end", () => {
  recognition.start();

});

// recognition.start();

document.querySelector("#clear").onclick = () => {
  location.reload()
};

document.querySelector('.fa-keyboard').addEventListener('click', function(e) {
  textarea = document.querySelector('#t-final');
  if(textarea.style.display === "none"){
    textarea.style.display = "block";
    textarea.innerHTML = `<textarea id="textarea" cols="30" rows="10" class="form-control bg-dark text-light" style="border: 1px solid gray; border-radius: 8px; font-size: 25px; position: relative; top: 200px;" placeholder="Please type in here"></textarea>`
    document.querySelector('#texting').style.cssText = 'border: 1px solid gray; height: 200px; overflow: auto; display: flex; flex-direction: column-reverse; position: absolute;'
    document.querySelector('.button').style.cssText = "position: relative; bottom: 00px"
  } else {
    textarea.style.display = "none"
    document.querySelector('.button').style.cssText = "position: relative; top: 0px";
    document.querySelector('#texting').style.cssText = 'border: 1px solid gray; height: 300px; overflow: auto; display: flex; flex-direction: column-reverse;'

  }

})