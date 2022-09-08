const texts = document.querySelector("#final");
const textbox = document.querySelector('#textbox');
const textarea = document.querySelector('#t-final')
const langs = document.querySelector('#langs');
const translation = document.querySelector('#translation');
const instruction = document.getElementsByClassName('instruction')

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US'

var myMap = new Map([
  ["English", "en-US"],
  ["Vietnamese", "vi-VN"],
  ["Japanese", "ja-JP"],
  ["Korean (S-K)", "ko-KR"],
  ["Burmese", "my-MM"],
  ["Cantonese (HK)", "yue-Hant-HK"],
  ["Mandarin (CN)", "zh"],
  ["Mandarin (TW)", "zh-TW"],
  ["Czech", "cs-CZ"],
  ["Danish", "da-DK"],
  ["Dutch", "nl-BE"],
  ["Filipino", "fil-PH"],
  ["Finnish", "fi-FI"],
  ["French", "fr-FR"],
  ["Galician (Spain)", "gl-ES"],
  ["Georgian", "ka-GE"],
  ["German", "de-DE"],
  ["Greek", "el-GR"],
  ["Gujarati (India)", "gu-IN"],
  ["Hindi (India", "hi-IN"],
  ["Hebrew (Israel)", "iw-IL"],
  ["Hungarian", "hu-HU"],
  ["Icelandic", "is-IS"],
  ["Indonesian", "id-ID"],
  ["Italian", "it-IT"],
  ["Kazakh (Kazakhstan)", "kk-KZ"],
  ["Khmer(Cambodia)", "km-KH"],
  ["Lao", "lo-LA"],
  ["Latvian", "lv-LV"],
  ["Mongolian", "mn-MN"],
  ["Nepali", "ne-NP"],
  ["Norwegian", "no-NO"],
  ["Persian(Iran)", "fa-IR"],
  ["Polish", "pl-PL"],
  ["Portuguese (Brazil)", "pt-BR"],
  ["Portuguese (Portugal)", "pt-PT"],
  ["Romanian", "ro_RO"],
  ["Russian", "ru-RU"],
  ["Serbian", "sr-RS"],
  ["Sinhala (Sri-Lanka)", "si-LK"],
  ["Spanish", "es-US"],
  ["Swedish", "sv-SE"],
  ["Tamil (India)", "ta-IN"],
  ["Thai", "th-TH"],
  ["Turkish", "tr-TR"],
  ["Ukrainian", "uk-UA"],
  ["Urdu(India)", "ur-IN"],
  ["Uzbek (Uzbekistan)", "uz-UZ"],
  ["Zulu", "zu-ZA"],
]),
  select = document.getElementById('langs');


let str = `<option value="" disabled selected class="disable">-- Select Language --</option>`;
myMap.forEach((key, val) => {
  str += `<option value='${key}'>${val}</option>`

});
select.innerHTML = str;

langs.addEventListener('change', function(e){
      recognition.lang = e.target.value;
      
// })


   var timeleft = 4;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = ``;
    
  } else{
    document.getElementById("countdown").innerHTML = `Waiting to switch language in: <span class="text-warning"><strong>${timeleft}</strong></span>.`
   }
  timeleft -= 1;
}, 1000);

})

document.querySelector('.instruction').addEventListener('click', function(e) {
  const construction = document.querySelector('#instruction');
  if(construction.style.display === "none") {
    construction.style.display = "block";
    document.querySelector('.instruction').innerHTML = "Close"
  } else {
    construction.style.display = "none";
    document.querySelector('.instruction').innerHTML = "Click Me"
  }
  
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
  textbox.innerHTML = texts.innerHTML;
});

document.querySelector("#start").addEventListener('click', function() {
  recognition.start();
document.querySelector("#status").innerHTML =`Voice Recognition is on. Please speak up to my phone.`
 if(instruction)
document.getElementsByID('instruction').parentNode.style.display = 'none';
})

recognition.addEventListener("end", () => {
  recognition.start();

});

  // document.querySelector("#stop").onclick = () => {
  //   if(recognition.start()){
  //         speechRecognition.stop();
  //   document.querySelector("#status").innerHTML =`Press the Start Button`
  //   }
  // };
// recognition.start();


document.querySelector("#clear").onclick = () => {
  location.reload()
};

document.querySelector('.fa-keyboard').addEventListener('click', function(e) {
  if(textarea.style.display === "none"){
    textarea.style.display = "block";
    textarea.innerHTML = `<textarea id="textarea" cols="30" rows="10" class="form-control bg-dark text-light" style="border: 1px solid gray; border-radius: 8px; font-size: 25px; position: relative; bottom: 50px; margin-bottom: -10px;" placeholder="Please type in here"></textarea>`
    document.querySelector('#texting').style.cssText = 'border: 1px solid gray; height: 200px; overflow: auto; display: flex; flex-direction: column-reverse;  background-color: rgb(1, 1, 37);'
    document.querySelector('.button').style.cssText = "position: relative; bottom: 35px"
  } else {
    textarea.style.display = "none"
    document.querySelector('.button').style.cssText = "position: relative; bottom: 15px";
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

document.querySelector('#google_translate_element').addEventListener('click', function(e){

  if(translation.style.display === "none"){
    translation.style.display = "block";
  } 
})

document.querySelector('#close').addEventListener('click', function(e){
  this.parentNode.style.display = 'none';
})