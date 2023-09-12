var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start_button");


function startGame() {
    isWin = false;
    timerCount = 10;
    startButton.disabled = true;
    renderBlanks()
    startTimer()
  }

  function startGame() {
    isWin = false;
    timerCount = 100;
    startButton.disabled = true;
    renderBlanks()
    startTimer()
  }

  startButton.addEventListener("click", startGame);