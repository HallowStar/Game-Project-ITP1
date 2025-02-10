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
  push();
  stroke(resume_menu.color);
  fill(resume_menu.color);
  rect(resume_menu.x, resume_menu.y, 300, 100);
  fill(resume_menu.color - 255);
  textSize(20);
  text("Resume Game", resume_menu.x + 80, resume_menu.y + 57);
  pop();

  //new game black
  push();
  stroke(play_again.color);
  fill(play_again.color - 255);
  rect(play_again.x, play_again.y + 125, 300, 100);
  fill(play_again.color);
  textSize(20);
  textAlign(CENTER);
  text("New Game", width / 2 - 3, height / 2 - 19);
  pop();

  //settings black
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

function newGameMouseHover() {
  //resume black
  push();
  stroke(resume_menu.color);
  fill(resume_menu.color - 255);
  rect(resume_menu.x, resume_menu.y, 300, 100);
  fill(resume_menu.color);
  textSize(20);
  text("Resume Game", resume_menu.x + 80, resume_menu.y + 57);
  pop();

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

  //settings black
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

function settingsMouseHover() {
  //resume black
  push();
  stroke(resume_menu.color);
  fill(resume_menu.color - 255);
  rect(resume_menu.x, resume_menu.y, 300, 100);
  fill(resume_menu.color);
  textSize(20);
  text("Resume Game", resume_menu.x + 80, resume_menu.y + 57);
  pop();

  //new game black
  push();
  stroke(play_again.color - 255);
  fill(play_again.color - 255);
  rect(play_again.x, play_again.y + 125, 300, 100);
  fill(play_again.color);
  textSize(20);
  textAlign(CENTER);
  text("New Game", width / 2 - 3, height / 2 - 19);
  pop();

  //settings white
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
