function initialSetup() {
  gameChar_w = 10;
  gameChar_h = 20;

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

  platforms.push(createPlatform(200, 430, 200));
  platforms.push(createPlatform(300, 330, 300));
  platforms.push(createPlatform(850, 390, 200));
  platforms.push(createPlatform(1200, 320, 100));
  platforms.push(createPlatform(1800, 450, random(100, 500)));

  enemies = [];
  enemies.push(createEnemies(210, 415, 100));

  characterState = 0;
  gameState = 0;
  playState = 0;
  scoreBoard = 0;
  scrollPos = 0;
  police_world = police.position.x;

  //boolean
  isLeft = false;
  isRight = false;
  isJump = false;
  isFall = false;
  hasDied = false;
  gameOver = true;

  //menu
  restart_menu = {
    x: width / 2 - 150,
    y: height / 2 - 40,
    color: 255,
  };

  //ground
  ground = {
    x: -1000,
    y: 500,
  };

  backgroundSetup();
  movingObject();
}

function backgroundSetup() {
  noStroke();
  //The objects and arrays I used in the setup function are the codes that I learned from coursera

  //MOON
  moon = {
    x: 1620,
    y: 70,
  };

  // ------------ BUILDING ------------

  // --- SPIKY BUILDING
  building = {
    y: 100,
    color: random(0, 255),
  };

  building_x = [1000, 3200];

  // --- NORMAL BUILDING
  n_building = {
    y: 0,
    color: random(0, 255),
  };

  n_building_x = [-1200, -600, 1800, 4000];

  //fallen building
  f_building = {
    y: ground.y - 350,
    color: random(0, 255),
  };

  f_building_x = [170, 2500];

  //------------ TREE ------------

  trees = [];

  for (let j = -50; j < 50; j++) {
    trees.push(createTree(1030 + j * 500, 475));
  }

  //------------ CANYON ------------

  canyons = [];

  for (let i = 0; i < 3; i++) {
    canyons.push(
      createCanyon(
        random(200 + i * 600, 600 + i * 700),
        500,
        random(150 + i * 100, 300 + i * 60)
      )
    );
  }

  // ------------ LAMP ------------
  lamps = [];

  for (let i = 0; i < 100; i++) {
    // let lamp = drawLamp(-660 + i * 500, 480);
    lamps.push(createLamp(-660 + i * 500, 480));
  }

  //------------ COIN BOARD ------------
  board = {
    x: 50,
    y: 50,
  };

  // ------------ MOUNTAIN ------------
  mountain = {
    x: 1000,
    y: ground.y,
  };

  // ------------ COLLECTABLE ITEM ------------

  // ------- COIN
  coins = [
    {
      x: random(200, 600),
      y: 540,
      coin_collect: false,
    },
    {
      x: random(400, 800),
      y: 540,
      coin_collect: false,
    },
    {
      x: random(850, 1000),
      y: 540,
      coin_collect: false,
    },
    {
      x: random(1050, 1400),
      y: 540,
      coin_collect: false,
    },
    {
      x: random(1500, 2000),
      y: 540,
      coin_collect: false,
    },
  ];

  coin_speed = 0.2;

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

function movingObject() {
  //------------ CLOUD ------------

  //Technique I used From the Coursera which are objects inside of an array
  clouds = [
    {
      x: random(60, 90),
      y: random(20, 70),
      size: random(40, 60),
    },
    {
      x: random(140, 190),
      y: random(6, 130),
      size: random(60, 80),
    },
    {
      x: random(0, 80),
      y: random(100, 180),
      size: random(70, 90),
    },
  ];

  //------------ LAVA BALL ------------
  // lball = [
  //   {
  //     x: canyon[0].x + 50,
  //     y: canyon[0].y + 200,
  //   },
  //   {
  //     x: canyon[1].x + 50,
  //     y: canyon[1].y + 200,
  //   },
  //   {
  //     x: canyon[2].x + 50,
  //     y: canyon[2].y + 200,
  //   },
  // ];
}

function drawBuilding() {
  // ------------ SPIKY BUILDING ------------

  //Using the loop function learned from Coursera to duplicate buildings and its spike (triangle). Then I developed my own objects such as spiky buildings, lamps, and normal building.

  for (let i = 0; i < building_x.length; i++) {
    fill(f_building.color + i * 10, 104, 68);
    rect(building_x[i], building.y, 500, 500);

    //door
    fill(142, 72, 46);
    rect(building_x[i] + 215, building.y + 280, 70, 100);

    fill(140);
    ellipse(building_x[i] + 230, building.y + 320, 10);

    //window
    fill(255, 215, 0);
    rect(building_x[i] + 60, building.y + 170, 60);
    rect(building_x[i] + 200, building.y + 170, 100, 60);
    rect(building_x[i] + 380, building.y + 170, 60);

    rect(building_x[i] + 60, building.y + 50, 60);
    rect(building_x[i] + 200, building.y + 50, 100, 60);
    rect(building_x[i] + 380, building.y + 50, 60);

    //triangles (spike)
    for (let j = 0; j < 5; j++) {
      fill(f_building.color + i * 10, 104, 68);
      triangle(
        building_x[i] + 50 + j * 100,
        building.y - 50,
        building_x[i] + j * 100,
        building.y,
        building_x[i] + 100 + j * 100,
        building.y
      );
    }
  }
}

function drawNormalBuilding() {
  // ------------ NORMAL BUILDING ------------

  for (let i = 0; i < n_building_x.length; i++) {
    push();
    fill(230, n_building.color + i * 10, 50);
    rect(n_building_x[i], n_building.y, 500, 700);

    //door
    fill(142, 72, 46);
    rect(n_building_x[i] + 215, n_building.y + 380, 70, 100);
    fill(140);
    ellipse(n_building_x[i] + 230, n_building.y + 420, 10);

    //window
    fill(255, 215, 0);
    rect(n_building_x[i] + 60, n_building.y + 290, 60);
    rect(n_building_x[i] + 200, n_building.y + 290, 100, 60);
    rect(n_building_x[i] + 380, n_building.y + 290, 60);

    fill(255, 215, 0);
    rect(n_building_x[i] + 60, n_building.y + 170, 60);
    rect(n_building_x[i] + 200, n_building.y + 170, 100, 60);
    rect(n_building_x[i] + 380, n_building.y + 170, 60);

    rect(n_building_x[i] + 60, n_building.y + 50, 60);
    rect(n_building_x[i] + 200, n_building.y + 50, 100, 60);
    rect(n_building_x[i] + 380, n_building.y + 50, 60);
    pop();
  }
}

function drawFallenBuilding() {
  //------------ FALLEN BUILDING ------------

  for (let j = 0; j < f_building_x.length; j++) {
    fill(f_building.color + j * 10, 104, 68);
    rect(f_building_x[j], f_building.y, 500, 400);

    //window
    //first row
    for (let i = 0; i < 4; i++) {
      fill(255, 215, 0);
      rect(f_building_x[j] + 50 + i * 100, f_building.y + 40, 50);
    }

    //second row
    for (let i = 0; i < 4; i++) {
      fill(255, 215, 0);
      rect(f_building_x[j] + 50 + i * 100, f_building.y + 140, 50, 70);
    }

    //third row
    for (let i = 0; i < 4; i++) {
      rect(f_building_x[j] + 50 + i * 100, f_building.y + 250, 50);
    }

    //triangle spike
    for (let i = 0; i < 4; i++) {
      fill(f_building.color + j * 10, 104, 68);
      triangle(
        f_building_x[j] + 550,
        f_building.y + 50 + i * 100,
        f_building_x[j] + 500,
        f_building.y + i * 100,
        f_building_x[j] + 500,
        f_building.y + 100 + i * 100
      );
    }
  }
}

function streetRoad() {
  //------------ STREET ROAD ------------
  fill(211);
  rect(ground.x - 2000, ground.y - 35, 9000, 50);

  // ---- ROAD
  fill(35);
  rect(ground.x - 2000, ground.y, 7000, 170);

  //----- YELLOW ROAD
  fill(255, 214, 85);
  for (i = -1000; i < 9000; i += 250) {
    rect(ground.x + 100 + i, ground.y + 75, 100, 20);
  }

  //DIRT
  fill(139, 69, 19);
  rect(-2000, 670, 10000, 180);
}

function drawCloud() {
  // ------------ CLOUD ------------

  for (let i = 0; i < clouds.length; i++) {
    fill(255);

    let cloud = clouds[i];

    //STRUCTURE
    ellipse(cloud.x - 10, cloud.y, cloud.size);
    ellipse(cloud.x + 9, cloud.y + 15, cloud.size + 65, cloud.size + 10);

    ellipse(cloud.x + 25, cloud.y - 1, cloud.size + 15);
    ellipse(cloud.x - 10, cloud.y + 20, cloud.size);
    ellipse(cloud.x + 30, cloud.y + 20, cloud.size);

    push();
    strokeWeight(2);
    stroke(0);
    noFill();

    line(cloud.x - 65, cloud.y + 25, cloud.x - 80, cloud.y + 25);
    line(cloud.x - 65, cloud.y + 35, cloud.x - 80, cloud.y + 35);
    pop();
  }
}

function drawMovingCloud() {
  // ------------ CLOUD ANIMATION

  for (let i = 0; i < clouds.length; i++) {
    let cloud = clouds[i];
    if (gameState == 1) {
      cloud.x += i + 2;
    }

    //CLOUD RESET (if press new game it will set to default position)

    // I improvised this so that when the game reset (gamestate = 0) it will go back to the normal position as if I refreshed the page

    // if (gameState == 0) {
    //   cloud.x = 200 - i * 50;
    // }

    //CLOUD LOOP
    if (cloud.x > 1800) {
      cloud.x = -100;
      cloud.y = random(20, 180);
    }
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

function drawTree(x, y) {
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

function drawMountain() {
  // ------------ MOUNTAIN ------------

  // I made the mountain to be the background which stays static if the screen side scrolls to the left of the right

  push();
  stroke(0);
  fill(118, 129, 214);
  triangle(
    mountain.x + 250,
    mountain.y,
    mountain.x + 650,
    mountain.y,
    mountain.x + 450,
    mountain.y - 350
  );
  fill(255);
  triangle(
    mountain.x + 420,
    mountain.y - 300,
    mountain.x + 480,
    mountain.y - 300,
    mountain.x + 450,
    mountain.y - 350
  );
  pop();

  push();
  stroke(0);
  fill(118, 129, 214);
  triangle(
    mountain.x - 150,
    mountain.y,
    mountain.x + 180,
    mountain.y,
    mountain.x + 40,
    mountain.y - 350
  );
  fill(255);
  triangle(
    mountain.x + 13,
    mountain.y - 300,
    mountain.x + 60,
    mountain.y - 300,
    mountain.x + 40,
    mountain.y - 350
  );
  pop();

  push();
  fill(118, 129, 214);
  triangle(
    mountain.x,
    mountain.y,
    mountain.x + 600,
    mountain.y,
    mountain.x + 300,
    mountain.y - 450
  );
  fill(255);
  triangle(
    mountain.x + 247,
    mountain.y - 370,
    mountain.x + 352,
    mountain.y - 370,
    mountain.x + 300,
    mountain.y - 450
  );
  pop();
}

function Lamp(x, y) {
  this.x = x;
  this.y = y;
  this.draw = function () {
    push();
    fill(35);

    beginShape();
    vertex(this.x, this.y);
    vertex(this.x + 5, this.y - 25);
    vertex(this.x + 30, this.y - 25);
    vertex(this.x + 35, this.y);
    endShape();

    rect(this.x + 12, this.y - 100, 10, 80);
    rect(this.x + 2, this.y - 100, 30, 5);
    rect(this.x - 3, this.y - 103, 40, 5);

    beginShape();
    vertex(this.x + 5, this.y - 103);
    vertex(this.x + 3, this.y - 130);
    vertex(this.x + 33, this.y - 130);
    vertex(this.x + 29, this.y - 103);
    endShape();

    //lamp
    fill(255, 215, 0);
    beginShape();
    vertex(this.x + 8, this.y - 125);
    vertex(this.x + 27, this.y - 125);
    vertex(this.x + 25, this.y - 108);
    vertex(this.x + 10, this.y - 108);
    endShape();

    fill(35);
    rect(this.x - 3, this.y - 130, 40, 5);
    rect(this.x + 2, this.y - 133, 30, 5);
    ellipse(this.x + 16, this.y - 134, 10);

    pop();
  };
}

function createLamp(x, y) {
  return new Lamp(x, y);
}

function drawLamp(x, y) {
  // ------------ LAMP ------------
  //I made the lamp by myself with a lamp reference from google -> https://www.shutterstock.com/search/street-lamp-drawing
  //Same like the tree, I duplicated a lot of times

  for (let i = 0; i < lamps.length; i++) {
    const lamp = lamps[i];
    lamp.draw();
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
    //CANYON FALLING
    if (
      police_world >= this.x + 40 &&
      police_world <= this.x + this.width - 30 &&
      police.position.y >= this.y + 50
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
      this.lx += 0.5;
    }
    if (gameState == 1) {
      this.lx += 0.5;
    }
    if (this.lx > this.x + this.width - 90) {
      this.lx = this.x + 40;
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

// ------------ COLLECTABLE ------------

function drawCoin(t_coin) {
  // ------------ COIN ------------

  // I made the structure of the coin by myself. However I used the coursera concept so that when the coin is collected then it will dissappear. I improvised a little bit by making the coin collect board to keep track of the collected coins

  for (let i = 0; i < coins.length; i++) {
    if (t_coin[i].coin_collect == false) {
      push();
      stroke(0);
      fill(255, 140, 0);
      ellipse(t_coin[i].x, t_coin[i].y, 35);
      fill(255, 215, 0);
      ellipse(t_coin[i].x, t_coin[i].y, 35 - 10);
      strokeWeight(2);
      beginShape();
      vertex(t_coin[i].x + 2, t_coin[i].y - 8);
      vertex(t_coin[i].x - 2, t_coin[i].y - 3);
      vertex(t_coin[i].x + 2, t_coin[i].y + 2);
      vertex(t_coin[i].x - 2, t_coin[i].y + 7);
      endShape();
      pop();

      //COIN COLLECT & SCORE

      let d = dist(
        police_world,
        police.position.y,
        t_coin[i].x,
        t_coin[i].y + 10
      );

      if (d < 38) {
        t_coin[i].coin_collect = true; // coin becomes invisible
        scoreBoard += 1;
        coinSound.play();
      }
    }

    //COIN RESET
    if (gameState == 0) {
      t_coin[i].coin_collect = false; //the coin can be seen
    }

    if (gameState == 1) {
      // works when game is not in a pause state

      //COIN ANIMATION
      t_coin[i].y += coin_speed;

      if (t_coin[i].y >= 540) {
        coin_speed *= -1;
      }

      if (t_coin[i].y <= 510) {
        coin_speed *= -1;
      }
    }
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
  text("Score =    " + scoreBoard, board.x + 20, board.y + 40);
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
        gameState = 4; // win the game
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
      p_y <= this.y + 10
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
    if (d < 20) {
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
      if (lives > 0) {
        initialSetup();
        gameState = 1;
        lives--;
      }

      if (lives < 1) {
        gameState = 5; // if live is zero then the game is over
      }
    }
  }
}
