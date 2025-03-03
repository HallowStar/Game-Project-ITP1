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
let level;
let difficulty;

//movement
let isLeft;
let isRight;
let isJump;
let isFall;
let scrollPos;
let gameOver;

//background / item variables
let platforms;
let clouds;
let moon;
let buildings;
let n_buildings;
let f_buildings;
let trees;
let flag;
let pole;
let lamps;
let board;
let canyons;
let coins;
let mountains;
let lives;
let heart;

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

  //font
}

function setup() {
  createCanvas(1700, 850);

  difficulty = "easy";

  scoreBoard = 0;

  level = 1; // initial level = 1

  gameState = 0; // play menu screen

  lives = 3; // total lives = 3

  //BASIC SETUP
  initialSetup();

  // PLAY MENU SETUP
  playMenuButton();

  // RESUME MENU
  resumeMenuButton();
}

function draw() {
  // gameState = 7;

  background(0); // set the background to black

  // NIGHT SKY (used the color palette from https://www.schemecolor.com/night-gradient.php)

  fill(1, 22, 46, 250);
  rect(0, 0, width, 200);
  fill(0, 29, 55, 230);
  rect(0, 180, width, 100);
  fill(0, 39, 70, 230);
  rect(0, 280, width, 100);
  fill(1, 49, 85);
  rect(0, 380, width, 200);

  // MOUNTAIN
  drawMountain();

  push(); //inside of translate
  translate(scrollPos, 0); //to make the object moves when the camera move

  // Draw Building (Spiky)
  drawBuildings();

  // Draw Normal Building
  drawNormalBuildings();

  // Draw Fallen Building
  drawFallenBuildings();

  // Draw Street Road
  streetRoad();

  // Draw Street Lamp
  drawLamp();

  // Draw Trees
  drawTree();

  // Draw Canyon
  drawCanyon();

  // Draw Flag
  drawFlag();

  // Draw Coins
  drawCoin();

  // Draw Enemies
  drawEnemies();

  // Draw Platforms
  drawPlatform();

  pop();

  // End of translate

  // Draw Clouds
  drawCloud();

  // Draw Moon
  drawMoon();

  // Draw Score Board
  drawScoreBoard();

  // Draw Level Board
  drawLevel();

  // Draw Hearts (Live)
  drawHeart();

  // ------------------ Character ------------------

  //  Police Character (Main Character)

  if (isRight) {
    characterTurnRight(); // Police Turning Right Animation
  }
  //dd
  else if (isLeft) {
    characterTurnLeft(); // Police Turning Left Animation
  }
  //dd
  else if (isJump || isFall) {
    characterJumpOrFall(); // Police Jumping or Falling Animation
  }

  //dd
  else {
    characterStandingStill(); // Police Standing Animation (Normal)
  }

  if ((isLeft && isFall) || (isLeft && isJump)) {
    characterFallingLeft(); // Police Jumping Towards the Left Animation
  }

  //
  else if ((isRight && isFall) || (isRight && isJump)) {
    characterFallingRight(); // Police Jumping Towards the Right Animation
  }

  push(); // Lava is place here so that the order is below the character

  translate(scrollPos, 0); //as the camera moves the object move

  drawLava();

  pop();

  // End of translate

  // ---------- PLAY MENU ----------

  if (gameState == 0) {
    // Dark Background
    drawDarkBackground();

    // Default Play Menu
    drawPlayMenu();

    // Play Button Hover
    drawPlayMenuMouseHover();

    // Settings Button Hover
    drawSettingsMenuMouseHover();

    // Tutorial Button Hover
    tutorialButtonHover();
  }

  // ---------- PAUSE MENU ----------

  if (gameState == 2) {
    //Default Pause Menu
    pauseMenuDefault();

    // Resume Button Mouse Hover
    resumeMouseHover();

    // New Game Button Mouse Hover
    newGameMouseHover();

    // Settings Menu Mouse Hover
    settingsMouseHover();
  }

  // ---------- GAME OVER MENU ----------

  if (police.position.y > 900) {
    // If The Character is Below The Ground (When Falling to Canyon)

    //Difficulty Easy

    if (difficulty == "easy") {
      // If the Character Lives are still above zero
      if (lives > 0) {
        scoreBoard = 0; // reset the score board to zero
        gameState = 1; // game state directly to play state
        lives--; // if character dies, the live decreases by one
        // gameOver = true; //
        initialSetup(); // restart the setup

        //DEATH SOUND
        deathSound.play(); // death sound activated
      }
    }

    //DIFFICULTY MEDIUM
    else if ((difficulty = "medium")) {
      // If difficulty is medium then will restart

      level = 1; // will reset the level to one if character dies
      lives--; // decrease the live if character dies
      initialSetup(); // restart the setup
      deathSound.play(); // death sound activated
    }
    if (lives < 1) {
      gameState = 6; // if live is zero then the game is over
      gameOver = true; // game over then true
    }
  }

  // ---------- GAME OVER YOU WIN MENU ----------

  if (gameState == 4) {
    gameWin(); // win the game menu (located in menu.js)
  }

  // ---------- NEXT LEVEL ----------

  if (gameState == 5) {
    nextLevel(); // next level (located in menu.js)
  }

  //---------- GAME OVER ----------

  if (gameState == 6) {
    restartMenu(); // game over (located in menu.js)
  }

  // //---------- SETTINGS MENU ----------
  if (gameState == 7) {
    settingsMenu(); // settings menu (located in menu.js)
  }

  //---------- TUTORIAL MENU ----------

  if (gameState == 8) {
    tutorialMenu(); // tutorial menu (located in menu.js)
  }

  // ---------- Default Playing ----------

  if (gameState == 1) {
    // Character jumps
    if (isJump) {
      police.position.y += police.velocity; // If Jump is true then the character will go up
    }

    // Character Falling
    if (isFall) {
      police.position.y += police.velocity; // Will Fall Down if isFall is true
      police.velocity += police.gravity; // gravity (when falling down gets faster)
    }

    // Character Below Base Line (Below The Ground)
    if (police.position.y >= baseLine) {
      isFall = false; // character cannot fall
      isJump = false; // character cannot jump
      police.position.y = baseLine; // character stay at the baseline
      police.velocity = 0; // character cannot move because no speed
    } else {
      isFall = true; // character will fall if not on baseline
    }

    // Character Turning Left
    if (isLeft) {
      if (police.position.x > width * 0.2) {
        // to implement side scrolling so that when the character is almost to the end of the screen, the camera will go the left

        police.position.x -= police.speed; // Move the Character to the Left
      } else {
        scrollPos += police.speed; // The Camera will Move to the Right
      }
    }

    // Character Turning Right
    else if (isRight) {
      if (police.position.x < width * 0.8) {
        // if camera is almost at the corner, it will move the

        police.position.x += police.speed; // Move the Character to the Right
      } else {
        scrollPos -= police.speed; // Move the camera to the left
      }
    }
  }

  // ---------- NEW GAME RESET ----------

  if (gameState == 0) {
    if (lives < 3) {
      lives = 3; // If reset the game it will go back to 3 lives
    }

    // Difficulty Hard

    if (difficulty == "hard") {
      lives = 1; // Character will only be given 1 live
    }

    // //COIN RESET
    // scoreBoard = 0;
  }

  // Update the character x position
  police_world = police.position.x - scrollPos;

  // Coordinate Value
  push();
  fill(0, 0, 0);
  text(mouseX + "," + mouseY, mouseX, mouseY);
  pop();
}

// If Mouse Is Pressed
function mousePressed() {
  // Default Play Menu
  if (gameState == 0) {
    // Play Button Selected
    if (
      mouseX >= play_menu.x &&
      mouseX <= play_menu.x + 300 &&
      mouseY >= height / 2 - 100 &&
      mouseY <= play_menu.y + 100
    ) {
      gameState = 1; // If press the play button will start the game
      gameStartSound.play(); // Game start sound
    }

    // Settings Button Selected
    else if (
      mouseX >= settings_menu.x &&
      mouseX <= settings_menu.x + 300 &&
      mouseY >= settings_menu.y &&
      mouseY <= settings_menu.y + 100
    ) {
      gameState = 7; // Will go to the settings menu
    }

    // Tutorial Button Selected
    else if (
      mouseX >= settings_menu.x &&
      mouseX <= settings_menu.x + 300 &&
      mouseY >= settings_menu.y + 150 &&
      mouseY <= settings_menu.y + 250
    ) {
      gameState = 8; // Will go to the tutorial menu
    }
  }

  // Pause Menu State
  if (gameState == 2) {
    // Resume Button Menu
    if (
      mouseX >= resume_menu.x &&
      mouseX <= resume_menu.x + 300 &&
      mouseY >= resume_menu.y &&
      mouseY <= resume_menu.y + 100
    ) {
      gameState = 1; // resume the game
    }

    // Restart Button Menu
    if (
      mouseX >= play_again.x &&
      mouseX <= play_again.x + 300 &&
      mouseY >= play_again.y + 125 &&
      mouseY <= play_again.y + 225
    ) {
      level = 1; // Restart the Level
      scoreBoard = 0; // restart the score board
      difficulty = "easy"; // set the default difficulty to easy (restart)
      gameState = 1;
      initialSetup(); // restart the game
    }

    // Settings Menu Button
    if (
      mouseX >= settings_pause.x &&
      mouseX <= settings_pause.x + 300 &&
      mouseY >= settings_pause.y &&
      mouseY <= settings_pause.y + 100
    ) {
      gameState = 7; // go to settings menu
    }
  }

  // Next Level Menu
  if (gameState == 5) {
    // Press On Next Level Menu
    if (
      mouseX >= restart_menu.x &&
      mouseX <= restart_menu.x + 300 &&
      mouseY >= restart_menu.y + 50 &&
      mouseY <= restart_menu.y + 100
    ) {
      level += 1; // Level Increase by 1
      initialSetup(); //next level
    }
  }

  // Game Over Menu
  if (gameState == 6) {
    // Press On Restart Button
    if (
      mouseX >= restart_menu.x &&
      mouseX <= restart_menu.x + 300 &&
      mouseY >= restart_menu.y + 200 &&
      mouseY <= restart_menu.y + 300
    ) {
      gameState = 0; // Go Back to Play Menu
      level = 1; // Level Restart To One
      initialSetup(); // Restart The Setup
    }
  }

  //BACK BUTTON IN SETTINGS
  if (gameState == 7) {
    // If Press Back Button in Settings Menu
    if (mouseX >= 50 && mouseX <= 200 && mouseY >= 50 && mouseY <= 120) {
      gameState = 0; // Go To Play Menu State
    }
  }

  if (gameState == 8) {
    // If Press Back Button in Tutorial Menu
    if (mouseX >= 50 && mouseX <= 200 && mouseY >= 700 && mouseY <= 770) {
      gameState = 0; // Go Back To Play Menu State
    }
  }
}

// Back to standing still
function keyReleased() {
  if (gameState == 5 || gameState == 4 || gameState == 2 || gameState == 0) {
    return; // cannot press any key
  }

  if (keyCode == 65) {
    isLeft = false; // if release key "A" animation will stop
  } else if (keyCode == 68) {
    isRight = false; // if release key "D" animation will stop
  } else if (keyCode == 87) {
    isFall = true; // if release key "w" animation will stop
  }
}

// When Pressing a key
function keyPressed() {
  if (gameState == 5 || gameState == 4 || gameState == 2 || gameState == 0) {
    return; // Cannot Press Any Key
  }

  // Press Escape
  if (keyCode == ESCAPE) {
    gameState = 2; // pause menu

    //enter -> to make
  } else if (keyCode == ENTER) {
    gameState = 1;
  }

  // Level Cheat

  // "C" Key Pressed
  if (keyCode == 67) {
    level += 1;
    initialSetup();
  }

  // Movement key

  // "A" Key
  if (keyCode == 65) {
    isLeft = true;
  }

  // "D" Key
  if (keyCode == 68) {
    isRight = true;
  }

  // "W" Key
  if (keyCode == 87) {
    if (police.position.y == baseLine) {
      isJump = true; //can jump
      police.velocity = police.jumpPower; // jump power of the character
      jumpSound.play(); //jump sound to appear
      isFall = true; // fall
    }
  }
}

// If Mouse is Clicked
function mouseClicked() {
  if (gameState == 7) {
    // Easy Mode Clicked
    if (mouseX >= 700 && mouseX <= 800 && mouseY >= 170 && mouseY <= 220) {
      difficulty = "easy";
    }

    // Medium Mode Clicked
    if (mouseX >= 850 && mouseX <= 985 && mouseY >= 170 && mouseY <= 220) {
      difficulty = "medium";
    }

    // Hard Mode Clicked
    if (mouseX >= 1040 && mouseX <= 1140 && mouseY >= 170 && mouseY <= 220) {
      difficulty = "hard";
    }

    // Jump Power
    if (mouseX >= 900 && mouseX <= 955 && mouseY >= 395 && mouseY <= 405) {
      police.jumpPower = -10;
    } else if (
      mouseX >= 955 &&
      mouseX <= 1010 &&
      mouseY >= 395 &&
      mouseY <= 405
    ) {
      police.jumpPower = -12;
    } else if (
      mouseX >= 1010 &&
      mouseX <= 1080 &&
      mouseY >= 395 &&
      mouseY <= 405
    ) {
      police.jumpPower = -15;
    }
  }

  // Speed
  if (mouseX >= 900 && mouseX <= 955 && mouseY >= 495 && mouseY <= 505) {
    police.speed = 5;
  }

  if (mouseX >= 955 && mouseX <= 1010 && mouseY >= 495 && mouseY <= 505) {
    police.speed = 8;
  }

  if (mouseX >= 1010 && mouseX <= 1080 && mouseY >= 495 && mouseY <= 505) {
    police.speed = 13;
  }
}
