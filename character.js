function characterTurnRight() {
  //I created the character by myself based on what's in my head for the left, right, standing still & jump / fall animation

  //CHARACTER TURN RIGHT ANIMATION

  //head
  push();
  stroke(0);
  fill(255, 228, 196);
  ellipse(police.position.x, police.position.y - 55, 30);

  //feet
  fill(0);

  if (police.position.y <= 560 && !isFall) {
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
    rect(-5, -5, 11, 18, 0, 0, 5, 5);
    pop();

    //right leg
    push();
    translate(police.position.x, police.position.y);
    rotate(radians(-police.legDeg));
    fill(0);
    rect(-5, -5, 11, 18, 0, 0, 5, 5);
    pop();
  }

  //body
  fill(70, 130, 180);
  rect(police.position.x - 15, police.position.y - 43, 30, 40, 10);

  //eye & mouth
  push();
  fill(0);
  rect(police.position.x + 3, police.position.y - 59, 7, 3);
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
  rect(police.position.x - 5, police.position.y - 34, 8, 15, 5, 5, 0, 0);
  fill(255, 228, 196);
  rect(police.position.x - 4, police.position.y - 19, 6, 9, 0, 0, 5, 5);
  pop();

  //hat
  fill(70, 130, 180);
  rect(police.position.x - 7, police.position.y - 70, 23, 5, 0, 9, 9, 1);
  fill(17, 34, 85);
  rect(police.position.x - 7, police.position.y - 73, 10, 5);
  pop();
}

function characterTurnLeft() {
  //CHARACTER TURN LEFT ANIMATION
  //head
  push();
  stroke(0);
  //head
  fill(255, 228, 196);
  ellipse(police.position.x, police.position.y - 55, 30);

  if (police.position.y <= 560 && !isFall) {
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
    rect(-5, -5, 11, 18, 0, 0, 5, 5);
    pop();

    //right leg
    push();
    translate(police.position.x, police.position.y);
    rotate(radians(-police.legDeg));
    fill(0);
    rect(-5, -5, 11, 18, 0, 0, 5, 5);
    pop();
  }

  //body
  fill(70, 130, 180);
  rect(police.position.x - 15, police.position.y - 43, 30, 40, 10);
  //eye & mouth
  push();
  fill(0);
  rect(police.position.x - 9, police.position.y - 59, 7, 3);
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
  rect(police.position.x - 5, police.position.y - 34, 8, 15, 5, 5, 0, 0);
  fill(255, 228, 196);
  rect(police.position.x - 4, police.position.y - 19, 6, 9, 0, 0, 5, 5);
  pop();

  //hat
  fill(70, 130, 180);
  rect(police.position.x - 15, police.position.y - 70, 23, 5, 0, 9, 9, 1);
  fill(17, 34, 85);
  rect(police.position.x - 3, police.position.y - 73, 10, 5);
  pop();
}

function characterJumpOrFall() {
  //CHARACTER JUMP / FALL ANIMATION
  push();
  fill(0);
  stroke(0);
  //feet
  rect(police.position.x - 10, police.position.y, 8, 15, 5);
  rect(police.position.x + 3, police.position.y, 8, 15, 5);

  //head
  fill(255, 228, 196);
  ellipse(police.position.x, police.position.y - 48, 30);
  //body
  fill(70, 130, 180);
  rect(police.position.x - 15, police.position.y - 35, 30, 40, 10);
  //hat
  push();
  fill(17, 34, 85);
  rect(police.position.x - 14, police.position.y - 67, 28, 5, 5);
  pop();
  rect(police.position.x - 9, police.position.y - 63, 18, 5, 5);
  //eye
  fill(0);
  rect(police.position.x - 7, police.position.y - 53, 5, 3);
  rect(police.position.x + 3, police.position.y - 53, 5, 3);

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
  rect(-3, -7, 6, 16, 5, 5, 0, 0); // Draw hand (adjusted position)
  fill(17, 34, 85);
  rect(-4, 7, 8, 15, 0, 0, 5, 5); // Draw the rest of the arm
  pop();

  push();
  translate(police.position.x + 21 + 3, police.position.y - 46 + 7); // Move to the second hand's center
  rotate(radians(45)); // Rotate the other hand by -45 degrees (or your desired angle)
  fill(255, 228, 196);
  rect(-3, -7, 6, 14, 5, 5, 0, 0);
  fill(17, 34, 85);
  rect(-4, 7, 8, 15, 0, 0, 5, 5);
  pop();
  pop();
}

function characterStandingStill() {
  //CHARACTER STANDING STILL ANIMATION
  push();
  fill(0);
  stroke(0);
  rect(police.position.x - 10, police.position.y - 2, 8, 15, 5);
  rect(police.position.x + 3, police.position.y - 2, 8, 15, 5);

  //head
  fill(255, 228, 196);
  ellipse(police.position.x, police.position.y - 48, 30);
  //body
  fill(70, 130, 180);
  rect(police.position.x - 15, police.position.y - 35, 30, 40, 10);
  //hat
  push();
  fill(17, 34, 85);
  rect(police.position.x - 14, police.position.y - 67, 28, 5, 5);
  pop();
  rect(police.position.x - 9, police.position.y - 63, 18, 5, 5);
  //eye
  fill(0);
  rect(police.position.x - 7, police.position.y - 53, 5, 3);
  rect(police.position.x + 3, police.position.y - 53, 5, 3);

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
  ellipse(police.position.x, police.position.y - 27, 5);
  ellipse(police.position.x, police.position.y - 16, 5);
  ellipse(police.position.x, police.position.y - 5, 5);

  //hand
  push();
  fill(17, 34, 85);
  rect(police.position.x - 17, police.position.y - 34, 8, 15, 5, 0, 0, 0);
  fill(255, 228, 196);
  rect(police.position.x - 16, police.position.y - 19, 6, 9, 0, 0, 5, 5);
  pop();
  push();
  fill(17, 34, 85);
  rect(police.position.x + 10, police.position.y - 34, 8, 15, 0, 5, 0, 0);
  fill(255, 228, 196);
  rect(police.position.x + 11.5, police.position.y - 19, 6, 9, 0, 0, 5, 5);
  pop();
  pop();
}

function characterFallingLeft() {
  //CHARACTER FALLING LEFT ANIMATION
  // add your jumping-left code
  push();
  stroke(0);
  fill(255, 228, 196);
  ellipse(police.position.x, police.position.y - 55, 30);

  //body
  fill(70, 130, 180);
  rect(police.position.x - 15, police.position.y - 43, 30, 40, 10);
  //eye & mouth
  push();
  fill(0);
  rect(police.position.x - 9, police.position.y - 59, 7, 3);
  stroke(0);
  strokeWeight(4);
  point(police.position.x - 8, police.position.y - 50);
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
  rect(0, 0, 8, 15, 5, 5, 0, 0);
  pop();
  push();
  translate(police.position.x + 2, police.position.y - 35);
  rotate(radians(180));
  fill(255, 228, 196);
  rect(0, 0, 6, 15, 0, 0, 5, 5);
  pop();

  // right leg
  push();
  fill(0);
  rect(police.position.x - 6, police.position.y - 5, 11, 15, 0, 0, 5, 5);
  pop();

  //hat
  fill(70, 130, 180);
  rect(police.position.x - 15, police.position.y - 70, 23, 5, 0, 9, 9, 1);
  fill(17, 34, 85);
  rect(police.position.x - 3, police.position.y - 73, 10, 5);
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
  ellipse(police.position.x, police.position.y - 55, 30);

  //body
  fill(70, 130, 180);
  rect(police.position.x - 15, police.position.y - 43, 30, 40, 10);
  //eye & mouth
  push();
  fill(0);
  rect(police.position.x + 3, police.position.y - 59, 7, 3);
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
  rect(0, 0, 8, 15, 5, 5, 0, 0);
  pop();
  push();
  translate(police.position.x + 2, police.position.y - 35);
  rotate(radians(180));
  fill(255, 228, 196);
  rect(0, 0, 6, 15, 0, 0, 5, 5);
  pop();

  //feet
  fill(0);
  rect(police.position.x - 6, police.position.y - 5, 11, 15, 0, 0, 5, 5);

  //hat
  fill(70, 130, 180);
  rect(police.position.x - 7, police.position.y - 70, 23, 5, 0, 9, 9, 1);
  fill(17, 34, 85);
  rect(police.position.x - 7, police.position.y - 73, 10, 5);
  pop();
}

function enemyTurnRight(x, y, handDeg, handD) {
  //face & hat
  push();
  fill(255, 178, 102);
  rect(x - 13, y - 55, 26, 20, 0, 0, 25, 25);
  fill(0);
  arc(x, y - 55, 25, 25, PI, 0, PIE);
  curveVertex();
  pop();

  //eye
  ellipse(x - 4, y - 49, 8);
  fill(255);
  ellipse(x - 3, y - 49, 2);

  fill(0);
  ellipse(x + 6, y - 49, 8);
  fill(255);
  ellipse(x + 6, y - 49, 2);

  //mouth
  push();
  stroke(0);
  fill(0);
  beginShape();
  vertex(x - 5, y - 40);
  vertex(x - 5, y - 42);
  vertex(x + 3, y - 39);
  vertex(x, y - 50);
  endShape();
  pop();

  //right hand
  push();
  fill(255, 141, 30);
  translate(x + 5, y - 33);
  rotate(radians(-handDeg + 30));
  rect(0, 0, 20, 7, 3, 3, 0, 0);
  fill(255, 178, 102);
  rect(18, 0, 5, 7, 0, 3, 3, 0);
  pop();

  // leg
  push();
  fill(230, 115, 0);
  rect(x - 8, y - 5, 8, 20, 5, 5);
  fill(0);
  rect(x - 8, y + 10, 8, 5, 0, 0, 5, 5);
  fill(230, 115, 0);

  rect(x + 2, y - 5, 8, 20, 5, 5);
  fill(0);
  rect(x + 2, y + 10, 8, 5, 0, 0, 5, 5);

  pop();

  //body
  push();
  fill(254, 115, 0);
  rect(x - 12, y - 35, 25, 35, 9, 9, 9, 9);
  pop();

  //shirt
  fill(0);
  rect(x - 8, y - 30, 20, 5);
  rect(x - 8, y - 20, 20, 5);
  rect(x - 8, y - 10, 20, 5);

  // left hand

  push();
  fill(255, 141, 30);
  translate(x - 10, y - 34);
  rotate(radians(handDeg));
  rect(0, 0, 7, 20, 3, 3, 0, 0);
  fill(255, 178, 102);
  rect(0, 20, 7, 5, 0, 0, 3, 3);
  pop();
}

function enemyTurnLeft(x, y, handDeg, handD) {
  //face & hat
  push();
  fill(255, 178, 102);
  rect(x - 13, y - 55, 26, 20, 0, 0, 25, 25);
  fill(0);
  arc(x, y - 55, 25, 25, PI, 0, PIE);
  curveVertex();
  pop();

  //eye
  ellipse(x - 4, y - 49, 8);
  fill(255);
  ellipse(x - 5, y - 49, 2);

  fill(0);
  ellipse(x + 6, y - 49, 8);
  fill(255);
  ellipse(x + 5, y - 49, 2);

  //mouth
  push();
  stroke(0);
  fill(0);
  beginShape();
  vertex(x + 5, y - 40);
  vertex(x + 5, y - 42);
  vertex(x - 2, y - 39);
  vertex(x, y - 50);
  endShape();
  pop();

  //left hand (from right hand)
  push();
  fill(255, 141, 30);
  translate(x - 3, y - 33);
  rotate(radians(-handDeg));
  rect(0, 0, -20, 7);
  fill(255, 178, 102);
  rect(-23, 0, 5, 7, 5);
  pop();

  // leg
  push();
  fill(230, 115, 0);
  rect(x - 8, y - 5, 8, 20, 5, 5);
  fill(0);
  rect(x - 8, y + 10, 8, 5, 0, 0, 5, 5);
  fill(230, 115, 0);

  rect(x + 2, y - 5, 8, 20, 5, 5);
  fill(0);
  rect(x + 2, y + 10, 8, 5, 0, 0, 5, 5);

  pop();

  //body
  push();
  fill(254, 115, 0);
  rect(x - 12, y - 35, 25, 35, 9, 9, 9, 9);
  pop();

  //shirt
  fill(0);
  rect(x - 10, y - 30, 20, 5);
  rect(x - 10, y - 20, 20, 5);
  rect(x - 10, y - 10, 20, 5);

  // right hand

  push();
  fill(255, 141, 30);
  translate(x + 7, y - 32);
  rotate(radians(handDeg));
  rect(0, 0, 7, 20, 3, 3, 0, 0);
  fill(255, 178, 102);
  rect(0, 20, 7, 5, 0, 0, 3, 3);
  pop();
}
