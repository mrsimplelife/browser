"use strict";

const IMAGE_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector(".game__start");
const timerIndicator = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");

const popUp = document.querySelector(".pop-up");
const popUpText = document.querySelector(".pop-up__message");
const popUpRefresh = document.querySelector(".pop-up__refresh");

const carrotSound = new Audio("./sound/carrot_pull.mp3");
const alertSound = new Audio("./sound/alert.wav");
const bgSound = new Audio("./sound/bg.mp3");
const bugSound = new Audio("./sound/bug_pull.mp3");
const winSound = new Audio("./sound/game_win.mp3");

let score = 0;
let timer = undefined;
let started = false;

gameBtn.addEventListener("click", () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
});
field.addEventListener("click", (event) => {
  if (!started) {
    return;
  }
  const target = event.target;
  if (target.matches(".carrot")) {
    target.remove();
    score++;
    playSound(carrotSound);
    updateScoreBoard();
    if (score === CARROT_COUNT) {
      finishGame(true);
    }
  } else if (target.matches(".bug")) {
    finishGame(false);
  }
});
popUpRefresh.addEventListener("click", () => {
  startGame();
  hidePopUp();
});

function stopGame() {
  started = false;
  stopGameTimer();
  hideGameButton();
  showPopUpWithText("REPLAY❓");
  playSound(alertSound);
  stopSound(bgSound);
}
function startGame() {
  started = true;
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
  playSound(bgSound);
}
//
function stopGameTimer() {
  clearInterval(timer);
}

function hideGameButton() {
  gameBtn.style.visibility = "hidden";
}

function showPopUpWithText(text) {
  popUpText.innerText = text;
  popUp.classList.remove("pop-up--hide");
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}
//
function initGame() {
  score = 0;
  field.innerHTML = "";
  gameScore.innerText = CARROT_COUNT;
  addItem("carrot", CARROT_COUNT, "img/carrot.png");
  addItem("bug", BUG_COUNT, "img/bug.png");
}
function showStopButton() {
  const icon = gameBtn.querySelector(".fas");
  icon.classList.add("fa-stop");
  icon.classList.remove("fa-play");
  gameBtn.style.visibility = "visible";
}
function showTimerAndScore() {
  timerIndicator.style.visibility = "visible";
  gameScore.style.visibility = "visible";
}
function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval(timer);
      finishGame(score === CARROT_COUNT);
      return;
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
}
///
function addItem(className, count, imgPath) {
  const left = 0;
  const right = fieldRect.width - IMAGE_SIZE;
  const top = 0;
  const bottom = fieldRect.height - IMAGE_SIZE;
  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.setAttribute("draggable", false);
    const x = randomNumber(left, right);
    const y = randomNumber(top, bottom);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function updateTimerText(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  timerIndicator.innerHTML = `${minutes}:${seconds}`;
}
function finishGame(win) {
  started = false;
  hideGameButton();
  if (win) {
    playSound(winSound);
  } else {
    playSound(bugSound);
  }
  stopGameTimer();
  stopSound(bgSound);
  showPopUpWithText(win ? "YOU WON 🎉" : "YOU LOST 💩");
}

function hidePopUp() {
  popUp.classList.add("pop-up--hide");
}

function updateScoreBoard() {
  gameScore.innerText = CARROT_COUNT - score;
}
