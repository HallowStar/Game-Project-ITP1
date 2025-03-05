function initialSetup() {
  baseLine = 560;

  //  --------- Character ---------

  police = {
    position: createVector(145, 560),
    velocity: 0,
    speed: 5,
    gravity: 0.5,
    jumpPower: -10,
    legDeg: 65,
    legDirection: -2,
  };

  robber = {
    position: createVector(45, 137),
    handDeg: 35,
    handDirection: -1,
    legDeg: 45,
    handDirection: -1,
  };

  // Camera Position
  cameraPosX = 0;

  // Boolean Variables
  isLeft = false;
  isRight = false;
  isJump = false;
  isFall = false;

  noStroke();

  // Moon
  moon = {
    x: 1620,
    y: 70,
  };

  // ------------ BUILDINGS ------------

  // Spiky Building
  buildings = [];

  buildings.push(createBuilding(random(1000, 1500), 100, random(0, 255)));
  buildings.push(createBuilding(random(3000, 3400), 100, random(0, 255)));

  // Normal Building
  n_buildings = [];

  n_buildings.push(createNormalBuilding(-1200, 0));
  n_buildings.push(createNormalBuilding(-600, 0));
  n_buildings.push(createNormalBuilding(random(1900, 2100), 0));
  n_buildings.push(createNormalBuilding(random(4000, 5000), 0));

  // Fallen Building
  f_buildings = [];

  f_buildings.push(createFallenBuilding(random(100, 500), 150));
  f_buildings.push(createFallenBuilding(random(2500, 2800), 150));

  // Trees
  trees = [];

  for (let j = -50; j < 50; j++) {
    trees.push(createTree(1030 + j * 500, 475)); // spawn trees with loop
  }

  // Canyon
  canyons = [];

  // Lamp
  lamps = [];

  for (let i = 0; i < 100; i++) {
    lamps.push(createLamp(-660 + i * 500, 480)); // spawn lamps with loop
  }

  // Platform
  platforms = [];

  // Enemy
  enemies = [];

  // Flag
  flags = [];

  // Mountain
  mountains = [];

  mountains.push(createMountain(100, 500));
  mountains.push(createMountain(1000, 500));

  // Coin
  coins = [];

  // Clouds
  clouds = [];

  clouds.push(createCloud(random(60, 90), random(20, 70), random(40, 60)));
  clouds.push(createCloud(random(140, 190), random(6, 130), random(60, 80)));
  clouds.push(createCloud(random(0, 80), random(100, 180), random(70, 90)));
  clouds.push(createCloud(random(70, 120), random(100, 180), random(70, 90)));

  // Score Board
  board = {
    x: 50,
    y: 50,
  };

  // Level Board
  levelBoard = {
    x: 50,
    y: 150,
  };

  // Total Lives
  heart = [
    {
      x: width / 2 + 60,
      y: 50,
      isGone: false,
    },
    {
      x: width / 2 + 10,
      y: 50,
      isGone: false,
    },
    {
      x: width / 2 - 40,
      y: 50,
      isGone: false,
    },
  ];

  // Flag
  flag = {
    x: 2500,
    y: 560,
    speed: 1,
    isReach: false,
  };

  // Flag Pole
  pole = {
    x: flag.x,
    y: flag.y,
  };

  // ----------- Level -----------

  if (level == 1) 
    {
      levelOne(); // Initialize Level One Objects
    } 
  
  else if (level == 2) 
    {
      gameState = 1;
      levelTwo(); // Initialize Level Two Objects
    } 
  
  else if (level == 3) 
    {
      gameState = 1;
      levelThree(); // Initialize Level Three Objects
    } 
  
  else if (level == 4) 
    {
      gameState = 1;
      levelFour(); // Initialize Level Four Objects
    } 
  
  else if (level == 5) 
    {
      gameState = 1;
      levelFive(); // Initialize Level Five Objects
    }
}

// Draw Building
function createBuilding(x, y, color) {
  return new Building(x, y, color);
}

function drawBuildings() {
  for (let i = 0; i < buildings.length; i++) 
    {
      const building = buildings[i];
      building.draw();
    }
}

// Draw Normal Building
function createNormalBuilding(x, y) {
  return new NormalBuilding(x, y);
}

function drawNormalBuildings() {
  for (let i = 0; i < n_buildings.length; i++) 
    {
      const building = n_buildings[i];
      building.draw();
    }
}

// Draw Fallen Building
function createFallenBuilding(x, y) {
  return new FallenBuilding(x, y);
}

function drawFallenBuildings() {
  for (let i = 0; i < f_buildings.length; i++) 
    {
      const building = f_buildings[i];
      building.draw();
    }
}

// Draw Street Road
function streetRoad() {

  //  Street Road
  fill(211);
  rect(-3000, 465, 9000, 50);

  // Road
  fill(35);
  rect(-3000, 500, 7000, 170);

  // Yellow Road
  fill(255, 214, 85);
  
  for (i = -1000; i < 9000; i += 250) 
    {
      rect(-900 + i, 575, 100, 20);
    }

  // Dirt
  fill(139, 69, 19);
  rect(-2000, 670, 10000, 180);
}

// Draw Cloud
function createCloud(x, y, size) {
  return new Cloud(x, y, size);
}

function drawCloud() {
  for (let i = 0; i < clouds.length; i++) 
    {
      const cloud = clouds[i]
      cloud.draw();
      cloud.move();
    }
}

// Draw Tree
function createTree(x, y) {
  return new Tree(x, y);
}

function drawTree() {
  for (let i = 0; i < trees.length; i++) 
    {
      const tree = trees[i];
      tree.draw();
    }
}

// Draw Moon
function drawMoon() {
  push();
    stroke(0);
    strokeWeight(2);

    fill(255, 250, 205, 230);
    ellipse(moon.x, moon.y, 100);

    fill(255, 235, 205, 230);
    ellipse(moon.x - 10, moon.y - 10, 10);
    ellipse(moon.x - 20, moon.y - 30, 5);
    ellipse(moon.x + 30, moon.y - 15, 7);
    ellipse(moon.x + 25, moon.y + 20, 15);
    ellipse(moon.x - 12, moon.y + 10, 9);
  pop();
}

// Draw Mountain
function createMountain(x, y) {
  return new Mountain(x, y);
}

function drawMountain() {
  for (let i = 0; i < mountains.length; i++) 
    {
      const mountain = mountains[i];
      mountain.draw();
    }
}

// Draw Lamp
function createLamp(x, y) {
  return new Lamp(x, y);
}

function drawLamp() {
  for (let i = 0; i < lamps.length; i++) 
    {
      const lamp = lamps[i];
      lamp.draw();
    }
}

// Draw Canyon
function createCanyon(x, y, width) {
  return new Canyon(x, y, width);
}

function drawCanyon() {
  for (let i = 0; i < canyons.length; i++) 
    {
      const canyon = canyons[i];
      canyon.draw();
      canyon.func();
    }
}

// Draw Lava
function drawLava() {
  for (let i = 0; i < canyons.length; i++) 
    {
      const canyon = canyons[i];
      canyon.drawL();
    }
}

// Draw Coin
function createCoin(x, y, collect) {
  return new Coin(x, y, collect);
}

function drawCoin() {
  for (var i = 0; i < coins.length; i++) 
    {
      const coin = coins[i];
      coin.draw();
      coin.update();
      coin.animation();
    }
}

// Draw Score Board
function drawScoreBoard() {
  push();
    fill(255, 0, 0);
    stroke(0);
    strokeWeight(2);
    rect(board.x, board.y, 145, 70);
    fill(255);
    textSize(20);
    text("Score =   " + scoreBoard, board.x + 20, board.y + 40);
  pop();
}

// Draw Level Board
function drawLevel() {
  push();
    stroke(0);
    strokeWeight(2);
    fill(100, 149, 237);
    rect(levelBoard.x, levelBoard.y, 145, 70);
    fill(255);
    textSize(20);
    text("Level =   " + level, levelBoard.x + 25, levelBoard.y + 40);
  pop();
}

// Draw Lives
function drawHeart() {
  for (let i = 0; i < lives; i++) 
    {
      //When the condition is false it will appear
      const heartt = heart[i];
      
      if (heartt.isGone == false) {
        push();
          stroke(0);
          strokeWeight(1);

          //head
          fill(255, 228, 196);
          ellipse(heartt.x, heartt.y, 40);

          // hat
          push();
            stroke(0);
            fill(70, 130, 180);
            rect(heartt.x - 10, heartt.y - 20, 20, 5, 0, 9, 9, 1);
            fill(17, 34, 85);
            rect(heartt.x - 15, heartt.y - 25, 30, 5, 5);
          pop();

          //eyes
          fill(0);
          rect(heartt.x - 10, heartt.y - 5, 7, 4);
          rect(heartt.x + 3, heartt.y - 5, 7, 4);

          // mouth
          push();
            stroke(0);
            strokeWeight(3);
            point(heartt.x + 5, heartt.y + 5);
          pop();
        pop();
      }
    }
}

// Draw  Flag
function createFlag(x, y) {
  return new Flag(x, y);
}

function drawFlag() {
  for (let i = 0; i < flags.length; i++) 
    {
      const flag = flags[i];
      flag.draw();
      flag.reach();
    }
}

// Draw Platforms
function createPlatform(x, y, length, speed, moving) {
  return new Platform(x, y, length, speed, moving);
}

function drawPlatform() {
  let onAnyPlatform = false; // track if player is on any platform

  for (let i = 0; i < platforms.length; i++) 
    {
      const platform = platforms[i];
      platform.draw();
      platform.update();

      if (platform.checkContact(police.position.x, police.position.y)) 
        {
          baseLine = platform.y - 12; // set the baseline to be at platform level
          onAnyPlatform = true; // character is standing on the platform

          if (platform.moving == true) 
            {
              police.position.x += platform.incr; // character will have the same position when platform is moving
            }
        }
    }

  // If player is not on any platform, they should fall
  if (!onAnyPlatform && police.position.y < 560) 
    {
      baseLine = 560; // Default ground level
    }
}

// Draw Enemies
function createEnemies(x, y, range, type) {
  return new Enemies(x, y, range, type);
}

function drawEnemies() {
  for (let i = 0; i < enemies.length; i++) 
    {
      const enemy = enemies[i];
      enemy.draw();
      enemy.update();

      let isContact = enemy.checkContact(police.position.x, police.position.y);

      if (isContact) 
        {
          if (difficulty == "easy") 
            {
              if (lives > 0) 
                {
                  initialSetup(); // reset the game
                  scoreBoard = 0; // score board reset to zero
                  gameState = 1; // game automatically starts
                  lives--; // live decreases

                  //DEATH SOUND
                  deathSound.play();
                }
            }

          // If difficulty is medium then will restart
          else if (difficulty = "medium") 
            {
              level = 1; // level restarts to one if player dies
              lives--; // live decreases
              initialSetup(); // reset the game
              deathSound.play(); // will play the death sound
            }

          if (lives < 1) 
            {
              gameState = 6; // if live is zero then the game is over
              gameOver = true; // Will play the game over sound
            }
        }
    }
}
