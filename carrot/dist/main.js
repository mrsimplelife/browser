"use strict";
var CARROT_SIZE = 80;
var CARROT_COUNT = 20;
var BUG_COUNT = 20;
var GAME_DURATION_SEC = 20;
var field = document.querySelector(".game__field");
var fieldRect = field.getBoundingClientRect();
var gameBtn = document.querySelector(".game__start");
var timerIndicator = document.querySelector(".game__timer");
var gameScore = document.querySelector(".game__score");
var popUp = document.querySelector(".pop-up");
var popUpText = document.querySelector(".pop-up__message");
var popUpRefresh = document.querySelector(".pop-up__refresh");
var carrotSound = new Audio("./sound/carrot_pull.mp3");
var alertSound = new Audio("./sound/alert.wav");
var bgSound = new Audio("./sound/bg.mp3");
var bugSound = new Audio("./sound/bug_pull.mp3");
var winSound = new Audio("./sound/game_win.mp3");
var started = false;
var score = 0;
var timer;
field.addEventListener("click", onFieldClick);
gameBtn.addEventListener("click", function () {
    if (started) {
        stopGame();
    }
    else {
        startGame();
    }
});
popUpRefresh.addEventListener("click", function () {
    startGame();
    hidePopUp();
});
function startGame() {
    started = true;
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
    playSound(bgSound);
}
function stopGame() {
    started = false;
    stopGameTimer();
    hideGameButton();
    showPopUpWithText("REPLAY❓");
    playSound(alertSound);
    stopSound(bgSound);
}
function finishGame(win) {
    started = false;
    hideGameButton();
    if (win) {
        playSound(winSound);
    }
    else {
        playSound(bugSound);
    }
    stopGameTimer();
    stopSound(bgSound);
    showPopUpWithText(win ? "YOU WON 🎉" : "YOU LOST 💩");
}
function showStopButton() {
    var icon = gameBtn.querySelector(".fas");
    icon.classList.add("fa-stop");
    icon.classList.remove("fa-play");
    gameBtn.style.visibility = "visible";
}
function hideGameButton() {
    gameBtn.style.visibility = "hidden";
}
function showTimerAndScore() {
    timerIndicator.style.visibility = "visible";
    gameScore.style.visibility = "visible";
}
function startGameTimer() {
    var remainingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimeSec);
    timer = setInterval(function () {
        if (remainingTimeSec <= 0) {
            clearInterval(timer);
            finishGame(score === CARROT_COUNT);
            return;
        }
        updateTimerText(--remainingTimeSec);
    }, 1000);
}
function stopGameTimer() {
    clearInterval(timer);
}
function updateTimerText(time) {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    timerIndicator.innerHTML = minutes + ":" + seconds;
}
function showPopUpWithText(text) {
    popUpText.innerText = text;
    popUp.classList.remove("pop-up--hide");
}
function hidePopUp() {
    popUp.classList.add("pop-up--hide");
}
function initGame() {
    score = 0;
    field.innerHTML = "";
    gameScore.innerText = "" + CARROT_COUNT;
    addItem("carrot", CARROT_COUNT, "img/carrot.png");
    addItem("bug", BUG_COUNT, "img/bug.png");
}
function onFieldClick(event) {
    if (!started) {
        return;
    }
    var target = event.target;
    if (target.matches(".carrot")) {
        target.remove();
        score++;
        playSound(carrotSound);
        updateScoreBoard();
        if (score === CARROT_COUNT) {
            finishGame(true);
        }
    }
    else if (target.matches(".bug")) {
        finishGame(false);
    }
}
function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}
function stopSound(sound) {
    sound.pause();
}
function updateScoreBoard() {
    gameScore.innerText = "" + (CARROT_COUNT - score);
}
function addItem(className, count, imgPath) {
    var x1 = 0;
    var y1 = 0;
    var x2 = fieldRect.width - CARROT_SIZE;
    var y2 = fieldRect.height - CARROT_SIZE;
    for (var i = 0; i < count; i++) {
        var item = document.createElement("img");
        item.setAttribute("class", className);
        item.setAttribute("src", imgPath);
        item.style.position = "absolute";
        var x = randomNumber(x1, x2);
        var y = randomNumber(y1, y2);
        item.style.left = x + "px";
        item.style.top = y + "px";
        field.appendChild(item);
    }
}
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
//# sourceMappingURL=main.js.map