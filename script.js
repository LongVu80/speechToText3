const texts = document.querySelector("#final");
const textbox = document.querySelector('#textbox');
const textarea = document.querySelector('#t-final')
const langs = document.querySelector('#langs');
const translation = document.querySelector('#translation');

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US'

var myMap = new Map(),
  select = document.getElementById('langs');
  // select.id('langs')
myMap.set("English", "en-US");
myMap.set("Vietnamese", "vi-VN");
myMap.set("Japanese", "ja-JP");
myMap.set("Korean (S-K)", "ko-KR");
myMap.set("Burmese", "my-MM");
myMap.set("Cantonese (HK)", "yue-Hant-HK");
myMap.set("Mandarin (CN)", "zh");
myMap.set("Mandarin (TW)", "zh-TW");
myMap.set("Czech", "cs-CZ");
myMap.set("Danish", "da-DK");
myMap.set("Dutch", "nl-BE");
myMap.set("Filipino", "fil-PH");
myMap.set("Finnish", "fi-FI");
myMap.set("French", "fr-FR");
myMap.set("Galician (Spain)", "gl-ES");
myMap.set("Georgian", "ka-GE");
myMap.set("German", "de-DE");
myMap.set("Greek", "el-GR");
myMap.set("Gujarati (India)", "gu-IN");
myMap.set("Hindi (India", "hi-IN");
myMap.set("Hebrew (Israel)", "iw-IL");
myMap.set("Hungarian", "hu-HU");
myMap.set("Icelandic", "is-IS");
myMap.set("Indonesian", "id-ID");
myMap.set("Italian", "it-IT");
myMap.set("Kazakh (Kazakhstan)", "kk-KZ");
myMap.set("Khmer(Cambodia)", "km-KH");
myMap.set("Lao", "lo-LA");
myMap.set("Latvian", "lv-LV");
myMap.set("Mongolian", "mn-MN");
myMap.set("Nepali", "ne-NP");
myMap.set("Norwegian", "no-NO");
myMap.set("Persian(Iran)", "fa-IR");
myMap.set("Polish", "pl-PL");
myMap.set("Portuguese (Brazil)", "pt-BR");
myMap.set("Portuguese (Portugal)", "pt-PT");
myMap.set("Romanian", "ro_RO");
myMap.set("Russian", "ru-RU");
myMap.set("Serbian", "sr-RS");
myMap.set("Sinhala (Sri-Lanka)", "si-LK");
myMap.set("Spanish", "es-US");
myMap.set("Swedish", "sv-SE");
myMap.set("Tamil (India)", "ta-IN");
myMap.set("Thai", "th-TH");
myMap.set("Turkish", "tr-TR");
myMap.set("Ukrainian", "uk-UA");
myMap.set("Urdu(India)", "ur-IN");
myMap.set("Uzbek (Uzbekistan)", "uz-UZ");
myMap.set("Zulu", "zu-ZA");

let str = '';
myMap.forEach((key, val) => {
  str += `<option value='${key}'>${val}</option>`

});
select.innerHTML = str;

langs.addEventListener('change', function(e){
  // setTimeout(() => {
  //   recognition.start();
  // }, 50);
   recognition.lang = e.target.value;
   var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Please speak up in here.";
  } else {
    document.getElementById("countdown").innerHTML = "Waiting to switch language in: " + timeleft + " . Please be patience. Thank you";
  }
  timeleft -= 1;
}, 1000);
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