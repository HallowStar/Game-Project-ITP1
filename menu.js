function drawDarkBackground() {
  //DARK BACKGROUND
  push();
  fill(0, 0, 0, 160);
  rect(0, 0, width, height);
  pop();

  push();
  fill(255);
  textSize(40);
  text("Choose Difficulty in Settings", 50, 70);
  pop();
}

//PLAY MENU SCREEN

function playMenuButton() {
  //PLAY & RESUME MENU SETUP
  play_menu = {
    x: width / 2 - 150,
    y: height / 2 - 100,
    color: 255,
  };

  settings_menu = {
    x: width / 2 - 150,
    y: height / 2 + 50,
    color: 0,
  };

  //menu
  restart_menu = {
    x: width / 2 - 150,
    y: height / 2 - 40,
    color: 255,
  };
}

function resumeMenuButton() {
  resume_menu = {
    x: width / 2 - 150,
    y: height / 2 - 200,
    color: 255,
  };

  play_again = {
    x: width / 2 - 150,
    y: height / 2 - 200,
    color: 255,
  };

  settings_pause = {
    x: width / 2 - 150,
    y: height / 2 + 50,
    color: 0,
  };
}

function drawPlayMenu() {
  //DEFAULT PAUSE SCREEN
  //I develop a new feature to my game that is not implemented from Coursera which is a play menu at the start of the game which I made using the codes and methods that I learned from Coursera. I made a play game menu and settings menu (which is not done yet).

  push();
  stroke(play_menu.color);
  fill(play_menu.color - 255);
  rect(play_menu.x, play_menu.y, 300, 100);
  fill(play_menu.color);
  textSize(20);
  text("Play Game", play_menu.x + 100, play_menu.y + 57);
  pop();

  //settings
  push();
  stroke(settings_menu.color + 255);
  fill(settings_menu.color);
  rect(settings_menu.x, settings_menu.y, 300, 100);
  fill(settings_menu.color + 255);
  textSize(20);
  textAlign(CENTER);
  text("Settings", width / 2 - 3, height / 2 + 105);
  pop();

  //tutorial
  push();
  stroke(settings_menu.color + 255);
  fill(settings_menu.color);
  rect(settings_menu.x, settings_menu.y + 150, 300, 100);
  fill(settings_menu.color + 255);
  textSize(20);
  textAlign(CENTER);
  text("Tutorial", width / 2 - 3, height / 2 + 255);
  pop();
}

function drawPlayMenuMouseHover() {
  //Use the hover feature learned from Coursera and implemented where if the mouse is hovering the button the it will turn white. For this instance, it could be for the play meny or the settings menu

  if (
    mouseX >= play_menu.x &&
    mouseX <= play_menu.x + 300 &&
    mouseY >= height / 2 - 100 &&
    mouseY <= play_menu.y + 100
  ) {
    //play menu (white)
    push();
    stroke(play_menu.color - 255);
    fill(play_menu.color);
    rect(play_menu.x, play_menu.y, 300, 100);
    fill(play_menu.color - 255);
    textSize(20);
    text("Play Game", width / 2 - 50, height / 2 - 43);
    pop();
  }
}

function drawSettingsMenuMouseHover() {
  //settings black
  if (
    mouseX >= settings_menu.x &&
    mouseX <= settings_menu.x + 300 &&
    mouseY >= settings_menu.y &&
    mouseY <= settings_menu.y + 100
  ) {
    push();
    stroke(settings_menu.color);
    fill(settings_menu.color + 255);
    rect(settings_menu.x, settings_menu.y, 300, 100);
    fill(settings_menu.color);
    textSize(20);
    textAlign(CENTER);
    text("Settings", width / 2 - 3, height / 2 + 105);
    pop();
  }
}

function tutorialButtonHover() {
  if (
    mouseX >= settings_menu.x &&
    mouseX <= settings_menu.x + 300 &&
    mouseY >= settings_menu.y + 150 &&
    mouseY <= settings_menu.y + 250
  ) {
    //tutorial
    push();
    stroke(settings_menu.color);
    fill(settings_menu.color + 255);
    rect(settings_menu.x, settings_menu.y + 150, 300, 100);
    fill(settings_menu.color);
    textSize(20);
    textAlign(CENTER);
    text("Tutorial", width / 2 - 3, height / 2 + 255);
    pop();
  }
}

// ------- END OF PLAY MENU SCREEN

//GAME OVER MENU SCREEN

function restartMenu() {
  // DARK BACKGROUND
  background(0, 0, 0, 200);

  //BACKGROUND
  push();
  fill(255, 0, 0, 150);
  rect(0, 210, width, 180);
  pop();

  //GAME OVER TEXT
  push();
  textSize(80);
  textAlign(CENTER);
  push();
  stroke(0);
  strokeWeight(3);
  text("GAME OVER", width / 2, height / 2 - 100);
  pop();
  pop();

  //SOUND
  if (gameOver) {
    gameOverSound.play();
    gameOver = false; // Prevents replay
  }

  //RESTART BUTTON (DARK)
  push();
  stroke(restart_menu.color);
  fill(restart_menu.color - 255);
  rect(restart_menu.x, restart_menu.y + 200, 300, 100);
  fill(restart_menu.color);
  textSize(20);
  text("Restart Game", restart_menu.x + 85, restart_menu.y + 255);
  textSize(30);
  text("Score : " + scoreBoard, width / 2 - 60, height / 2 + 40);
  pop();

  //RESTART BUTTON (WHITE)
  if (
    mouseX >= restart_menu.x &&
    mouseX <= restart_menu.x + 300 &&
    mouseY >= restart_menu.y + 200 &&
    mouseY <= restart_menu.y + 300
  ) {
    push();
    stroke(restart_menu.color - 255);
    fill(restart_menu.color);
    rect(restart_menu.x, restart_menu.y + 200, 300, 100);
    fill(restart_menu.color - 255);
    textSize(20);
    text("Restart Game", restart_menu.x + 85, restart_menu.y + 255);
    pop();
  }
}

//NEXT LEVEL MENU

function nextLevel() {
  // DARK BACKGROUND
  background(0, 0, 0, 200);

  //BACKGROUND
  push();
  fill(255, 255, 255, 150);
  rect(0, 210, width, 180);
  pop();

  //GAME OVER TEXT
  push();
  textSize(80);
  textAlign(CENTER);
  push();
  stroke(0);
  strokeWeight(3);
  text("LEVEL COMPLETED", width / 2, height / 2 - 100);
  pop();
  pop();

  //RESTART BUTTON (DARK)
  push();
  stroke(restart_menu.color);
  fill(restart_menu.color - 255);
  rect(restart_menu.x, restart_menu.y + 50, 300, 100);
  fill(restart_menu.color);
  textSize(20);
  text("Next Level", restart_menu.x + 100, restart_menu.y + 105);
  pop();

  //RESTART BUTTON (WHITE)
  if (
    mouseX >= restart_menu.x &&
    mouseX <= restart_menu.x + 300 &&
    mouseY >= restart_menu.y + 50 &&
    mouseY <= restart_menu.y + 150
  ) {
    push();
    stroke(restart_menu.color - 255);
    fill(restart_menu.color);
    rect(restart_menu.x, restart_menu.y + 50, 300, 100);
    fill(restart_menu.color - 255);
    textSize(20);
    text("Next Level", restart_menu.x + 100, restart_menu.y + 105);
    pop();
  }
}

// GAME WIN MENU

function gameWin() {
  // DARK BACKGROUND
  background(0, 0, 0, 200);

  //GAME OVER TEXT
  push();

  push();
  fill(154, 205, 50, 150);
  rect(0, 200, width, 300);
  pop();

  textSize(80);
  textAlign(CENTER);
  stroke(0);
  strokeWeight(3);
  text("CONGRATULATIONS", width / 2, height / 2 - 100);
  text("YOU WIN", width / 2, height / 2 + 10);

  textSize(50);
  text("Score : " + scoreBoard, width / 2, height / 2 + 150);
  pop();

  isJump = false; //cannot jump, fall, and move left or right
  isRight = false;
  isLeft = false;
  isFall = false;
}

//PAUSE MENU

function pauseMenuDefault() {
  //DARK BACKGROUND
  push();
  fill(0, 0, 0, 160);
  rect(0, 0, width, height);
  pop();

  //Same like the play menu, I created the resume menu where if I click "Escape", it will open up the menu. This method is taught in Coursera (the "keyPressed" method)

  //RESUME MENU (DEFAULT)
  push();
  stroke(resume_menu.color);
  fill(resume_menu.color - 255);
  rect(resume_menu.x, resume_menu.y, 300, 100);
  fill(resume_menu.color);
  textSize(20);
  text("Resume Game", resume_menu.x + 80, resume_menu.y + 57);
  pop();

  //new game
  push();
  stroke(play_again.color);
  fill(play_again.color - 255);
  rect(play_again.x, play_again.y + 125, 300, 100);
  fill(play_again.color);
  textSize(20);
  textAlign(CENTER);
  text("New Game", width / 2 - 3, height / 2 - 19);
  pop();

  //settings
  push();
  stroke(settings_menu.color + 255);
  fill(settings_menu.color);
  rect(settings_menu.x, settings_menu.y, 300, 100);
  fill(settings_menu.color + 255);
  textSize(20);
  textAlign(CENTER);
  text("Settings", width / 2 - 3, height / 2 + 105);
  pop();
}

function resumeMouseHover() {
  //RESUME menu white
  if (
    mouseX >= resume_menu.x &&
    mouseX <= resume_menu.x + 300 &&
    mouseY >= resume_menu.y &&
    mouseY <= resume_menu.y + 100
  ) {
    push();
    stroke(resume_menu.color);
    fill(resume_menu.color);
    rect(resume_menu.x, resume_menu.y, 300, 100);
    fill(resume_menu.color - 255);
    textSize(20);
    text("Resume Game", resume_menu.x + 80, resume_menu.y + 57);
    pop();
  }
}

function newGameMouseHover() {
  if (
    mouseX >= play_again.x &&
    mouseX <= play_again.x + 300 &&
    mouseY >= play_again.y + 125 &&
    mouseY <= play_again.y + 225
  ) {
    //new game white
    push();
    stroke(play_again.color);
    fill(play_again.color);
    rect(play_again.x, play_again.y + 125, 300, 100);
    fill(play_again.color - 255);
    textSize(20);
    textAlign(CENTER);
    text("New Game", width / 2 - 3, height / 2 - 19);
    pop();
  }
}

function settingsMouseHover() {
  //settings white
  if (
    mouseX >= settings_pause.x &&
    mouseX <= settings_pause.x + 300 &&
    mouseY >= settings_pause.y &&
    mouseY <= settings_pause.y + 100
  ) {
    push();
    stroke(settings_menu.color + 255);
    fill(settings_menu.color + 255);
    rect(settings_menu.x, settings_menu.y, 300, 100);
    fill(settings_menu.color);
    textSize(20);
    textAlign(CENTER);
    text("Settings", width / 2 - 3, height / 2 + 105);
    pop();
  }
}

//SETTINGS

function settingsMenu() {
  push();

  // DARK OVERLAY
  push();
  fill(0, 0, 0, 200);
  rect(0, 0, width, height);
  pop();

  //BACK MENU
  push();
  fill(0);
  stroke(255);
  rect(50, 50, 150, 70);
  fill(255);
  textSize(25);
  text("Back", 95, 95);
  pop();

  if (mouseX >= 50 && mouseX <= 200 && mouseY >= 50 && mouseY <= 120) {
    push();
    fill(255);
    stroke(0);
    rect(50, 50, 150, 70);
    fill(0);
    textSize(25);
    text("Back", 95, 95);
    pop();
  }

  // --------------- DIFFICULTY  ---------------

  // DIFFICULTY TEXT
  textFont("Times New Roman");
  push();
  textSize(30);
  fill(255);
  text("Difficulty Level", 200, 200);
  pop();

  // EASY BUTTON
  if (
    difficulty == "easy" ||
    (mouseX >= 700 && mouseX <= 800 && mouseY >= 170 && mouseY <= 220)
  ) {
    push();
    fill(255);
    rect(700, 170, 100, 50);

    fill(0);
    textSize(25);
    text("Easy", 725, 203);

    pop();
  } else {
    push();
    fill(120);
    rect(700, 170, 100, 50);
    textSize(25);
    fill(255);
    text("Easy", 725, 203);
    pop();
  }

  // MEDIUM BUTTON
  if (
    difficulty === "medium" ||
    (mouseX >= 850 && mouseX <= 985 && mouseY >= 170 && mouseY <= 220)
  ) {
    push();

    fill(255);
    rect(850, 170, 135, 50);

    fill(0);
    textSize(25);
    text("Medium", 875, 203);

    pop();
  } else {
    push();
    fill(120);
    rect(850, 170, 135, 50);

    textSize(25);
    fill(255);
    text("Medium", 875, 203);
    pop();
  }

  // HARD BUTTON
  if (
    difficulty === "hard" ||
    (mouseX >= 1040 && mouseX <= 1140 && mouseY >= 170 && mouseY <= 220)
  ) {
    push();
    fill(255);
    rect(1040, 170, 100, 50);
    textSize(25);
    fill(0);
    text("Hard", 1065, 203);
    pop();
  } else {
    push();
    fill(120);
    rect(1040, 170, 100, 50);
    textSize(25);
    fill(255);
    text("Hard", 1065, 203);
    pop();
  }

  pop();

  //CONDITION
  push();
  textFont("Times New Roman");
  textSize(30);
  fill(255);
  text("Condition", 200, 300);
  pop();

  // -------- JUMP POWER --------

  // JUMP POWER TEXT
  push();
  textFont("Times New Roman");
  textSize(30);
  fill(255);
  text("Jump Power", 200, 400);
  pop();

  //

  push();
  stroke(255);
  fill(255);
  textSize(15);
  text("1", 945, 385);
  text("2", 1000, 385);
  text("3", 1050, 385);
  pop();

  //BAR (Black)
  push();
  stroke(255);
  fill(0);
  rect(900, 395, 180, 10, 30);
  pop();

  //FIRST LINE
  if (
    (mouseX >= 900 && mouseX <= 955 && mouseY >= 395 && mouseY <= 405) ||
    police.jumpPower == -10
  ) {
    push();
    fill(255);
    rect(900, 395, 55, 10, 30);
    pop();
    // police.jumpPower = -10; //standard jump power for character
  }

  //SECOND LINE
  if (
    (mouseX >= 955 && mouseX <= 1010 && mouseY >= 395 && mouseY <= 405) ||
    police.jumpPower == -12
  ) {
    push();
    fill(255);
    rect(900, 395, 110, 10, 30);
    pop();
  }
  if (
    (mouseX >= 1010 && mouseX <= 1080 && mouseY >= 395 && mouseY <= 405) ||
    police.jumpPower == -15
  ) {
    push();
    fill(255);
    rect(900, 395, 180, 10, 30);
    pop();
  }

  // LINE
  push();
  stroke(255);
  strokeWeight(1);
  line(1200, 100, 1200, 800);
  pop();

  //CHARACTER SPEED SETTINGS

  // SPEED  TEXT
  push();
  textFont("Times New Roman");
  textSize(30);
  fill(255);
  text("Speed", 200, 500);
  pop();

  push();
  stroke(255);
  fill(255);
  textSize(15);
  text("1", 945, 485);
  text("2", 1000, 485);
  text("3", 1050, 485);
  pop();

  //BAR (Black)
  push();
  stroke(255);
  fill(0);
  rect(900, 495, 180, 10, 30);
  pop();

  //FIRST LINE
  if (
    (mouseX >= 900 && mouseX <= 955 && mouseY >= 495 && mouseY <= 505) ||
    police.speed == 5
  ) {
    push();
    fill(255);
    rect(900, 495, 55, 10, 30);
    pop();
    // police.jumpPower = -10; //standard jump power for character
  }

  //SECOND LINE
  if (
    (mouseX >= 955 && mouseX <= 1010 && mouseY >= 495 && mouseY <= 505) ||
    police.speed == 8
  ) {
    push();
    fill(255);
    rect(900, 495, 110, 10, 30);
    pop();
  }
  if (
    (mouseX >= 1010 && mouseX <= 1080 && mouseY >= 495 && mouseY <= 505) ||
    police.speed == 13
  ) {
    push();
    fill(255);
    rect(900, 495, 180, 10, 30);
    pop();
  }

  //INSTRUCTIONS
  push();
  textSize(18);
  text("Easy : Restart at the same level & Score still the same", 1240, 120);
  text("Medium : Restart from the beginning & Score not saved", 1240, 160);
  text("Hard : One Live", 1240, 200);
  text("Jump Power : Increase Jump Power of Character", 1240, 240);
  text("Speed : Increase Speed of the Character", 1240, 280);
  pop();
}

//TUTORIAL MENU

function tutorialMenu() {
  // DARK BACKGROUND
  push();
  fill(0, 0, 0, 230);
  rect(0, 0, width, height);
  pop();

  // Controls Background

  push();
  fill(105);
  stroke(255);
  textFont("Times New Roman");

  rect(50, 100, 150, 50);
  fill(255);
  textSize(20);
  text("Controls", 90, 133);
  pop();

  push();
  fill(105);
  stroke(255);
  rect(50, 150, 500, 380);
  pop();

  // CONTROLS
  push();
  fill(255);
  stroke(255);
  textSize(20);

  text("W                 :", 90, 200);
  text("Jump", 300, 200);

  text("A                  :", 90, 250);
  text("Move Left", 300, 250);

  text("D                  :", 90, 300);
  text("Move Right", 300, 300);

  text("C                  :", 90, 350);
  text("Increase Level", 300, 350);

  text("ESC             :", 90, 400);
  text("Pause Menu", 300, 400);

  text("Note : You Can Click on The Buttons", 90, 480);

  pop();

  // --------- HOW TO PLAY ---------
  push();
  fill(105);
  stroke(255);
  rect(750, 100, 150, 50);
  fill(255);
  textSize(20);
  textFont("Times New Roman");
  text("How To Play", 770, 133);
  pop();

  push();
  fill(105);
  stroke(255);
  rect(750, 150, 830, 550);
  pop();

  push();
  fill(255);
  // stroke(255);
  textSize(20);

  push();
  textFont("Times New Roman");
  textSize(23);
  text("Goal : ", 780, 190);
  pop();

  //INSTRUCTIONS

  text("Save The City filled with Criminals", 890, 190);
  text("- A police is stranded and assigned to save the city.", 780, 230);
  text(
    "- Your Objective is to avoid being killed by the criminal and collect stolen coins.",
    780,
    270
  );
  text(
    "- Recapture The City with Police Flag before the others come to help.",
    780,
    310
  );
  text(
    "- You will need to finish the obstacles before reaching the flag.",
    780,
    350
  );
  text(
    "- There are 5 different areas you need to capture with each level getting harder.",
    780,
    390
  );
  text(
    "- If you fall to the lava caused by the chaos and hit by the enemy. You are dead",
    780,
    430
  );
  text(
    "- There are different difficulties you can play on (Ex : Easy) ",
    780,
    470
  );
  text(
    "- Access the settings to adjust your preffered game mechanics",
    780,
    510
  );
  text(
    "- You can pause the game and restart the game from the resume menu",
    780,
    550
  );
  text(
    "- You will be given 3 lives to finish the game (except in the hard difficulty)",
    780,
    590
  );

  text("ENJOY THE GAME", 1080, 660);

  pop();

  //BACK MENU
  push();
  fill(0);
  stroke(255);
  rect(50, 700, 150, 70);
  fill(255);
  textSize(25);
  text("Back", 95, 745);
  pop();

  if (mouseX >= 50 && mouseX <= 200 && mouseY >= 700 && mouseY <= 770) {
    push();
    fill(255);
    stroke(0);
    rect(50, 700, 150, 70);
    fill(0);
    textSize(25);
    text("Back", 95, 745);
    pop();
  }
}
