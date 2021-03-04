const snare = document.querySelector("#snare");
const snareAudio = document.querySelector("#snare-audio");
snare.addEventListener("click", () => {
  snareAudio.currentTime = 0;
  snareAudio.play();
});

const hiHatClose = document.querySelector("#hi-hat-close");
const hiHatCloseAudio = document.querySelector("#hihat-close-audio");
hiHatClose.addEventListener("click", () => {
  hiHatCloseAudio.currentTime = 0;
  hiHatCloseAudio.play();
});

const hiHatOpen = document.querySelector("#hi-hat-open");
const hiHatOpenAudio = document.querySelector("#hihat-open-audio");
hiHatOpen.addEventListener("click", () => {
  hiHatOpenAudio.currentTime = 0;
  hiHatOpenAudio.play();
});

const kick = document.querySelector("#kick");
const kickAudio = document.querySelector("#kick-audio");
kick.addEventListener("click", () => {
  kickAudio.currentTime = 0;
  kickAudio.play();
});

const clap = document.querySelector("#clap");
const clapAudio = document.querySelector("#clap-audio");
clap.addEventListener("click", () => {
  clapAudio.currentTime = 0;
  clapAudio.play();
});

const tom1 = document.querySelector("#tom-1");
const tom1Audio = document.querySelector("#tom1-audio");
tom1.addEventListener("click", () => {
  tom1Audio.currentTime = 0;
  tom1Audio.play();
});

const tom2 = document.querySelector("#tom-2");
const tom2Audio = document.querySelector("#tom2-audio");
tom2.addEventListener("click", () => {
  tom2Audio.currentTime = 0;
  tom2Audio.play();
});

const crash = document.querySelector("#crash");
const crashAudio = document.querySelector("#crash-audio");
crash.addEventListener("click", () => {
  crashAudio.currentTime = 0;
  crashAudio.play();
});

const ride = document.querySelector("#ride");
const rideAudio = document.querySelector("#ride-audio");
ride.addEventListener("click", () => {
  rideAudio.currentTime = 0;
  rideAudio.play();
});
