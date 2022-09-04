const texts = document.querySelector("#final");
const textbox = document.querySelector('#textbox');
const textarea = document.querySelector('#t-final')
const langs = document.querySelector('#langs');
const translation = document.querySelector('#translation');

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

langs.addEventListener('change', function(e){
  setTimeout(() => {
    recognition.start();
  }, 50);
   recognition.lang = e.target.value;
})

let p = document.createElement('p');

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("")

  p.innerText = text;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
  }
  textbox.innerHTML = texts.innerHTML
});

// document.querySelector("#start").onclick = () => {
//   recognition.start();
// document.querySelector("#status").innerHTML =`Voice Recognition is on. Please speak up.`
// };

recognition.addEventListener("end", () => {
  recognition.start();

});

  // document.querySelector("#stop").onclick = () => {
  //   if(recognition.start()){
  //         speechRecognition.stop();
  //   document.querySelector("#status").innerHTML =`Press the Start Button`
  //   }
  // };
recognition.start();


document.querySelector("#clear").onclick = () => {
  location.reload()
};

document.querySelector('.fa-keyboard').addEventListener('click', function(e) {
  if(textarea.style.display === "none"){
    textarea.style.display = "block";
    textarea.innerHTML = `<textarea id="textarea" cols="30" rows="10" class="form-control bg-dark text-light" style="border: 1px solid gray; border-radius: 8px; font-size: 25px; position: relative; bottom: 50px;" placeholder="Please type in here"></textarea>`
    document.querySelector('#texting').style.cssText = 'border: 1px solid gray; height: 200px; overflow: auto; display: flex; flex-direction: column-reverse;  background-color: rgb(1, 1, 37);'
    document.querySelector('.button').style.cssText = "position: relative; bottom: 50px"
  } else {
    textarea.style.display = "none"
    document.querySelector('.button').style.cssText = "position: relative; top: 0px";
    document.querySelector('#texting').style.cssText = 'border: 1px solid gray; height: 300px; overflow: auto; display: flex; flex-direction: column-reverse;'

  }
})  

textarea.addEventListener('input', function(e){
  textbox.innerHTML = `${e.target.value}`; 
})

  function googleTranslateElementInit() {
    if (recognition.lang != 'en'){
      new google.translate.TranslateElement({pageLanguage: `${recognition.lang.value}`}, 'google_translate_element');
    }
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
      
  }
    

document.querySelector('#toTranslate').addEventListener('click', function(e){

  if(translation.style.display === "none"){
    translation.style.display = "block";
  } 
})

document.querySelector('#close').addEventListener('click', function(e){
  this.parentNode.style.display = 'none';
})