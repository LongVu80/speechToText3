let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let speechRecognition = new SpeechRecognition();
  let final_transcript = "";

  // speechRecognition.continuous = false;
  speechRecognition.interimResults = true;

  speechRecognition.onstart = () => {
    document.querySelector("#status").style.display = "block";
  };
  // speechRecognition.onerror = () => {
  //   document.querySelector("#status").innerHTML = `Speech Recognition Error`;
    
  // };
  speechRecognition.onend = () => {
    speechRecognition.start()
  };


  speechRecognition.onresult = (event) => {
    // let interim_transcript = "";
    const text = Array.from(event.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("")
    document.querySelector("#final").innerText = text;
    // for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[0].isFinal) {
    //     text += event.results[i][0].transcript;
    //   } 
      // else {
      //   interim_transcript += event.results[i][0].transcript;
      // }
    // }
    document.querySelector("#final").innerText = text;
      }
    // document.querySelector("#interim").innerHTML = interim_transcript;
  };

  document.querySelector("#start").onclick = () => {
    setTimeout(() => {
      speechRecognition.start();
    }, 50);
    // this.openFullscreen()
    document.querySelector("#status").innerHTML =`Voice Recognition is on. Please Speak in Here`
  };

  // document.querySelector("#stop").onclick = () => {
  //   speechRecognition.stop();
  //   document.querySelector("#status").innerHTML =`Press the Start Button`
  //   // this.closeFullscreen()
  // };

  document.querySelector("#clear").onclick = () => {
    location.reload()
  };

  window.setInterval(function() {
  var final = document.querySelector("#final");
  final.scrollTop = final.scrollHeight;
  }, 50)
