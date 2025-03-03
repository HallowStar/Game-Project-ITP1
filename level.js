function levelOne() {
  //PLATFORM
  platforms.push(createPlatform(200, 430, 200));
  platforms.push(createPlatform(400, 330, 300));
  platforms.push(createPlatform(1900, 400, 100));
  platforms.push(createPlatform(1850, 250, 150));
  platforms.push(createPlatform(2200, 350, 130));

  //CANYON
  canyons.push(createCanyon(400, 500, 300));
  canyons.push(createCanyon(1000, 500, 150));
  canyons.push(createCanyon(2000, 500, 400));

  //COINS
  coins.push(createCoin(random(250, 400), 540, false));
  coins.push(createCoin(random(400, 700), 300, false));
  coins.push(createCoin(1400, 540, false));
  coins.push(createCoin(random(2200, 2400), 320, false));
  coins.push(createCoin(2600, 540, false));

  //ENEMY
  enemies.push(createEnemies(210, 415, 100));
  enemies.push(createEnemies(1455, 560, 100));
}

function levelTwo() {
  //PLATFORM
  platforms.push(createPlatform(450, 430, 100));
  platforms.push(createPlatform(550, 330, 100));
  platforms.push(createPlatform(800, 450, 200));

  //CANYON
  canyons.push(createCanyon(400, 500, 700));
  canyons.push(createCanyon(1500, 500, 250));

  //ENEMIES
  enemies.push(createEnemies(830, 435, 155));
  enemies.push(createEnemies(2000, 560, 100));
  enemies.push(createEnemies(2150, 560, 100));
  enemies.push(createEnemies(2300, 560, 100));

  //COINS
  coins.push(createCoin(random(470, 500), 400));
  coins.push(createCoin(1300, 530));
  coins.push(createCoin(2000, 530));
  coins.push(createCoin(2300, 530));
}

function levelThree() {
  //PLATFORM
  platforms.push(createPlatform(450, 430, 200));
  platforms.push(createPlatform(250, 330, 200));
  platforms.push(createPlatform(600, 180, 200));
  platforms.push(createPlatform(1350, 430, 70));
  platforms.push(createPlatform(1900, 430, 80));

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
  enemies.push(createEnemies(500, 560, 150));
  enemies.push(createEnemies(300, 315, 130));
  enemies.push(createEnemies(1060, 560, 130));
  enemies.push(createEnemies(1900, 415, 50));
}

function levelFour() {
  //PLATFORMS
  platforms.push(createPlatform(390, 430, 200));
  platforms.push(createPlatform(480, 330, 200));
  platforms.push(createPlatform(800, 470, 70));
  platforms.push(createPlatform(1000, 370, 100));
  platforms.push(createPlatform(900, 230, 100));
  platforms.push(createPlatform(1250, 330, 100));
  platforms.push(createPlatform(1500, 430, 150));

  //CANYONS
  canyons.push(createCanyon(200, 500, 1500));
  canyons.push(createCanyon(2100, 500, 240));

  //ENEMIES
  enemies.push(createEnemies(490, 315, 100));
  enemies.push(createEnemies(1030, 355, 50));
  enemies.push(createEnemies(1550, 415, 50));

  //COINS
  coins.push(createCoin(600, 300));
  coins.push(createCoin(920, 200));
  coins.push(createCoin(1290, 300));
  coins.push(createCoin(2400, 540));
}

function levelFive() {
  //CANYON
  canyons.push;
  //ENEMIES
  //PLATFORMS
  //COINS
}
