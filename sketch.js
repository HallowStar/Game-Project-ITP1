/*
The Game Project
*/

//variables

//character
let police;
let police_world;
let gameChar_w;
let gameChar_h;
let hasDied;
let baseLine;
let enemies;

//game & pause state
let gameState;
let pauseState;
let newPauseState;
let playState;
let newPlayState;

//movement
let isLeft;
let isRight;
let isJump;
let isFall;
let scrollPos;
let velocity;
let gravity;
let jumpPower;

//background / item variables
let platforms;
let clouds;
let moon;
let building;
let n_building;
let f_building;
let trees;
let lamps;
let board;
let canyons;
let lball;
let coins;
let coinCount;
let mountain;
let lives;
let heart;
let gameOver;

//PLAY MENU
let play_menu;
let settings_menu;

//RESUME MENU
let restart_menu;
let play_again;
let settings_pause;

//sound
let jumpSound;
let deathSound;
let gameOverSound;
let gameStartSound;
let coinSound;
let gameWinSound;

function preload() {
  soundFormats("mp3", "wav"); // set the sound format

  //jump sound
  jumpSound = loadSound("sounds/jump.mp3");

  jumpSound.setVolume(0.1);

  //death sound
  deathSound = loadSound("sounds/death-sound.mp3");

  //game over sound
  gameOverSound = loadSound("sounds/game-over.mp3");

  //game start sound
  gameStartSound = loadSound("sounds/game-start.mp3");

  //coin collect sound
  coinSound = loadSound("sounds/coin.mp3");

  //game win sound
  gameWinSound = loadSound("sounds/level-win.mp3");
}

function setup() {
  createCanvas(1700, 850);

  lives = 3;

  //BASIC SETUP
  initialSetup();

  // ---------- PLAY MENU -----------
  playMenuButton();

  // --------- RESUME MENU ---------
  resumeMenuButton();
}

function draw() {
  //fill the sky blue
  background(0);

  //used the color palette from https://www.schemecolor.com/night-gradient.php

  //background

  fill(1, 22, 46, 250);
  rect(0, 0, width, 200);
  fill(0, 29, 55, 230);
  rect(0, 180, width, 100);
  fill(0, 39, 70, 230);
  rect(0, 280, width, 100);
  fill(1, 49, 85);
  rect(0, 380, width, 200);

  // ----------------  MOUNTAIN --------------------
  drawMountain();

  push();
  translate(scrollPos, 0); //to make the object moves when the camera move

  // ------------------ 1. BUILDING ------------------
  drawBuilding();

  // ------------------ 2. FALLEN BUILDING ------------------
  drawFallenBuilding();
  drawNormalBuilding();

  // ------------------ 3. STREET ROAD ------------------
  streetRoad();

  //-------- 4. LAMP ------------
  drawLamp();

  // -------- 5. TREE -----------
  drawTree();

  // ------------------ 6. CANYON ------------------

  drawCanyon();

  // ------------------ 7. FLAG ------------------
  drawFlag();

  // ------------------ 8. COLLECTABLE ------------------

  // ------------------ 1. Coin
  drawCoin(coins);

  //enemy
  drawEnemies();

  //platform
  drawPlatform();

  pop(); // end of translate

  // ------------------ 9. CLOUDS ------------------
  drawMovingCloud();
  drawCloud();

  // ------------------ 10. MOON ------------------
  drawMoon();

  //------------------ 11. SCORE BOARD ------------------
  drawScoreBoard();

  // ------------------ 12. LIVE ------------------
  drawHeart();

  // ------------------ CHARACTER ------------------

  // ------------------ 1. POLICE

  // ------------------ CHARACTER TURN RIGHT ------------------
  if (isRight == true) {
    characterTurnRight();
  }

  // ------------------ CHARACTER TURN LEFT ------------------
  else if (isLeft == true) {
    characterTurnLeft();
  }

  // ------------------ CHARACTER JUMP / FALL ------------------
  else if (isJump || isFall) {
    characterJumpOrFall();
  }

  // ------------------ CHARACTER STANDING STILL ------------------
  else {
    characterStandingStill();
  }

  // ------------------ CHARACTER FALLING LEFT ------------------
  if ((isLeft && isFall) || (isLeft && isJump)) {
    characterFallingLeft();
  }

  // ------------------ CHARACTER FALLING RIGHT ------------------
  if ((isRight && isFall) || (isRight && isJump)) {
    characterFallingRight();
  }

  push();

  translate(scrollPos, 0); //as the camera moves the object move

  drawLava();

  pop();

  // ------------------ PLAY SCREEN ------------------

  // ---------- PLAY MENU ----------
  if (gameState == 0) {
    // ---------- DARK BACKGROUND ----------
    drawDarkBackground();

    // ------------ PLAY MENU ----------
    drawPlayMenu();

    //  ---------- MOUSE HOVER PLAY MENU ----------

    if (
      mouseX >= play_menu.x &&
      mouseX <= play_menu.x + 300 &&
      mouseY >= height / 2 - 100 &&
      mouseY <= play_menu.y + 100
    ) {
      newPlayState = 1;
    } else if (
      mouseX >= settings_menu.x &&
      mouseX <= settings_menu.x + 300 &&
      mouseY >= settings_menu.y &&
      mouseY <= settings_menu.y + 100
    ) {
      newPlayState = 2;
    } else {
      newPlayState = 0; // will not hover the menu
    }

    playState = newPlayState;

    // ---------- PLAY MENU MOUSE HOVER ----------
    if (playState == 1) {
      drawPlayMenuMouseHover();
    }

    // ---------- SETTINGS MENU MOUSE HOVER ----------
    if (playState == 2) {
      drawSettingsMenuMouseHover();
    }
  }

  // ---------- PAUSE MENU ----------

  if (gameState == 2) {
    isFall = true;
    pauseMenuDefault();

    //resume page -> resume button white
    if (pauseState == 1) {
      resumeMouseHover();
    }

    //up and down arrow
    //pause menu -> new game white
    if (pauseState == 2) {
      newGameMouseHover();
    }

    //settings white
    if (pauseState == 3) {
      settingsMouseHover();
    }

    //resume button to hover white
    if (
      mouseX >= resume_menu.x &&
      mouseX <= resume_menu.x + 300 &&
      mouseY >= resume_menu.y &&
      mouseY <= resume_menu.y + 100
    ) {
      newPauseState = 1;
    }

    //new game button to hover white
    else if (
      mouseX >= play_again.x &&
      mouseX <= play_again.x + 300 &&
      mouseY >= play_again.y + 125 &&
      mouseY <= play_again.y + 225
    ) {
      newPauseState = 2;
    }

    //settings menu to hover white
    else if (
      mouseX >= settings_pause.x &&
      mouseX <= settings_pause.x + 300 &&
      mouseY >= settings_pause.y &&
      mouseY <= settings_pause.y + 100
    ) {
      newPauseState = 3;
    } else {
      newPauseState = 0;
    }
    pauseState = newPauseState;
  }

  // ---------- GAME OVER MENU ----------

  if (police.position.y >= 850 || police.position.y == 800) {
    hasDied = true;
    if (hasDied) {
      deathSound.play();
    }
  }

  if (police.position.y > 900) {
    // gameState = 4;
    initialSetup(); // reset the game
    gameState = 1; //game starts again
    lives--; // live minus one

    if (lives < 1) {
      gameState = 5; // if live is zero then the game is over
    }
  }

  // ---------- GAME OVER YOU WIN ----------

  if (gameState == 4) {
    // DARK BACKGROUND
    background(0, 0, 0, 200);

    //GAME OVER TEXT
    push();
    textSize(80);
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 2 - 100);
    textSize(50);
    text("You Win", width / 2, height / 2);
    pop();

    isJump = false; //cannot jump, fall, and move left or right
    isRight = false;
    isLeft = false;
    isFall = false;
  }

  // ---------- GAME OVER / NEXT LEVEL ----------
  if (gameState == 5) {
    // DARK BACKGROUND
    background(0, 0, 0, 200);

    //GAME OVER TEXT
    push();
    textSize(80);
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 2 - 100);
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
    rect(restart_menu.x, restart_menu.y, 300, 100);
    fill(restart_menu.color);
    textSize(20);
    text("Restart Game", restart_menu.x + 90, restart_menu.y + 57);
    pop();

    //RESTART BUTTON (WHITE)
    if (
      mouseX >= restart_menu.x &&
      mouseX <= restart_menu.x + 300 &&
      mouseY >= restart_menu.y &&
      mouseY <= restart_menu.y + 100
    ) {
      push();
      stroke(restart_menu.color - 255);
      fill(restart_menu.color);
      rect(restart_menu.x, restart_menu.y, 300, 100);
      fill(restart_menu.color - 255);
      textSize(20);
      text("Restart Game", restart_menu.x + 90, restart_menu.y + 57);
      pop();
    }
  }

  if (gameState == 0 || gameState == 2) {
    // - When It is in the Play and Pause Menu
    isRight = false; // -> cannot move right
    isLeft = false; // -> cannot move left
  }

  if (gameState == 1) {
    // ---------- Default Playing

    // ---------- JUMPING ----------
    if (isJump) {
      police.position.y += police.velocity; // If Jump is true then the character will go up
    }

    if (isFall) {
      police.position.y += police.velocity; // -> Will Fall Down if isFall is true
      police.velocity += police.gravity; // gravity (when falling down gets faster)
    }

    if (police.position.y >= baseLine) {
      // If the character is below the ground
      isFall = false; //cannot fall
      isJump = false; //no jump animation
      police.position.y = baseLine; //will stay at the baseline
      police.velocity = 0; // cannot move because no speed
    } else {
      isFall = true;
    }

    if (isLeft) {
      if (police.position.x > width * 0.2) {
        // to implement side scrolling so that when the character is almost to the end of the screen, the camera will go the left

        police.position.x -= police.speed; // -> Move the Character to the Left
      } else {
        scrollPos += police.speed; // -> The Camera will Move to the Right
      }
    } else if (isRight) {
      if (police.position.x < width * 0.8) {
        // if camera is almost at the corner, it will move the
        police.position.x += police.speed; // -> Move the Character to the Right
      } else {
        scrollPos -= police.speed; // -> Move the camera to the left
      }
    }
  }

  // ---------- NEW GAME RESET ----------
  if (gameState == 0) {
    if (lives < 3) {
      lives = 3; //if reset the game it will go back to 3 lives
    }
    // // CHARACTER RESET
    // police.position.x = 145;
    // police.position.y = 560;
    // scrollPos = 0;

    //COIN RESET
    scoreBoard = 0;

    // //LIVE RESET
    // lives = 3;
    // heart[0].isGone = false;
    // heart[1].isGone = false;
    // heart[2].isGone = false;
    // //BACKGROUND RESET
    // building.x = 1000;
    // f_building.x = 170;
    // lamp.x = 830;
    // tree.x = 1030;
    // ground.x = -1000;
  }

  //update the x position
  police_world = police.position.x - scrollPos;

  //coordinate value
  push();
  fill(0, 0, 0);
  text(mouseX + "," + mouseY, mouseX, mouseY);
  pop();
}

function mousePressed() {
  if (gameState == 0) {
    if (
      mouseX >= play_menu.x &&
      mouseX <= play_menu.x + 300 &&
      mouseY >= height / 2 - 100 &&
      mouseY <= play_menu.y + 100
    ) {
      gameState = 1; //if press the play button will start the game
      gameStartSound.play(); //game start sound
    }
  }

  if (gameState == 2) {
    if (
      mouseX >= resume_menu.x &&
      mouseX <= resume_menu.x + 300 &&
      mouseY >= resume_menu.y &&
      mouseY <= resume_menu.y + 100
    ) {
      gameState = 1; // resume the game
    }
    if (
      mouseX >= play_again.x &&
      mouseX <= play_again.x + 300 &&
      mouseY >= play_again.y + 125 &&
      mouseY <= play_again.y + 225
    ) {
      initialSetup(); // restart the game
    }
  }

  if (gameState == 5) {
    if (
      mouseX >= restart_menu.x &&
      mouseX <= restart_menu.x + 300 &&
      mouseY >= restart_menu.y &&
      mouseY <= restart_menu.y + 100
    ) {
      initialSetup(); //restart the game
    }
  }
}

//back to standing still
function keyReleased() {
  if (gameState == 5 || gameState == 4 || gameState == 2 || gameState == 0) {
    return;
  }
  if (keyCode == 65) {
    isLeft = false; //if release key "A"
  } else if (keyCode == 68) {
    isRight = false; // if release key "D"
  } else if (keyCode == 87) {
    isFall = true; // if release key "w"
  }
}

//when pressing a key
function keyPressed() {
  if (gameState == 5 || gameState == 4 || gameState == 2 || gameState == 0) {
    return;
  }

  //press escape
  if (keyCode == ESCAPE) {
    gameState = 2; // pause menu
    pauseState = 1;

    //enter -> to make
  } else if (keyCode == ENTER) {
    gameState = 1;
  }

  //movement key
  if (gameState == 1)
    if (keyCode == 65) {
      isLeft = true;
    }
  if (keyCode == 68) {
    isRight = true;
  }
  if (keyCode == 87) {
    if (police.position.y == baseLine) {
      isJump = true; //can jump
      police.velocity = police.jumpPower; // jump power of the character
      jumpSound.play(); //jump sound to appear
      isFall = true; // fall
    }
  }
}

// 0ther value
