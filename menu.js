// Dark Background
function drawDarkBackground() {

  // Dark Background
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

// Play & Resume Menu Setup
function playMenuButton() {
  play_menu = {
    x: width / 2 - 150,
    y: height / 2 - 100,
  };

  settings_menu = {
    x: width / 2 - 150,
    y: height / 2 + 50,
  };

  //menu
  restart_menu = {
    x: width / 2 - 150,
    y: height / 2 - 40,
  };
}

// Resume Menu Button Setup
function resumeMenuButton() {
  resume_menu = {
    x: width / 2 - 150,
    y: height / 2 - 200,
  };

  play_again = {
    x: width / 2 - 150,
    y: height / 2 - 200,
  };

  settings_pause = {
    x: width / 2 - 150,
    y: height / 2 + 50,
  };
}

// --------- Play Menu Button ---------

function drawPlayMenu() {
  let playColor = 255;

  if (
    mouseX >= play_menu.x &&
    mouseX <= play_menu.x + 300 &&
    mouseY >= height / 2 - 100 &&
    mouseY <= play_menu.y + 100
  ) 
    {
      playColor = 0; // Play Menu Hover (white)
    } 
  
  else {
    playColor = 255; // default color
  }

  push();
    stroke(playColor);
    fill(255 - playColor);
    rect(play_menu.x, play_menu.y, 300, 100);
    fill(playColor);
    textSize(20);
    text("Play Game", play_menu.x + 100, play_menu.y + 57);
  pop();

  // --------- Settings Button ---------
  let settingsColor = 0;

  if (
    mouseX >= settings_menu.x &&
    mouseX <= settings_menu.x + 300 &&
    mouseY >= settings_menu.y &&
    mouseY <= settings_menu.y + 100
  ) 
    {
      settingsColor = 255; // Settings Button Hover
    } 
  
  else {
    settingsColor = 0; // Default Settings
  }

  push();
    stroke(255 - settingsColor);
    fill(settingsColor);
    rect(settings_menu.x, settings_menu.y, 300, 100);
    fill(255 - settingsColor);
    textSize(20);
    textAlign(CENTER);
    text("Settings", width / 2 - 3, height / 2 + 105);
  pop();

  // --------- Tutorial Button ---------

  let tutorialColor = 0;

  if (
    mouseX >= settings_menu.x &&
    mouseX <= settings_menu.x + 300 &&
    mouseY >= settings_menu.y + 150 &&
    mouseY <= settings_menu.y + 250
  ) 
    {
      tutorialColor = 255; // Tutorial Mouse Hover
    } 

  else {
    tutorialColor = 0; // Default Mouse Hover
  }

  push();
    stroke(255 - tutorialColor);
    fill(tutorialColor);
    rect(settings_menu.x, settings_menu.y + 150, 300, 100);
    fill(255 - tutorialColor);
    textSize(20);
    textAlign(CENTER);
    text("Tutorial", width / 2 - 3, height / 2 + 255);
  pop();
}

// -------- Game Over Menu Screen (Game State 6) --------

function restartMenu() {
  // Dark Background
  background(0, 0, 0, 200);

  // Background
  push();
    fill(255, 0, 0, 150);
    rect(0, 210, width, 180);
  pop();

  //  --------- Game Over Text ---------
  push();

    textSize(80);
    textAlign(CENTER);
    push();

    stroke(0);
    strokeWeight(3);
    text("GAME OVER", width / 2, height / 2 - 100);
    pop();

  pop();

  // Sound
  if (gameOver) 
    {
      gameOverSound.play(); // game over sound
      gameOver = false; // Prevents replay
    }

  // --------- Restart Button ---------

  let restartColor = 255;

  if (
    mouseX >= restart_menu.x &&
    mouseX <= restart_menu.x + 300 &&
    mouseY >= restart_menu.y + 200 &&
    mouseY <= restart_menu.y + 300
  ) 
    {
      restartColor = 0;
    } 
  
  else {
    restartColor = 255;
  }

  push();
    stroke(restartColor);
    fill(255 - restartColor);
    rect(restart_menu.x, restart_menu.y + 200, 300, 100);
    fill(restartColor);
    textSize(20);
    text("Restart Game", restart_menu.x + 85, restart_menu.y + 255);
    textSize(30);
    fill(255);
    text(" Nice Try !!", width / 2 - 60, height / 2 + 40);
  pop();
}

// --------- Next Level Menu (Game State 5) ---------

function nextLevel() {
  // Dark Background
  background(0, 0, 0, 200);

  // Background
  push();
    fill(255, 255, 255, 150);
    rect(0, 210, width, 180);
  pop();

  // Game Over Text
  push();
    textSize(80);
    textAlign(CENTER);

    push();
      stroke(0);
      strokeWeight(3);
      text("LEVEL COMPLETED", width / 2, height / 2 - 100);
    pop();

  pop();

  // --------- Restart Button ---------

  let restartColor = 255;

  if (
    mouseX >= restart_menu.x &&
    mouseX <= restart_menu.x + 300 &&
    mouseY >= restart_menu.y + 50 &&
    mouseY <= restart_menu.y + 150
  ) 
    {
      restartColor = 0;
    } 
  
  else {
    restartColor = 255;
  }

  push();
    stroke(restartColor);
    fill(255 - restartColor);
    rect(restart_menu.x, restart_menu.y + 50, 300, 100);
    fill(restartColor);
    textSize(20);
    text("Next Level", restart_menu.x + 100, restart_menu.y + 105);
  pop();
}

// ----------- Game Win Menu (Game State 4) -----------

function gameWin() {
  // Dark Background
  background(0, 0, 0, 200);

  // Game Over Text
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

// ----------- Pause Menu (Game State 2) -----------

function pauseMenuDefault() {
  //Dark Background
  push();
  fill(0, 0, 0, 160);
  rect(0, 0, width, height);
  pop();

  // --------- Resume Game Button ---------

  let resumeColor = 255;

  if (
    mouseX >= resume_menu.x &&
    mouseX <= resume_menu.x + 300 &&
    mouseY >= resume_menu.y &&
    mouseY <= resume_menu.y + 100
  ) 
    {
      resumeColor = 0; // Hover
    } 
  
  else {
    resumeColor = 255; // Default
  }

  push();
    stroke(resumeColor);
    fill(255 - resumeColor);
    rect(resume_menu.x, resume_menu.y, 300, 100);
    fill(resumeColor);
    textSize(20);
    text("Resume Game", resume_menu.x + 80, resume_menu.y + 57);
  pop();

  // --------- New Game Button ---------

  let newColor = 255;

  if (
    mouseX >= play_again.x &&
    mouseX <= play_again.x + 300 &&
    mouseY >= play_again.y + 125 &&
    mouseY <= play_again.y + 225
  ) 
  {
    newColor = 0;
  } 
  
  else {
    newColor = 255;
  }

  push();
    stroke(newColor);
    fill(255 - newColor);
    rect(play_again.x, play_again.y + 125, 300, 100);
    fill(newColor);
    textSize(20);
    textAlign(CENTER);
    text("New Game", width / 2 - 3, height / 2 - 19);
  pop();

  // --------- Settings Button ---------

  let settingColor = 0;

  if (
    mouseX >= settings_pause.x &&
    mouseX <= settings_pause.x + 300 &&
    mouseY >= settings_pause.y &&
    mouseY <= settings_pause.y + 100
  ) 
  {
    settingColor = 255; // Hover
  } 
  
  else {
    settingColor = 0; // Default
  }

  push();
    stroke(255 - settingColor);
    fill(settingColor);
    rect(settings_menu.x, settings_menu.y, 300, 100);
    fill(255 - settingColor);
    textSize(20);
    textAlign(CENTER);
    text("Settings", width / 2 - 3, height / 2 + 105);
  pop();
}

// ------------ Settings Menu (Game State 7) ------------

function settingsMenu() {
  push();

    // Dark Background
    push();
      fill(0, 0, 0, 200);
      rect(0, 0, width, height);
    pop();

    // ------ Back Menu ------

    let backColor = 255;

    if (
      mouseX >= 50 && 
      mouseX <= 200 && 
      mouseY >= 50 && 
      mouseY <= 120
    ) 
      {
        backColor = 0;
      } 
    
    else {
      backColor = 255;
    }

    push();
      fill(255 - backColor);
      stroke(255);
      rect(50, 50, 150, 70);
      fill(backColor);
      textSize(25);
      text("Back", 95, 95);
    pop();

    // --------------- Difficulty  ---------------

    // Difficulty Text
    textFont("Times New Roman");

    push();
      textSize(30);
      fill(255);
      text("Difficulty Level", 200, 200);
    pop();

    // Easy Button
    if (
      difficulty == "easy" ||
      (
        mouseX >= 700 && 
        mouseX <= 800 && 
        mouseY >= 170 && 
        mouseY <= 220
      )
    ) 
      {
        push();
          fill(255);
          rect(700, 170, 100, 50);

          fill(0);
          textSize(25);
          text("Easy", 725, 203);
        pop();
      } 
    
    else {
      push();
        fill(120);
        rect(700, 170, 100, 50);
        textSize(25);
        fill(255);
        text("Easy", 725, 203);
      pop();
    }

    // Medium Button
    if (
      difficulty === "medium" ||
      (
        mouseX >= 850 && 
        mouseX <= 985 && 
        mouseY >= 170 && 
        mouseY <= 220
      )
    ) 
      {
        push();
          fill(255);
          rect(850, 170, 135, 50);

          fill(0);
          textSize(25);
          text("Medium", 875, 203);
        pop();
      } 
    
    else {
      push();
      fill(120);
      rect(850, 170, 135, 50);

      textSize(25);
      fill(255);
      text("Medium", 875, 203);
      pop();
    }

    // Hard Button
    if (
      difficulty === "hard" ||
      (
        mouseX >= 1040 && 
        mouseX <= 1140 && 
        mouseY >= 170 && 
        mouseY <= 220
      )
    ) 
    {
      push();
        fill(255);
        rect(1040, 170, 100, 50);
        textSize(25);
        fill(0);
        text("Hard", 1065, 203);
      pop();
    } 
    
    else {
      push();
        fill(120);
        rect(1040, 170, 100, 50);
        textSize(25);
        fill(255);
        text("Hard", 1065, 203);
      pop();
    }

  pop();

  // Infinite Lives
  push();
    textFont("Times New Roman");
    textSize(30);
    fill(255);
    text("Infinite Lives", 200, 300);
  pop();

  // On Sign
  let onColor = 0;

  if (
    (
      mouseX >= 870 && 
      mouseX <= 968 && 
      mouseY >= 270 && 
      mouseY <= 320
    ) || infinite
  ) 
    {
      onColor = 255; // Hover
    } 
  
  else {
    onColor = 0; // Default
  }

  push();
    fill(onColor);
    stroke(255 - onColor);
    rect(870, 270, 100, 50);
    fill(255 - onColor);
    textFont("Times New Roman");
    textSize(25);
    text("On", 903, 305);
  pop();

  //Off Sign

  let offColor = 0;

  if (
    (
      mouseX >= 970 && 
      mouseX <= 1070 && 
      mouseY >= 270 && 
      mouseY <= 320
    ) || infinite == false
  ) 
    {
      offColor = 255;
    } 
  
  else {
    offColor = 0;
  }

  push();
    fill(offColor);
    stroke(255 - offColor);
    rect(970, 270, 100, 50);
    fill(255 - offColor);
    textFont("Times New Roman");
    textSize(25);
    text("Off", 1000, 305);
  pop();

  // -------- Jump Power --------

  // Jump Power Text
  push();
    textFont("Times New Roman");
    textSize(30);
    fill(255);
    text("Jump Power", 200, 400);
  pop();

  // Number
  push();
    stroke(255);
    fill(255);
    textSize(15);
    text("1", 945, 385);
    text("2", 1000, 385);
    text("3", 1050, 385);
  pop();

  // Bar (Black)
  push();
    stroke(255);
    fill(0);
    rect(900, 395, 180, 10, 30);
  pop();

  // First Line
  if (
    (
      mouseX >= 900 && 
      mouseX <= 955 && 
      mouseY >= 395 && 
      mouseY <= 405
    ) || police.jumpPower == -10
  ) 
    {
      push();
        fill(255);
        rect(900, 395, 55, 10, 30);
      pop();
    }

  // Second Line
  if (
    (
      mouseX >= 955 && 
      mouseX <= 1010 && 
      mouseY >= 395 && 
      mouseY <= 405
    ) || police.jumpPower == -12
  ) 
    {
      push();
        fill(255);
        rect(900, 395, 110, 10, 30);
      pop();
    }

  if (
    (
      mouseX >= 1010 && 
      mouseX <= 1080 && 
      mouseY >= 395 && 
      mouseY <= 405
    ) || police.jumpPower == -15
  ) 
    {
      push();
        fill(255);
        rect(900, 395, 180, 10, 30);
      pop();
    }

  // Line
  push();
    stroke(255);
    strokeWeight(1);
    line(1200, 100, 1200, 800);
  pop();

  // Character Speed Settings

  // Speed Text
  push();
    textFont("Times New Roman");
    textSize(30);
    fill(255);
    text("Speed", 200, 500);
  pop();

  // Number
  push();
    stroke(255);
    fill(255);
    textSize(15);
    text("1", 945, 485);
    text("2", 1000, 485);
    text("3", 1050, 485);
  pop();

  // Bar (Black)
  push();
    stroke(255);
    fill(0);
    rect(900, 495, 180, 10, 30);
  pop();

  // First LINE
  if (
    (
      mouseX >= 900 && 
      mouseX <= 955 && 
      mouseY >= 495 && 
      mouseY <= 505
    ) || police.speed == 5
  ) 
    {
      push();
        fill(255);
        rect(900, 495, 55, 10, 30);
      pop();
    }

  // Second Line
  if (
    (
      mouseX >= 955 && 
      mouseX <= 1010 &&
      mouseY >= 495 && 
      mouseY <= 505
    ) || police.speed == 8
  ) 
    {
      push();
        fill(255);
        rect(900, 495, 110, 10, 30);
      pop();
    }

  // Third Line
  if (
    (
      mouseX >= 1010 && 
      mouseX <= 1080 && 
      mouseY >= 495 && 
      mouseY <= 505
    ) || police.speed == 13
  ) 
    {
      push();
        fill(255);
        rect(900, 495, 180, 10, 30);
      pop();
    }

  // Instructions
  push();
    textSize(18);
    text("Easy : Restart at the same level & Score still the same", 1240, 120);
    text("Medium : Restart from the beginning & Score not saved", 1240, 160);
    text("Hard : One Live", 1240, 200);
    text("Jump Power : Increase Jump Power of Character", 1240, 240);
    text("Speed : Increase Speed of the Character", 1240, 280);
    text("Infinite Lives : Have Infinite Lives", 1240, 320);
  pop();
}

// Tutorial Menu

function tutorialMenu() {
  // Dark Background
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

  // Controls
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

  //  How to Play
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
    textSize(20);

    push();
    textFont("Times New Roman");
    textSize(23);
    text("Goal : ", 780, 190);
    pop();

    // Instructions

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

  // Back Menu

  let backColor = 0;

  if (
    mouseX >= 50 &&
    mouseX <= 200 && 
    mouseY >= 700 && 
    mouseY <= 770
  ) 
    {
      backColor = 255;
    } 
  
  else {
    backColor = 0;
  }

  push();
    fill(backColor);
    stroke(255 - backColor);
    rect(50, 700, 150, 70);
    fill(255 - backColor);
    textSize(25);
    text("Back", 95, 745);
  pop();
}
