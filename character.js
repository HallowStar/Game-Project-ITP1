function characterTurnRight() {
  //I created the character by myself based on what's in my head for the left, right, standing still & jump / fall animation

  //CHARACTER TURN RIGHT ANIMATION

  //head
  push();
  stroke(0);
  fill(255, 228, 196);
  ellipse(police.position.x, police.position.y - 55, gameChar_h + 10);

  //feet
  fill(0);

  if (police.position.y == 560) {
    if (police.legDeg >= 55) {
      police.legDirection = -2;
    } else if (police.legDeg <= -55) {
      police.legDirection = 2;
    }

    police.legDeg += police.legDirection;

    //left leg
    push();
    translate(police.position.x, police.position.y);
    rotate(radians(police.legDeg));
    fill(0);
    rect(-5, -5, gameChar_w + 1, gameChar_h - 2, 0, 0, 5, 5);
    pop();

    //right leg
    push();
    translate(police.position.x, police.position.y);
    rotate(radians(-police.legDeg));
    fill(0);
    rect(-5, -5, gameChar_w + 1, gameChar_h - 2, 0, 0, 5, 5);
    pop();
  }

  //body
  fill(70, 130, 180);
  rect(
    police.position.x - 15,
    police.position.y - 43,
    gameChar_w + 20,
    gameChar_h + 20,
    10
  );

  //eye & mouth
  push();
  fill(0);
  rect(
    police.position.x + 3,
    police.position.y - 59,
    gameChar_w - 3,
    gameChar_w - 7
  );
  stroke(0);
  strokeWeight(4);
  point(police.position.x + 8, police.position.y - 50);
  pop();

  //body
  push();
  stroke(0);
  strokeWeight(1);
  line(
    police.position.x - 13,
    police.position.y - 33,
    police.position.x + 13,
    police.position.y - 33
  );
  line(
    police.position.x - 13,
    police.position.y - 22,
    police.position.x + 13,
    police.position.y - 22
  );
  line(
    police.position.x - 13,
    police.position.y - 11,
    police.position.x + 13,
    police.position.y - 11
  );
  pop();

  //hand
  push();
  fill(17, 34, 85);
  rect(
    police.position.x - 5,
    police.position.y - 34,
    gameChar_w - 2,
    gameChar_h - 5,
    5,
    5,
    0,
    0
  );
  fill(255, 228, 196);
  rect(
    police.position.x - 4,
    police.position.y - 19,
    gameChar_w - 4,
    gameChar_w - 1,
    0,
    0,
    5,
    5
  );
  pop();

  //hat
  fill(70, 130, 180);
  rect(
    police.position.x - 7,
    police.position.y - 70,
    gameChar_w + 13,
    gameChar_h - 15,
    0,
    9,
    9,
    1
  );
  fill(17, 34, 85);
  rect(
    police.position.x - 7,
    police.position.y - 73,
    gameChar_w,
    gameChar_w - 5
  );
  pop();
}

function characterTurnLeft() {
  //CHARACTER TURN LEFT ANIMATION
  //head
  push();
  stroke(0);
  //head
  fill(255, 228, 196);
  ellipse(police.position.x, police.position.y - 55, gameChar_h + 10);

  if (police.position.y >= 700) {
    if (police.legDeg >= 55) {
      police.legDirection = -2;
    } else if (police.legDeg <= -55) {
      police.legDirection = 2;
    }

    police.legDeg += police.legDirection;

    //left leg
    push();
    translate(police.position.x, police.position.y);
    rotate(radians(police.legDeg));
    fill(0);
    rect(-5, -5, gameChar_w + 1, gameChar_h - 2, 0, 0, 5, 5);
    pop();

    //right leg
    push();
    translate(police.position.x, police.position.y);
    rotate(radians(-police.legDeg));
    fill(0);
    rect(-5, -5, gameChar_w + 1, gameChar_h - 2, 0, 0, 5, 5);
    pop();
  }

  //body
  fill(70, 130, 180);
  rect(
    police.position.x - 15,
    police.position.y - 43,
    gameChar_w + 20,
    gameChar_h + 20,
    10
  );
  //eye & mouth
  push();
  fill(0);
  rect(
    police.position.x - 9,
    police.position.y - 59,
    gameChar_w - 3,
    gameChar_w - 7
  );
  stroke(0);
  strokeWeight(4);
  point(police.position.x - 8, police.position.y + -50);
  pop();

  //shirt
  push();
  stroke(0);
  strokeWeight(1);
  line(
    police.position.x - 13,
    police.position.y - 33,
    police.position.x + 13,
    police.position.y - 33
  );
  line(
    police.position.x - 13,
    police.position.y - 22,
    police.position.x + 13,
    police.position.y - 22
  );
  line(
    police.position.x - 13,
    police.position.y - 11,
    police.position.x + 13,
    police.position.y - 11
  );
  pop();

  //hand
  push();
  fill(17, 34, 85);
  rect(
    police.position.x - 5,
    police.position.y - 34,
    gameChar_w - 2,
    gameChar_h - 5,
    5,
    5,
    0,
    0
  );
  fill(255, 228, 196);
  rect(
    police.position.x - 4,
    police.position.y - 19,
    gameChar_w - 4,
    gameChar_h - 11,
    0,
    0,
    5,
    5
  );
  pop();

  //hat
  fill(70, 130, 180);
  rect(
    police.position.x - 15,
    police.position.y - 70,
    gameChar_w + 13,
    gameChar_h - 15,
    0,
    9,
    9,
    1
  );
  fill(17, 34, 85);
  rect(
    police.position.x - 3,
    police.position.y - 73,
    gameChar_w,
    gameChar_h - 15
  );
  pop();
}

function characterJumpOrFall() {
  //CHARACTER JUMP / FALL ANIMATION
  push();
  fill(0);
  stroke(0);
  //feet
  rect(
    police.position.x - 10,
    police.position.y,
    gameChar_w - 2,
    gameChar_h - 5,
    5
  );
  rect(
    police.position.x + 3,
    police.position.y,
    gameChar_w - 2,
    gameChar_h - 5,
    5
  );

  //head
  fill(255, 228, 196);
  ellipse(police.position.x, police.position.y - 48, gameChar_h + 10);
  //body
  fill(70, 130, 180);
  rect(
    police.position.x - 15,
    police.position.y - 35,
    gameChar_w + 20,
    gameChar_h + 20,
    10
  );
  //hat
  push();
  fill(17, 34, 85);
  rect(
    police.position.x - 14,
    police.position.y - 67,
    gameChar_w + 18,
    gameChar_h - 15,
    5
  );
  pop();
  rect(
    police.position.x - 9,
    police.position.y - 63,
    gameChar_w + 8,
    gameChar_h - 15,
    5
  );
  //eye
  fill(0);
  rect(
    police.position.x - 7,
    police.position.y - 53,
    gameChar_w - 5,
    gameChar_h - 17
  );
  rect(
    police.position.x + 3,
    police.position.y - 53,
    gameChar_w - 5,
    gameChar_h - 17
  );

  //mouth
  push();
  stroke(0);
  strokeWeight(3);
  point(police.position.x + 3, police.position.y - 45);
  pop();
  //shirt
  push();
  stroke(0);
  strokeWeight(1);
  line(
    police.position.x - 13,
    police.position.y - 27,
    police.position.x + 13,
    police.position.y - 27
  );
  line(
    police.position.x - 13,
    police.position.y - 16,
    police.position.x + 13,
    police.position.y - 16
  );
  line(
    police.position.x - 13,
    police.position.y - 5,
    police.position.x + 13,
    police.position.y - 5
  );
  pop();
  fill(216, 191, 216);
  ellipse(police.position.x, police.position.y - 27, gameChar_w - 5);
  ellipse(police.position.x, police.position.y - 16, gameChar_w - 5);
  ellipse(police.position.x, police.position.y - 5, gameChar_w - 5);

  //hand

  push();
  translate(police.position.x - 25, police.position.y - 39); // Move to hand center (adjusting for hand's dimensions)
  rotate(radians(-45)); // Rotate by 45 degrees (or any angle you need)
  fill(255, 228, 196);
  rect(-3, -7, gameChar_w - 4, gameChar_h - 6, 5, 5, 0, 0); // Draw hand (adjusted position)
  fill(17, 34, 85);
  rect(-4, 7, gameChar_w - 2, gameChar_h - 5, 0, 0, 5, 5); // Draw the rest of the arm
  pop();

  push();
  translate(police.position.x + 21 + 3, police.position.y - 46 + 7); // Move to the second hand's center
  rotate(radians(45)); // Rotate the other hand by -45 degrees (or your desired angle)
  fill(255, 228, 196);
  rect(-3, -7, gameChar_w - 4, gameChar_h - 6, 5, 5, 0, 0);
  fill(17, 34, 85);
  rect(-4, 7, gameChar_w - 2, gameChar_h - 5, 0, 0, 5, 5);
  pop();
  pop();
}

function characterStandingStill() {
  //CHARACTER STANDING STILL ANIMATION
  push();
  fill(0);
  stroke(0);
  rect(
    police.position.x - 10,
    police.position.y - 2,
    gameChar_w - 2,
    gameChar_h - 5,
    5
  );
  rect(
    police.position.x + 3,
    police.position.y - 2,
    gameChar_w - 2,
    gameChar_h - 5,
    5
  );

  //head
  fill(255, 228, 196);
  ellipse(police.position.x, police.position.y - 48, gameChar_h + 10);
  //body
  fill(70, 130, 180);
  rect(
    police.position.x - 15,
    police.position.y - 35,
    gameChar_w + 20,
    gameChar_h + 20,
    10
  );
  //hat
  push();
  fill(17, 34, 85);
  rect(
    police.position.x - 14,
    police.position.y - 67,
    gameChar_w + 18,
    gameChar_h - 15,
    5
  );
  pop();
  rect(
    police.position.x - 9,
    police.position.y - 63,
    gameChar_w + 8,
    gameChar_h - 15,
    5
  );
  //eye
  fill(0);
  rect(
    police.position.x - 7,
    police.position.y - 53,
    gameChar_w - 5,
    gameChar_h - 17
  );
  rect(
    police.position.x + 3,
    police.position.y - 53,
    gameChar_w - 5,
    gameChar_h - 17
  );

  //mouth
  push();
  stroke(0);
  strokeWeight(3);
  point(police.position.x + 3, police.position.y + -45);
  pop();
  //shirt
  push();
  stroke(0);
  strokeWeight(1);
  line(
    police.position.x - 13,
    police.position.y - 27,
    police.position.x + 13,
    police.position.y - 27
  );
  line(
    police.position.x - 13,
    police.position.y - 16,
    police.position.x + 13,
    police.position.y - 16
  );
  line(
    police.position.x - 13,
    police.position.y - 5,
    police.position.x + 13,
    police.position.y - 5
  );
  pop();
  fill(216, 191, 216);
  ellipse(police.position.x, police.position.y - 27, gameChar_w - 5);
  ellipse(police.position.x, police.position.y - 16, gameChar_w - 5);
  ellipse(police.position.x, police.position.y - 5, gameChar_w - 5);

  //hand
  push();
  fill(17, 34, 85);
  rect(
    police.position.x - 17,
    police.position.y - 34,
    gameChar_w - 2,
    gameChar_h - 5,
    5,
    0,
    0,
    0
  );
  fill(255, 228, 196);
  rect(
    police.position.x - 16,
    police.position.y - 19,
    gameChar_w - 4,
    gameChar_h - 11,
    0,
    0,
    5,
    5
  );
  pop();
  push();
  fill(17, 34, 85);
  rect(
    police.position.x + 10,
    police.position.y - 34,
    gameChar_w - 2,
    gameChar_h - 5,
    0,
    5,
    0,
    0
  );
  fill(255, 228, 196);
  rect(
    police.position.x + 11.5,
    police.position.y - 19,
    gameChar_w - 4,
    gameChar_h - 11,
    0,
    0,
    5,
    5
  );
  pop();
  pop();
}

function characterFallingLeft() {
  //CHARACTER FALLING LEFT ANIMATION
  // add your jumping-left code
  push();
  stroke(0);
  fill(255, 228, 196);
  ellipse(police.position.x, police.position.y - 55, gameChar_h + 10);

  //body
  fill(70, 130, 180);
  rect(
    police.position.x - 15,
    police.position.y - 43,
    gameChar_w + 20,
    gameChar_h + 20,
    10
  );
  //eye & mouth
  push();
  fill(0);
  rect(
    police.position.x - 9,
    police.position.y - 59,
    gameChar_w - 3,
    gameChar_h - 17
  );
  stroke(0);
  strokeWeight(4);
  point(police.position.x - 8, police.position.y + -50);
  pop();

  //body
  push();
  stroke(0);
  strokeWeight(1);
  line(
    police.position.x - 13,
    police.position.y - 33,
    police.position.x + 13,
    police.position.y - 33
  );
  line(
    police.position.x - 13,
    police.position.y - 22,
    police.position.x + 13,
    police.position.y - 22
  );
  line(
    police.position.x - 13,
    police.position.y - 11,
    police.position.x + 13,
    police.position.y - 11
  );
  pop();

  //hand
  push();
  translate(police.position.x + 3, police.position.y - 20);
  rotate(radians(180));
  fill(17, 34, 85);
  rect(0, 0, gameChar_w - 2, gameChar_h - 5, 5, 5, 0, 0);
  pop();
  push();
  translate(police.position.x + 2, police.position.y - 35);
  rotate(radians(180));
  fill(255, 228, 196);
  rect(0, 0, gameChar_w - 4, gameChar_h - 5, 0, 0, 5, 5);
  pop();

  // right leg
  push();
  fill(0);
  rect(
    police.position.x - 6,
    police.position.y - 5,
    gameChar_w + 1,
    gameChar_h - 5,
    0,
    0,
    5,
    5
  );
  pop();

  //hat
  fill(70, 130, 180);
  rect(
    police.position.x - 15,
    police.position.y - 70,
    gameChar_w + 13,
    gameChar_h - 15,
    0,
    9,
    9,
    1
  );
  fill(17, 34, 85);
  rect(
    police.position.x - 3,
    police.position.y - 73,
    gameChar_w,
    gameChar_h - 15
  );
  pop();
}

function characterFallingRight() {
  //CHARACTER FALLING RIGHT ANIMATION
  // add your jumping-right code
  //head
  push();
  stroke(0);
  //head
  fill(255, 228, 196);
  ellipse(police.position.x, police.position.y - 55, gameChar_w + 20);

  //body
  fill(70, 130, 180);
  rect(
    police.position.x - 15,
    police.position.y - 43,
    gameChar_w + 20,
    gameChar_h + 20,
    10
  );
  //eye & mouth
  push();
  fill(0);
  rect(
    police.position.x + 3,
    police.position.y - 59,
    gameChar_w - 3,
    gameChar_h - 17
  );
  stroke(0);
  strokeWeight(4);
  point(police.position.x + 8, police.position.y - 50);
  pop();

  //body
  push();
  stroke(0);
  strokeWeight(1);
  line(
    police.position.x - 13,
    police.position.y - 33,
    police.position.x + 13,
    police.position.y - 33
  );
  line(
    police.position.x - 13,
    police.position.y - 22,
    police.position.x + 13,
    police.position.y - 22
  );
  line(
    police.position.x - 13,
    police.position.y - 11,
    police.position.x + 13,
    police.position.y - 11
  );
  pop();

  //hand
  push();
  translate(police.position.x + 3, police.position.y - 20);
  rotate(radians(180));
  fill(17, 34, 85);
  rect(0, 0, gameChar_w - 2, gameChar_h - 5, 5, 5, 0, 0);
  pop();
  push();
  translate(police.position.x + 2, police.position.y - 35);
  rotate(radians(180));
  fill(255, 228, 196);
  rect(0, 0, gameChar_w - 4, gameChar_h - 5, 0, 0, 5, 5);
  pop();

  //feet
  fill(0);
  rect(
    police.position.x - 6,
    police.position.y - 5,
    gameChar_w + 1,
    gameChar_h - 5,
    0,
    0,
    5,
    5
  );

  //hat
  fill(70, 130, 180);
  rect(
    police.position.x - 7,
    police.position.y - 70,
    gameChar_w + 13,
    gameChar_h - 15,
    0,
    9,
    9,
    1
  );
  fill(17, 34, 85);
  rect(
    police.position.x - 7,
    police.position.y - 73,
    gameChar_w,
    gameChar_h - 15
  );
  pop();
}
