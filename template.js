// Building (With Spikes)
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

// Normal Building (No Spikes)
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

// Fallen Building
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

// Clouds
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

// Tree
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

// Mountains
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

// Lamps
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

// Canyons
function Canyon(x, y, width) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.lx = this.x + 50;
  this.ly = this.y + 200;
  this.waveOffset = random(100); // Random offset for unique waves

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
      police.position.x >= this.x + 40 &&
      police.position.x <= this.x + this.width - 30 &&
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
    if (gameState == 1) {
      for (let i = 0; i < this.width - 45; i += 5) {
        let waveY =
          this.y + 200 + sin(frameCount * 0.1 + this.waveOffset + i * 0.1) * 5; // make the wavy waves

        fill(255, 50, 0);
        noStroke();
        rect(this.x + i + 20, waveY + 10, 11, 250);
      }
    } else {
      fill(255, 50, 0);
      rect(this.x + 20, 720, this.width - 40, 200);
    }
  };
}

// Coins
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
      let d = dist(police.position.x, police.position.y, this.x, this.currentY);

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

// Flags
function Flag(x, y) {
  this.x = x;
  this.y = y;
  this.speed = 1;
  this.isReach = false;
  this.poleX = x;
  this.poleY = y;

  this.draw = function () {
    //pole
    push();
    stroke(150);
    strokeWeight(10);
    line(this.poleX, this.poleY, this.poleX, this.poleY - 300);
    pop();

    if (this.isReach == false) {
      // PRISONER FLAG

      fill(255, 153, 51);
      rect(this.x, this.y - 300, 100, 60);

      fill(200);
      ellipse(this.x + 50, this.y - 270, 45);

      fill(0);
      ellipse(this.x + 40, this.y - 275, 10);
      ellipse(this.x + 60, this.y - 275, 10);
      triangle(
        this.x + 45,
        this.y - 265,
        this.x + 55,
        this.y - 265,
        this.x + 50,
        this.y - 275
      );

      for (let i = 0; i < 3; i++) {
        triangle(
          this.x + 39 + i * 7,
          this.y - 257,
          this.x + 49 + i * 7,
          this.y - 257,
          this.x + 44 + i * 7,
          this.y - 262
        );
        triangle(
          this.x + 39 + i * 7,
          this.y - 257,
          this.x + 49 + i * 7,
          this.y - 257,
          this.x + 44 + i * 7,
          this.y - 252
        );
      }
    } else {
      //POLICE FLAG

      push();

      fill(0, 139, 139);
      rect(this.x, this.y - 300, 100, 60);

      //head
      fill(255, 228, 196);
      ellipse(this.x + 50, this.y - 270, 40);

      //eye
      fill(0);
      rect(this.x + 38, this.y - 276, 10, 5);
      rect(this.x + 53, this.y - 276, 10, 5);

      //mouth
      stroke(0);
      strokeWeight(5);
      point(this.x + 53, this.y - 263);

      pop();
    }
  };

  this.reach = function () {
    if (gameState == 1) {
      let d = abs(police.position.x - this.x); // distance between characters & flag

      if (d < 10) {
        if (this.y >= 560 && this.y <= 800 && this.isReach == false) {
          this.y += 1;
        } //if character is within the distance, it will move the flag down

        if (this.y >= 800) {
          this.isReach = true; // turn the flag into police flag
        }

        if (this.isReach == true && this.y < 1000 && this.y >= 560) {
          this.y -= 1; //move the police flag up
          if (this.y <= 560) {
            if (level < 5) {
              gameState = 5; // Next level
              gameWinSound.play();
            } else {
              gameState = 4; // Win the game
              gameWinSound.play();
            }
          }
        }
      } else {
        this.isReach = false; // turn into prisoner flag
        this.y -= 1; //move it up
        if (this.y <= 560) {
          this.y += 1;
        }

        if (this.isReach && this.y >= 560 && this.y <= 800) {
          this.y += 1; //if its police flag, then it will go down
        }
      }
    }
  };
}

// Platforms
function Platform(x, y, length, speed, moving) {
  this.x = x;
  this.y = y;
  this.currentX = x;
  this.length = length;
  this.moving = moving;
  this.incr = (1 / 2) * speed;
  this.speed = (1 / 2) * speed;

  this.draw = function () {
    push();
    fill(105);
    stroke(0);
    strokeWeight(1);
    rect(this.currentX, this.y, this.length, 25, 50);
    pop();
  };

  this.update = function () {
    if (gameState == 1) {
      if (this.moving) {
        this.currentX += this.incr;
        if (this.currentX > this.x + 100) {
          this.incr = -this.speed;
        } else if (this.currentX < this.x) {
          this.incr = this.speed;
        }
      }
    }
  };

  this.checkContact = function (p_x, p_y) {
    if (
      p_x > this.currentX - 10 &&
      p_x < this.currentX + this.length + 5 &&
      p_y >= this.y - 12 &&
      p_y <= this.y + 5
    ) {
      return true; // Character is on this platform
    }
    return false;
  };
}

// Enemies
function Enemies(x, y, range, type) {
  this.x = x;
  this.y = y;
  this.range = range;

  this.handDeg = 35;
  this.handDirection = 0.5;

  this.currentX = x;
  this.type = type;
  this.speed = 0;
  this.incr = 0;

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

      if (this.type == "red") {
        this.speed = 1;
      } else if (this.type == "blue") {
        this.speed = 3;
      } else {
        this.speed = 5;
      }

      if (this.currentX >= this.x + this.range) {
        this.incr = -this.speed;
      } else if (this.currentX <= this.x) {
        this.incr = this.speed;
      }

      this.updateHand(); //hand animation
    }
  };

  this.draw = function () {
    if (this.incr >= 1) {
      enemyTurnRight(this.currentX, this.y, this.handDeg, this.type);
    } else if (this.incr <= -1) {
      enemyTurnLeft(this.currentX, this.y, this.handDeg, this.type);
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
