// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

//  Named functions that change the color of the keys below

const keyPlay = function (event) {
  event.target.style.backgroundColor = '#6df0c2';
  
}

const keyReturn = function (event) {
  event.target.style.backgroundColor = '';
}

// A named function with event handler properties for the backgroud color changes action

const eventHandlerFunction = function (note) {
note.onmousedown = function (note) {
  keyPlay(note);
}
note.onmouseup = function (note) {
  keyReturn(note);
}
}

// A loop that runs the array elements through the function

notes.forEach(eventHandlerFunction); 

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// An anonymous event handler property and function for the first progress button

nextOne.onclick = function () {
  
  nextOne.hidden = true;
  nextTwo.hidden = false; 
  
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = "C";

}

// An anonymous event handler property and function for the second progress button

nextTwo.onclick = function () {
  
  nextTwo.hidden = true;
  nextThree.hidden = false;

  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI';
  lastLyric.style.display = 'inline-block';

  document.getElementById('letter-note-three').innerHTML = 'G'
  document.getElementById('letter-note-four').innerHTML = 'E'
  document.getElementById('letter-note-five').innerHTML = 'C'
  document.getElementById('letter-note-six').innerHTML = 'B'
}

// An anonymous event handler property and function for the third progress button
nextThree.onclick = function () {
  nextThree.hidden = true;
  startOver.hidden = false;

  document.getElementById('word-one').innerHTML = 'HAP-'
  document.getElementById('word-two').innerHTML = 'PY'
  document.getElementById('word-three').innerHTML = 'BIRTH'
  document.getElementById('word-four').innerHTML = 'DAY'
  document.getElementById('word-five').innerHTML = 'TO'
  document.getElementById('word-six').innerHTML = 'YOU!'

  document.getElementById('letter-note-one').innerHTML = 'F'
  document.getElementById('letter-note-two').innerHTML = 'F'
  document.getElementById('letter-note-three').innerHTML = 'E'
  document.getElementById('letter-note-four').innerHTML = 'C'
  document.getElementById('letter-note-five').innerHTML = 'D'
  document.getElementById('letter-note-six').innerHTML = 'C'

  lastLyric.style.display = 'none';



}

// Event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}

// Adding audio to each key - I still need to find a way to loop the audios in the corresponding events

const cKey = document.getElementById('c-key');
const playC = document.getElementById('c-key-audio'); 
cKey.onclick = playCAudio;
function playCAudio() {
playC.play();
}

const cSharpKey = document.getElementById('c-sharp-key');
const playCSharp = document.getElementById('c-sharp-key-audio'); 
cSharpKey.onclick = playCsharpAudio;
function playCsharpAudio() {
playCSharp.play();
}

const dKey = document.getElementById('d-key');
const playD = document.getElementById('d-key-audio'); 
dKey.onclick = playDAudio;
function playDAudio() {
playD.play();
}

const dSharpKey = document.getElementById('d-sharp-key');
const playDSharp = document.getElementById('d-sharp-key-audio'); 
dSharpKey.onclick = playDSharpAudio;
function playDSharpAudio() {
playDSharp.play();
}

const eKey = document.getElementById('e-key');
const playE = document.getElementById('e-key-audio'); 
eKey.onclick = playEAudio;
function playEAudio() {
playE.play();
}

const fKey = document.getElementById('f-key');
const playF = document.getElementById('f-key-audio'); 
fKey.onclick = playFAudio;
function playFAudio() {
playF.play();
}

const fSharpKey = document.getElementById('f-sharp-key');
const playFSharp = document.getElementById('f-sharp-key-audio'); 
fSharpKey.onclick = playFSharpAudio;
function playFSharpAudio() {
playFSharp.play();
}

const gKey = document.getElementById('g-key');
const playG = document.getElementById('g-key-audio'); 
gKey.onclick = playGAudio;
function playGAudio() {
playG.play();
}

const gSharpKey = document.getElementById('g-sharp-key');
const playGSharp = document.getElementById('g-sharp-key-audio'); 
gSharpKey.onclick = playGSharpAudio;
function playGSharpAudio() {
playGSharp.play();
}

const aKey = document.getElementById('a-key');
const playA = document.getElementById('a-key-audio'); 
aKey.onclick = playAAudio;
function playAAudio() {
playA.play();
}

const aSharpKey = document.getElementById('a-sharp-key');
const playASharp = document.getElementById('a-sharp-key-audio'); 
aSharpKey.onclick = playASharpAudio;
function playASharpAudio() {
playASharp.play();
}

const highCKey = document.getElementById('high-c-key');
const playHighC = document.getElementById('high-c-key-audio'); 
highCKey.onclick = playHighCAudio;
function playHighCAudio() {
playHighC.play();
}

// Plays the intro song when the page loads
