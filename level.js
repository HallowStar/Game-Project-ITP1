function levelOne() {
  //PLATFORM
  platforms.push(createPlatform(200, 430, 200, 0, false));
  platforms.push(createPlatform(400, 330, 300, 0, false));
  platforms.push(createPlatform(1900, 400, 100, 0, false));
  platforms.push(createPlatform(1850, 250, 150, 0, false));
  platforms.push(createPlatform(2200, 350, 130, 3, true));

  //CANYON
  canyons.push(createCanyon(400, 500, 300));
  canyons.push(createCanyon(1000, 500, 150));
  canyons.push(createCanyon(2000, 500, 400));

  //COINS
  coins.push(createCoin(random(250, 400), 540, false));
  coins.push(createCoin(random(400, 700), 300, false));
  coins.push(createCoin(1400, 540, false));
  coins.push(createCoin(1900, 220, false));
  coins.push(createCoin(2600, 540, false));

  //ENEMY
  enemies.push(createEnemies(210, 415, 100, "red"));
  enemies.push(createEnemies(1455, 560, 130, "blue"));

  //FLAG
  flags.push(createFlag(2600, 560));
}

function levelTwo() {
  //PLATFORM
  platforms.push(createPlatform(450, 430, 100, 0, false));
  platforms.push(createPlatform(580, 330, 100, 4, true));
  platforms.push(createPlatform(800, 430, 200, 0, false));

  //CANYON
  canyons.push(createCanyon(400, 500, 700));
  canyons.push(createCanyon(1500, 500, 230));

  //ENEMIES
  enemies.push(createEnemies(830, 415, 155, "red"));
  enemies.push(createEnemies(2000, 560, 100, "red"));
  enemies.push(createEnemies(2150, 560, 100, "blue"));
  enemies.push(createEnemies(2300, 560, 100, "red"));

  //COINS
  coins.push(createCoin(random(470, 500), 400));
  coins.push(createCoin(1300, 530));
  coins.push(createCoin(2000, 530));
  coins.push(createCoin(2300, 530));

  //FLAG
  flags.push(createFlag(random(2400, 2600), 560));
}

function levelThree() {
  //PLATFORM
  platforms.push(createPlatform(450, 430, 200, 0, false));
  platforms.push(createPlatform(250, 330, 200, 0, false));
  platforms.push(createPlatform(580, 180, 200, 3, true));
  platforms.push(createPlatform(1330, 430, 70, 2, true));
  platforms.push(createPlatform(1900, 430, 130, 0, false));

  //CANYON
  canyons.push(createCanyon(650, 500, 400));
  canyons.push(createCanyon(1200, 500, 300));
  canyons.push(createCanyon(1800, 500, 300));

  //COINS
  coins.push(createCoin(random(570, 600), 540));
  coins.push(createCoin(random(300, 400), 300));
  coins.push(createCoin(1100, 540));
  coins.push(createCoin(2200, 540));

  //ENEMIES
  enemies.push(createEnemies(470, 560, 200, "gray"));
  enemies.push(createEnemies(300, 315, 130, "blue"));
  enemies.push(createEnemies(1100, 560, 50, "red"));
  enemies.push(createEnemies(1950, 415, 80, "red"));

  //FLAG
  flags.push(createFlag(2500, 560));
}

function levelFour() {
  //PLATFORMS
  platforms.push(createPlatform(390, 430, 200, 0, false));
  platforms.push(createPlatform(480, 330, 200, 0, false));
  platforms.push(createPlatform(800, 470, 70, 3, true));
  platforms.push(createPlatform(1000, 370, 100, 0, false));
  platforms.push(createPlatform(900, 230, 100, 0, false));
  platforms.push(createPlatform(1245, 330, 100, 2, true));
  platforms.push(createPlatform(1500, 430, 150, 0, false));

  //CANYONS
  canyons.push(createCanyon(220, 500, 1500));
  canyons.push(createCanyon(2100, 500, 240));

  //ENEMIES
  enemies.push(createEnemies(490, 315, 100, "blue"));
  enemies.push(createEnemies(1030, 355, 50, "red"));
  enemies.push(createEnemies(1550, 415, 50, "red"));
  enemies.push(createEnemies(1800, 540, 200, "gray"));

  //COINS
  coins.push(createCoin(600, 300));
  coins.push(createCoin(920, 200));
  coins.push(createCoin(1290, 300));
  coins.push(createCoin(2400, 540));

  //FLAG
  flags.push(createFlag(2600, 560));
}

function levelFive() {
  //CANYON
  canyons.push(createCanyon(400, 500, 900));
  canyons.push(createCanyon(1500, 500, 1000));

  //ENEMIES
  enemies.push(createEnemies(220, 560, 150, "blue"));
  enemies.push(createEnemies(630, 155, 50, "red"));
  enemies.push(createEnemies(1150, 385, 80, "blue"));
  enemies.push(createEnemies(2220, 245, 100, "blue"));
  enemies.push(createEnemies(2600, 540, 70, "red"));
  enemies.push(createEnemies(2750, 540, 100, "blue"));

  //PLATFORMS
  platforms.push(createPlatform(520, 400, 130, 4, true));
  platforms.push(createPlatform(800, 300, 90, 2, true));
  platforms.push(createPlatform(600, 170, 130, 0, false));

  platforms.push(createPlatform(1100, 400, 180, 0, false));
  platforms.push(createPlatform(1550, 380, 130, 4, true));
  platforms.push(createPlatform(1920, 340, 80, 2.5, true));
  platforms.push(createPlatform(2200, 260, 120, 0, false));
  platforms.push(createPlatform(2330, 390, 70, 2, true));
  platforms.push(createPlatform(2650, 400, 70, 0, false));

  //COINS
  coins.push(createCoin(1350, 540));
  coins.push(createCoin(610, 140));
  coins.push(createCoin(2750, 540));

  //FLAG
  flags.push(createFlag(3000, 560));
}
