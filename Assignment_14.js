// ChangeColors start
let red = document.getElementById("Red");
let green = document.getElementById("Green");
let blue = document.getElementById("Blue");
let changedColor = document.querySelector("#changedColor");
let redspan = document.getElementById("RedSpan");
let greenspan = document.getElementById("GreenSpan");
let bluespan = document.getElementById("BlueSpan");
let palette = document.getElementById("palette");
let paletteSpan = document.getElementById("paletteSpan");
let reset = document.getElementById("reset");
function updateText() {
  let redValue = red.value;
  let greenValue = green.value;
  let blueValue = blue.value;
  const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;
  const hexColor = `#${Number(redValue).toString(16).padStart(2, "0")}${Number(
    greenValue
  )
    .toString(16)
    .padStart(2, "0")}${Number(blueValue)
    .toString(16)
    .padStart(2, "0")}`.toUpperCase();
  changedColor.style.color = rgbColor;
  redspan.innerText = redValue;
  greenspan.innerText = greenValue;
  bluespan.innerText = blueValue;
  palette.style.background = rgbColor;
  paletteSpan.innerText = hexColor;
}
function resetColor() {
  red.value = 0;
  green.value = 0;
  blue.value = 100;
  updateText();
}
red.addEventListener("input", updateText);
green.addEventListener("input", updateText);
blue.addEventListener("input", updateText);
reset.addEventListener("click", resetColor);

// ChangeColors end

// AudionControl start
let audio = document.getElementsByTagName("audio")[0];
let currentTime = document.getElementById("currentTime");
let playBtn = document.getElementById("play");
let stopBtn = document.getElementById("stop");
let muteBtn = document.getElementById("mute");
let volume = document.getElementById("volume");
let volumeSpan = document.getElementById("volumeSpan");
let speed = document.getElementById("speed");
let speedSpan = document.getElementById("speedSpan");
let durationDisplay = document.getElementById("duration");
let currentTimeDisplay = document.getElementById("currentTime");
let progressBar = document.getElementById("progressBar");
let rewindBtn = document.getElementById("rewindBtn");
let backBtn = document.getElementById("backBtn");
let forwardBtn = document.getElementById("forwardBtn");
let fastForwardBtn = document.getElementById("fastForwardBtn");

// to update currentTimeDisplay & progressBar
audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;

  // Update time displays
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
  if (audio.duration) {
    durationDisplay.textContent = formatTime(audio.duration);
  }
});

// Play/pause toggle
playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = "Pause";
  } else {
    audio.pause();
    playBtn.innerHTML = "Play";
  }
});
// Stop button
stopBtn.addEventListener("click", function () {
  audio.pause();
  // audio.currentTime = 0;
  playBtn.innerHTML = "Play";
});
// Rewind to start
rewindBtn.addEventListener("click", () => {
  audio.currentTime = 0;
});

// Skip back 15 seconds
backBtn.addEventListener("click", () => {
  audio.currentTime = audio.currentTime - 15;
});

// Skip forward 15 seconds
forwardBtn.addEventListener("click", () => {
  audio.currentTime = audio.currentTime + 15;
});
// Fast forward to end
fastForwardBtn.addEventListener("click", () => {
  audio.currentTime = audio.duration;
});

// Mute button
muteBtn.addEventListener("click", function () {
  if (audio.muted) {
    audio.muted = false;
    muteBtn.innerHTML = "Mute";
  } else {
    audio.muted = true;
    muteBtn.innerHTML = "Unmute";
  }
});

// volume range
volume.addEventListener("input", function () {
  audio.volume = volume.value;
  volumeSpan.innerHTML = `Volume : ${volume.value * 100}%`;
});

// speed range
speed.addEventListener("input", function () {
  audio.playbackRate = speed.value;
  speedSpan.innerHTML = `${speed.value}x`;
});

// Format time as M:SS
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

// AudionControl end
