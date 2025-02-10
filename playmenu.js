function drawDarkBackground() {
  //DARK BACKGROUND
  push();
  fill(0, 0, 0, 160);
  rect(0, 0, width, height);
  pop();

  push();
  fill(255);
  textSize(40);
  text("Use down or up arrow to choose option", 50, 70);
  pop();
}

function playMenuButton() {
  //PLAY & RESUME MENU SETUP
  play_menu = {
    x: width / 2 - 150,
    y: height / 2 - 100,
    color: 255,
  };

  settings_menu = {
    x: width / 2 - 150,
    y: height / 2 + 50,
    color: 0,
  };
}

function resumeMenuButton() {
  resume_menu = {
    x: width / 2 - 150,
    y: height / 2 - 200,
    color: 255,
  };

  play_again = {
    x: width / 2 - 150,
    y: height / 2 - 200,
    color: 255,
  };

  settings_pause = {
    x: width / 2 - 150,
    y: height / 2 + 50,
    color: 0,
  };
}

function drawPlayMenu() {
  //DEFAULT PAUSE SCREEN
  //I develop a new feature to my game that is not implemented from Coursera which is a play menu at the start of the game which I made using the codes and methods that I learned from Coursera. I made a play game menu and settings menu (which is not done yet).
  push();
  stroke(play_menu.color);
  fill(play_menu.color - 255);
  rect(play_menu.x, play_menu.y, 300, 100);
  fill(play_menu.color);
  textSize(20);
  text("Play Game", play_menu.x + 100, play_menu.y + 57);
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

function drawPlayMenuMouseHover() {
  //Use the hover feature learned from Coursera and implemented where if the mouse is hovering the button the it will turn white. For this instance, it could be for the play meny or the settings menu

  //play menu (white)
  push();
  stroke(play_menu.color - 255);
  fill(play_menu.color);
  rect(play_menu.x, play_menu.y, 300, 100);
  fill(play_menu.color - 255);
  textSize(20);
  text("Play Game", width / 2 - 50, height / 2 - 43);
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

function drawSettingsMenuMouseHover() {
  //play menu black
  push();
  stroke(play_menu.color);
  fill(play_menu.color - 255);
  rect(play_menu.x, play_menu.y, 300, 100);
  fill(play_menu.color);
  textSize(20);
  text("Play Game", width / 2 - 50, height / 2 - 43);
  pop();

  //settings black
  push();
  stroke(settings_menu.color);
  fill(settings_menu.color + 255);
  rect(settings_menu.x, settings_menu.y, 300, 100);
  fill(settings_menu.color);
  textSize(20);
  textAlign(CENTER);
  text("Settings", width / 2 - 3, height / 2 + 105);
  pop();
}
