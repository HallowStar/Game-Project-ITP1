function initialSetup() {
  baseLine = 560;

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

  platforms = [];

  enemies = [];

  scrollPos = 0;
  police_world = police.position.x;

  //boolean
  isLeft = false;
  isRight = false;
  isJump = false;
  isFall = false;
  hasDied = false;

  backgroundSetup();

  if (level == 1) {
    levelOne();
  } else if (level == 2) {
    gameState = 1;
    levelTwo();
  } else if (level == 3) {
    gameState = 1;
    levelThree();
  } else if (level == 4) {
    gameState = 1;
    levelFour();
  } else if (level == 5) {
    levelFive();
  }
}

function backgroundSetup() {
  noStroke();
  //The objects and arrays I used in the setup function are the codes that I learned from coursera

  // ------------ MOON ------------
  moon = {
    x: 1620,
    y: 70,
  };

  // ------------ BUILDING ------------

  // --- SPIKY BUILDING
  buildings = [];

  buildings.push(createBuilding(1000, 100, random(0, 255)));
  buildings.push(createBuilding(3200, 100, random(0, 255)));

  // NORMAL BUILDING

  building_x = [1000, 3200];

  n_buildings = [];
  n_buildings.push(createNormalBuilding(-1200, 0));
  n_buildings.push(createNormalBuilding(-600, 0));
  n_buildings.push(createNormalBuilding(1800, 0));
  n_buildings.push(createNormalBuilding(4000, 0));

  //FALLEN BUILDING

  f_buildings = [];

  f_buildings.push(createFallenBuilding(170, 150));
  f_buildings.push(createFallenBuilding(2500, 150));

  //------------ TREE ------------

  trees = [];

  for (let j = -50; j < 50; j++) {
    trees.push(createTree(1030 + j * 500, 475));
  }

  //------------ CANYON ------------

  canyons = [];

  // ------------ LAMP ------------
  lamps = [];

  for (let i = 0; i < 100; i++) {
    lamps.push(createLamp(-660 + i * 500, 480));
  }

  //------------ COIN BOARD ------------

  board = {
    x: 50,
    y: 50,
  };

  // ------------ MOUNTAIN ------------

  mountains = [];

  mountains.push(createMountain(100, 500));
  mountains.push(createMountain(1000, 500));

  // ------------ COLLECTABLE ITEM ------------

  // ------- COIN

  coins = [];

  // ------- CLOUD

  // clouds = [
  //   {
  //     x: random(60, 90),
  //     y: random(20, 70),
  //     size: random(40, 60),
  //   },
  //   {
  //     x: random(140, 190),
  //     y: random(6, 130),
  //     size: random(60, 80),
  //   },
  //   {
  //     x: random(0, 80),
  //     y: random(100, 180),
  //     size: random(70, 90),
  //   },
  // ];

  clouds = [];

  clouds.push(createCloud(random(60, 90), random(20, 70), random(40, 60)));
  clouds.push(createCloud(random(140, 190), random(6, 130), random(60, 80)));
  clouds.push(createCloud(random(0, 80), random(100, 180), random(70, 90)));
  clouds.push(createCloud(random(70, 120), random(100, 180), random(70, 90)));

  // ------------ Live Board -----------
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

  // FLAG
  flag = {
    x: 2500,
    y: 560,
    speed: 1,
    isReach: false,
  };

  // FLAG POLE
  pole = {
    x: flag.x,
    y: flag.y,
  };
}

function Building(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;

  this.draw = function () {
    // Building Body
    fill(this.color, 104, 68);
    rect(this.x, this.y, 500, 500);

    // Door
    fill(142, 72, 46);
    rect(this.x + 215, this.y + 280, 70, 100);

    fill(140);
    ellipse(this.x + 230, this.y + 320, 10);

    // Windows
    fill(255, 215, 0);
    rect(this.x + 60, this.y + 170, 60);
    rect(this.x + 200, this.y + 170, 100, 60);
    rect(this.x + 380, this.y + 170, 60);

    rect(this.x + 60, this.y + 50, 60);
    rect(this.x + 200, this.y + 50, 100, 60);
    rect(this.x + 380, this.y + 50, 60);

    // Triangles (spikes on the top)
    for (let j = 0; j < 5; j++) {
      fill(this.color, 104, 68);
      triangle(
        this.x + 50 + j * 100,
        this.y - 50,
        this.x + j * 100,
        this.y,
        this.x + 100 + j * 100,
        this.y
      );
    }
  };
}

function createBuilding(x, y, color) {
  return new Building(x, y, color);
}

function drawBuildings() {
  for (let i = 0; i < buildings.length; i++) {
    const building = buildings[i];
    building.draw();
  }
}

function NormalBuilding(x, y) {
  this.x = x; // X position of the building
  this.y = y; // Y position of the building

  // Hardcoded properties for the building
  this.width = 500; // Hardcoded width of the building
  this.height = 700; // Hardcoded height of the building
  this.color = random(0, 255); // Random color for each building

  this.draw = function () {
    push();
    fill(230, this.color, 50);
    rect(this.x, this.y, this.width, this.height);

    // Door
    fill(142, 72, 46);
    rect(this.x + this.width / 2 - 35, this.y + 380, 70, 100); // Centered Door
    fill(140);
    ellipse(this.x + this.width / 2, this.y + 420, 10); // Door Knob

    // Windows
    fill(255, 215, 0);
    rect(this.x + 60, this.y + 290, 60);
    rect(this.x + 200, this.y + 290, 100, 60);
    rect(this.x + 380, this.y + 290, 60);

    rect(this.x + 60, this.y + 170, 60);
    rect(this.x + 200, this.y + 170, 100, 60);
    rect(this.x + 380, this.y + 170, 60);

    rect(this.x + 60, this.y + 50, 60);
    rect(this.x + 200, this.y + 50, 100, 60);
    rect(this.x + 380, this.y + 50, 60);

    pop();
  };
}

function createNormalBuilding(x, y) {
  return new NormalBuilding(x, y);
}

function drawNormalBuildings() {
  for (let i = 0; i < n_buildings.length; i++) {
    const building = n_buildings[i];
    building.draw();
  }
}

function FallenBuilding(x, y) {
  this.x = x;
  this.y = y;

  // Hardcoded properties for the fallen building
  this.width = 500;
  this.height = 400;
  this.color = random(0, 255);

  this.draw = function () {
    push();
    fill(this.color, 104, 68);
    rect(this.x, this.y, this.width, this.height);

    // First row of windows
    for (let i = 0; i < 4; i++) {
      fill(255, 215, 0);
      rect(this.x + 50 + i * 100, this.y + 40, 50);
    }

    // Second row of windows
    for (let i = 0; i < 4; i++) {
      fill(255, 215, 0);
      rect(this.x + 50 + i * 100, this.y + 140, 50, 70);
    }

    // Third row of windows
    for (let i = 0; i < 4; i++) {
      rect(this.x + 50 + i * 100, this.y + 250, 50);
    }

    // Triangle spikes (4 spikes)
    for (let i = 0; i < 4; i++) {
      fill(this.color, 104, 68);
      triangle(
        this.x + 550,
        this.y + 50 + i * 100,
        this.x + 500,
        this.y + i * 100,
        this.x + 500,
        this.y + 100 + i * 100
      );
    }
    pop();
  };
}

function createFallenBuilding(x, y) {
  return new FallenBuilding(x, y);
}

function drawFallenBuildings() {
  for (let i = 0; i < f_buildings.length; i++) {
    const building = f_buildings[i];
    building.draw();
  }
}

function streetRoad() {
  //------------ STREET ROAD ------------
  fill(211);
  rect(-3000, 465, 9000, 50);

  // ---- ROAD
  fill(35);
  rect(-3000, 500, 7000, 170);

  //----- YELLOW ROAD
  fill(255, 214, 85);
  for (i = -1000; i < 9000; i += 250) {
    rect(-900 + i, 575, 100, 20);
  }

  //DIRT
  fill(139, 69, 19);
  rect(-2000, 670, 10000, 180);
}

function Cloud(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = random(2, 5);

  // Draw method for rendering the cloud
  this.draw = function () {
    fill(255);
    // STRUCTURE of cloud
    ellipse(this.x - 10, this.y, this.size);
    ellipse(this.x + 9, this.y + 15, this.size + 65, this.size + 10);
    ellipse(this.x + 25, this.y - 1, this.size + 15);
    ellipse(this.x - 10, this.y + 20, this.size);
    ellipse(this.x + 30, this.y + 20, this.size);

    push();
    strokeWeight(2);
    stroke(0);
    noFill();
    line(this.x - 65, this.y + 25, this.x - 80, this.y + 25);
    line(this.x - 65, this.y + 35, this.x - 80, this.y + 35);
    pop();
  };

  // Method to animate the cloud's movement
  this.move = function () {
    if (gameState == 1) {
      this.x += this.speed; // Cloud speed
    }

    // Cloud loop
    if (this.x > 1800) {
      this.x = -100;
      this.y = random(20, 180); // Reset y to a new random position
    }
  };
}

function createCloud(x, y, size) {
  return new Cloud(x, y, size);
}

function drawCloud() {
  for (let i = 0; i < clouds.length; i++) {
    clouds[i].draw();
    clouds[i].move();
  }
}

function Tree(x, y) {
  this.x = x;
  this.y = y;
  this.draw = function () {
    push();
    stroke(0);
    fill(160, 82, 45);
    rect(this.x + 15, this.y + 1, 120, 10);
    pop();

    // ------------ ROCKS
    for (let i = 0; i < 10; i++) {
      push();
      noFill();
      stroke(0);
      rect(this.x + i * 15, this.y - 4, 15, 5);
      pop();
    }

    push();
    noFill();
    stroke(0);
    rect(this.x, this.y + 1, 15, 5);
    pop();

    push();
    noFill();
    stroke(0);
    rect(this.x, this.y + 6, 15, 5);
    pop();

    push();
    noFill();
    stroke(0);
    rect(this.x, this.y + 11, 15, 5);
    pop();

    for (let i = 0; i < 10; i++) {
      push();
      noFill();
      stroke(0);
      rect(this.x + i * 15, this.y + 11, 15, 5);
      pop();
    }

    push();
    noFill();
    stroke(0);
    rect(this.x + 135, this.y + 1, 15, 5);
    pop();

    push();
    noFill();
    stroke(0);
    rect(this.x + 135, this.y + 6, 15, 5);
    pop();

    push();
    noFill();
    stroke(0);
    rect(this.x + 135, this.y + 11, 15, 5);
    pop();

    //TREE STRUCTURE

    //STEM
    push();
    fill(110, 67, 0);
    rect(this.x + 60, this.y - 78, 30, 85);
    pop();

    //LEAVES
    push();
    fill(8, 112, 0);
    triangle(
      this.x + 30,
      this.y - 70,
      this.x + 120,
      this.y - 70,
      this.x + 75,
      this.y - 120
    );
    triangle(
      this.x + 40,
      this.y - 100,
      this.x + 110,
      this.y - 100,
      this.x + 75,
      this.y - 140
    );
    triangle(
      this.x + 50,
      this.y - 120,
      this.x + 100,
      this.y - 120,
      this.x + 75,
      this.y - 160
    );
    pop();
  };
}

function createTree(x, y) {
  return new Tree(x, y);
}

function drawTree() {
  //------------ TREE ------------
  //Using the loop method I learned from Coursera, I looped the trees a lot of times to make it as if there are infinite amount of trees

  for (let i = 0; i < trees.length; i++) {
    const tree = trees[i];
    tree.draw();
  }
}

function drawMoon() {
  // ------------ MOON ------------

  // I add more objects to the background by adding this moon I created with additional transparency learned from Coursera
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

function Mountain(x, y) {
  this.x = x;
  this.y = y;

  this.draw = function () {
    push();

    // Main mountain body (color for the mountain)

    fill(118, 129, 214); // Main mountain color (blue-ish)
    triangle(
      this.x + 250, // Left peak x
      this.y, // Base y
      this.x + 650, // Right base x
      this.y, // Base y
      this.x + 450, // Center top x
      this.y - 350 // Top peak y
    );

    // Snowy cap on the left side (color for snow)
    fill(255); // Snow color (white)
    triangle(
      this.x + 420, // Left cap x
      this.y - 300, // Cap y
      this.x + 480, // Right cap x
      this.y - 300, // Cap y
      this.x + 450, // Center cap x
      this.y - 350 // Cap y
    );

    // Right side of the mountain (color for the mountain)
    fill(118, 129, 214); // Main mountain color (blue-ish)
    triangle(
      this.x - 150, // Left base x
      this.y, // Base y
      this.x + 180, // Right base x
      this.y, // Base y
      this.x + 40, // Center right peak x
      this.y - 350 // Peak y
    );

    // Snowy cap on the right side (color for snow)
    fill(255); // Snow color (white)
    triangle(
      this.x + 13, // Left cap x
      this.y - 300, // Cap y
      this.x + 60, // Right cap x
      this.y - 300, // Cap y
      this.x + 40, // Center cap x
      this.y - 350 // Cap y
    );

    // Main body of the mountain (color for the mountain)
    fill(118, 129, 214); // Main mountain color (blue-ish)
    triangle(
      this.x, // Left base x
      this.y, // Base y
      this.x + 600, // Right base x
      this.y, // Base y
      this.x + 300, // Peak x
      this.y - 450 // Peak y
    );

    // Snowy peak (color for snow)
    fill(255); // Snow color (white)
    triangle(
      this.x + 247, // Left cap x
      this.y - 370, // Cap y
      this.x + 352, // Right cap x
      this.y - 370, // Cap y
      this.x + 300, // Center peak x
      this.y - 450 // Peak y
    );

    pop();
  };
}

function createMountain(x, y) {
  return new Mountain(x, y);
}

function drawMountain() {
  for (let i = 0; i < mountains.length; i++) {
    const mountain = mountains[i];
    mountain.draw();
  }
}

function Lamp(x, y) {
  this.x = x; // Center of the lamp base
  this.y = y;

  this.draw = function () {
    push();
    fill(35);

    // Adjusting offsets to center the lamp on this.x
    beginShape();
    vertex(this.x - 15, this.y); // Left base
    vertex(this.x - 10, this.y - 25);
    vertex(this.x + 10, this.y - 25);
    vertex(this.x + 15, this.y); // Right base
    endShape();

    // Pole
    rect(this.x - 5, this.y - 100, 10, 80);

    // Upper supports
    rect(this.x - 13, this.y - 100, 26, 5);
    rect(this.x - 18, this.y - 103, 36, 5);

    // Top shape
    beginShape();
    vertex(this.x - 11, this.y - 103);
    vertex(this.x - 13, this.y - 130);
    vertex(this.x + 13, this.y - 130);
    vertex(this.x + 11, this.y - 103);
    endShape();

    // Lamp light
    fill(255, 215, 0);
    beginShape();
    vertex(this.x - 8, this.y - 125);
    vertex(this.x + 8, this.y - 125);
    vertex(this.x + 7, this.y - 108);
    vertex(this.x - 7, this.y - 108);
    endShape();

    // Top cap
    fill(35);
    rect(this.x - 18, this.y - 130, 36, 5);
    rect(this.x - 13, this.y - 133, 26, 5);
    ellipse(this.x, this.y - 134, 10);

    pop();
  };
}

function createLamp(x, y) {
  return new Lamp(x, y);
}

function drawLamp() {
  for (let i = 0; i < lamps.length; i++) {
    lamps[i].draw();
  }
}

function Canyon(x, y, width) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.lx = this.x + 50;
  this.ly = this.y + 200;

  //structure
  this.draw = function () {
    fill(139, 69, 19);
    rect(this.x, this.y, this.width, 175);

    push();
    stroke(0);
    strokeWeight(3);
    line(this.x + 18, this.y + 170, this.x + 18, this.y + 500);
    line(
      this.x + this.width - 18,
      this.y + 170,
      this.x + this.width - 18,
      this.y + 500
    );
    pop();

    // SPIKE LEFT
    for (let j = 0; j < 160; j += 20) {
      fill(35);
      triangle(
        this.x + 25,
        this.y + 10 + j,
        this.x,
        this.y + j,
        this.x,
        this.y + 20 + j
      );
    }
    triangle(
      this.x + 25,
      this.y + 170,
      this.x,
      this.y + 160,
      this.x,
      this.y + 170
    );

    //SPIKE RIGHT
    for (j = 0; j < 160; j += 20) {
      fill(35);
      triangle(
        this.x + this.width - 25,
        this.y + 10 + j,
        this.x + this.width,
        this.y + j,
        this.x + this.width,
        this.y + 20 + j
      );
    }

    triangle(
      this.x + this.width - 25,
      this.y + 170,
      this.x + this.width,
      this.y + 160,
      this.x + this.width,
      this.y + 170
    );
  };

  this.func = function () {
    //CANYON FALLING (use +40, -30 because there are spikes )
    if (
      police_world >= this.x + 40 &&
      police_world <= this.x + this.width - 30 &&
      police.position.y >= this.y
    ) {
      baseLine = 900;
      isJump = false; // cannot jump
      isFall = true; // falling animation
      isRight = false; // -- cannot move left or right
      isLeft = false;
      police.position.y += 10; // -- falling
    }
  };

  this.drawL = function () {
    fill(234, 92, 15);
    rect(this.x + 20, this.y + 200, this.width - 40, 200);
    ellipse(this.lx, this.ly, 30);
    ellipse(this.lx + 50, this.ly, 30);
  };

  this.lavaMove = function () {
    if (gameState == 1) {
      this.lx += 0.5; //lava ball moving

      if (this.lx > this.x + this.width - 90) {
        this.lx = this.x + 40; //
      }
    }

    if (gameState == 0) {
      this.lx = this.x + 50;
    }
  };
}

function createCanyon(x, y, width) {
  return new Canyon(x, y, width);
}

function drawCanyon() {
  for (let i = 0; i < canyons.length; i++) {
    const canyon = canyons[i];
    canyon.draw();
    canyon.func();
  }
}

function drawLava() {
  for (let i = 0; i < canyons.length; i++) {
    const canyon = canyons[i];
    canyon.drawL();
    canyon.lavaMove();
  }
}

function Coin(x, y, collect) {
  this.x = x;
  this.y = y;
  this.collect = collect;
  this.currentY = y;
  this.range = 10;
  this.incr = 0.5;

  this.draw = function () {
    if (this.collect == false) {
      push();

      stroke(0);

      fill(255, 140, 0);
      ellipse(this.x, this.currentY, 35);

      fill(255, 215, 0);
      ellipse(this.x, this.currentY, 25);

      strokeWeight(2);

      beginShape();
      vertex(this.x + 2, this.currentY - 8);
      vertex(this.x - 2, this.currentY - 3);
      vertex(this.x + 2, this.currentY + 2);
      vertex(this.x - 2, this.currentY + 7);
      endShape();

      pop();
    }
  };

  this.update = function () {
    //COIN COLLECT & SCORE

    if (this.collect == false) {
      let d = dist(police_world, police.position.y, this.x, this.currentY);

      if (d < 40) {
        this.collect = true; // coin becomes invisible
        scoreBoard += 1;
        coinSound.play();
      }
    }
  };

  //COIN RESET
  if (gameState == 1) {
    this.collect = false; //the coin can be seen
  }

  this.animation = function () {
    if (gameState == 1) {
      //COIN ANIMATION
      this.currentY += this.incr;

      if (this.currentY > this.y + this.range) {
        this.incr = -0.5;
      } else if (this.currentY <= this.y - 20) {
        this.incr = 0.5;
      }
    }
  };
}

function createCoin(x, y, collect) {
  return new Coin(x, y, collect);
}

function drawCoin() {
  for (var i = 0; i < coins.length; i++) {
    const coin = coins[i];
    coin.draw();
    coin.update();
    coin.animation();
  }
}

function drawScoreBoard() {
  // ------------ COIN COLLECTED / SCORE COUNT ------------

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

function drawLevel() {
  push();
  stroke(0);
  strokeWeight(2);
  fill(100, 149, 237);
  rect(50, 150, 145, 70);
  fill(255);
  textSize(20);
  text("Level =   " + level, 75, 190);
  pop();
}

function drawHeart() {
  for (let i = 0; i < lives; i++) {
    //When the condition is false it will appear
    let heartt = heart[i];
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

function drawFlag() {
  //pole
  push();
  stroke(150);
  strokeWeight(10);
  line(pole.x, pole.y, pole.x, pole.y - 300);
  pop();

  if (flag.isReach == false) {
    // PRISONER FLAG

    fill(255, 153, 51);
    rect(flag.x, flag.y - 300, 100, 60);

    fill(200);
    ellipse(flag.x + 50, flag.y - 270, 45);

    fill(0);
    ellipse(flag.x + 40, flag.y - 275, 10);
    ellipse(flag.x + 60, flag.y - 275, 10);
    triangle(
      flag.x + 45,
      flag.y - 265,
      flag.x + 55,
      flag.y - 265,
      flag.x + 50,
      flag.y - 275
    );

    for (let i = 0; i < 3; i++) {
      triangle(
        flag.x + 39 + i * 7,
        flag.y - 257,
        flag.x + 49 + i * 7,
        flag.y - 257,
        flag.x + 44 + i * 7,
        flag.y - 262
      );
      triangle(
        flag.x + 39 + i * 7,
        flag.y - 257,
        flag.x + 49 + i * 7,
        flag.y - 257,
        flag.x + 44 + i * 7,
        flag.y - 252
      );
    }
  } else {
    //POLICE FLAG

    push();

    fill(0, 139, 139);
    rect(flag.x, flag.y - 300, 100, 60);

    //head
    fill(255, 228, 196);
    ellipse(flag.x + 50, flag.y - 270, 40);

    //eye
    fill(0);
    rect(flag.x + 38, flag.y - 276, 10, 5);
    rect(flag.x + 53, flag.y - 276, 10, 5);

    //mouth
    stroke(0);
    strokeWeight(5);
    point(flag.x + 53, flag.y - 263);

    pop();
  }

  if (gameState == 1) {
    let d = abs(police_world - flag.x); // distance between characters & flag

    if (d < 10) {
      if (flag.y >= 560 && flag.y <= 800 && flag.isReach == false) {
        flag.y += 1;
      } //if character is within the distance, it will move the flag down

      if (flag.y >= 800) {
        flag.isReach = true; // turn the flag into police flag
      }

      if (flag.isReach == true && flag.y < 1000 && flag.y >= 560) {
        flag.y -= 1; //move the police flag up
        if (flag.y <= 560) {
          gameState = 5; // next level
          gameWinSound.play();
        }
      }
    } else {
      flag.isReach = false; // turn into prisoner flag
      flag.y -= 1; //move it up
      if (flag.y <= 560) {
        flag.y += 1;
      }

      if (flag.isReach && flag.y >= 560 && flag.y <= 800) {
        flag.y += 1; //if its police flag, then it will go down
      }
    }
  }
}

function Platform(x, y, length) {
  this.x = x;
  this.y = y;
  this.length = length;

  this.draw = function () {
    push();
    fill(105);
    stroke(0);
    strokeWeight(1);
    rect(this.x, this.y, this.length, 25, 50);
    pop();
  };

  this.checkContact = function (p_x, p_y) {
    if (
      p_x > this.x - 10 &&
      p_x < this.x + this.length + 10 &&
      p_y >= this.y - 12 &&
      p_y <= this.y + 5
    ) {
      return true; // Character is on this platform
    }
    return false;
  };
}

function createPlatform(x, y, length) {
  return new Platform(x, y, length);
}

function drawPlatform() {
  let onAnyPlatform = false; // track if player is on any platform

  for (let i = 0; i < platforms.length; i++) {
    const platform = platforms[i];
    platform.draw();

    if (platform.checkContact(police_world, police.position.y)) {
      baseLine = platform.y - 12; // set the baseline to be at platform level
      onAnyPlatform = true; // character is standing on the platform
    }
  }

  // If player is not on any platform, they should fall
  if (!onAnyPlatform && police.position.y < 560) {
    baseLine = 560; // Default ground level
  }
}

function Enemies(x, y, range) {
  this.x = x;
  this.y = y;
  this.range = range;

  this.handDeg = 35;
  this.handDirection = 0.5;

  this.currentX = x;
  this.incr = 1;

  this.updateHand = function () {
    if (this.handDeg >= 35) {
      this.handDirection = -0.5;
    } else if (this.handDeg <= -10) {
      this.handDirection = 0.5;
    }
    this.handDeg += this.handDirection;
  };

  this.update = function () {
    if (gameState == 1) {
      this.currentX += this.incr;

      if (this.currentX >= this.x + this.range) {
        this.incr = -1;
      } else if (this.currentX <= this.x) {
        this.incr = 1;
      }

      this.updateHand(); //hand animation
    }
  };

  this.draw = function () {
    if (this.incr == 1) {
      enemyTurnRight(this.currentX, this.y, this.handDeg, this.handDirection);
    } else if (this.incr == -1) {
      enemyTurnLeft(this.currentX, this.y, this.handDeg, this.handDirection);
    }
  };

  this.checkContact = function (p_x, p_y) {
    let d = dist(p_x, p_y, this.currentX, this.y);
    if (d < 30) {
      return true;
    } else {
      return false;
    }
  };
}

function createEnemies(x, y, range) {
  return new Enemies(x, y, range);
}

function drawEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    enemy.draw();
    enemy.update();

    let isContact = enemy.checkContact(police_world, police.position.y);

    if (isContact) {
      if (difficulty == "easy") {
        if (lives > 0) {
          initialSetup();
          scoreBoard = 0;
          gameState = 1;
          lives--;
          gameOver = true;

          //DEATH SOUND
          deathSound.play();
        }
        //if difficulty is medium then will restart
      } else if ((difficulty = "medium")) {
        level = 1;
        lives--;
        initialSetup();
        deathSound.play();
      }

      if (lives < 1) {
        gameState = 6; // if live is zero then the game is over
        gameOver = true;
      }
    }
  }
}
