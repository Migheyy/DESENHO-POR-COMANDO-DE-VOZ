x = 0;
y = 0;

screen_width = 0;
screen_height = 0;

drawApple = "";

apple = "";
speakData = "";
toNumber = 0;

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function preload() {
  apple = loadImage("apple.png");
}

function start() {
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";
  recognition.start();

}

recognition.onresult = function (event) {

  console.log(event);

  content = event.results[0][0].transcript;
  console.log(content);
  document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content;



  if (Number.isInteger(toNumber)) {
    document.getElementById("status").innerHTML = "A maçã começou a ser desenhada";
    drawApple = "set";
  } else {
    document.getElementById("status").innerHTML = "A fala não foi reconhecida";
  }

}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  canvas = createCanvas(screen_width, screen_height - 150);
  canvas.position(0, 150);
}

function draw() {
  if (drawApple == "set") {

    if (content == "um") {
      toNumber = Number(1);
    }
    if (content == "dois") {
      toNumber = Number(2);
    }
    if (content == "três") {
      toNumber = Number(3);
    }
    if (content == "quatro") {
      toNumber = Number(4);
    } 
    if (content == "cinco") {
      toNumber = Number(5);
    }
    if (content == "seis") {
      toNumber = Number(6);
    }
    if (content == "sete") {
      toNumber = Number(7);
    }
    if (content == "seis") {
      toNumber = Number(6);
    }
    if (content == "oito") {
      toNumber = Number(8);
    }
    if (content == "nove") {
      toNumber = Number(9);
    }
    if (content == "dez") {
      toNumber = Number(10);
    }


    for (var i = 1; i <= toNumber; i++) {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }

    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
    speakData = toNumber + "maçãs desenhadas";
    speak();
  }
}

function speak() {
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speakData);

  synth.speak(utterThis);

  speakData = "";
}