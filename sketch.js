var player;
var playerGroup;
var platform,plates,plateImage,plateImage2,plateImage3,plateImage4;
var playerImageUp,playerImageDown,playerImageLand,playerImageDive;
var playerUpDive;
var BackGroundImage;
//// GameStates
var gameState = START;
var START = 0;
var PLAY = 1;
var WIN = 2;
var LOSE = 3;
var CREDITS = 4;
var HealthScore = 7;
var xpScore = 7;
//
var Button,buttonImage,HoverButtonImage;
var SkySkipImage,SkySkip;
var startingBack;
var PlayScreenSound;
var clickSound;
var Credits,CreditsImage,CreditsImage2;
var backGround3;
////
var Shop,ShopImage,ShopImage2,ShopGui,bird;
var worm,wormImage,wormGroup;
var health,xp; 
var FullHeart,xpImage1,NoHealth,xpImage2,sixHeart,xpImage3,fiveHeart,xpImage4,HalfHeath,xpImage5,threeHeart,xpImage6,twoHeart,xpImage7,oneHeart,xpImage8;
var Ship,ShipGroup,ShipImage;
var backButton,backButtonImage1,backButtonImage2;
var Crt,Crt1;
var GameOver,GameOver1;
function setup() {
  createCanvas(3300,1800);
  player = createSprite(200,200,150,150);

  playerGroup = createGroup();
  plates = createGroup();
  player.scale = 0.3;
  
  wormGroup = createGroup();
  player.addImage(playerImageUp);
  playerGroup.add(player);
  gameState = START;
  Button = createSprite(1700,1000,150,50);
  Button.addImage(buttonImage);
  skySkip = createSprite(1800,240,10,10);
  skySkip.addImage(SkySkipImage);
  Credits = createSprite(1700,1200,150,50);
  Credits.addImage(CreditsImage);
  ShipGroup = createGroup();
  backButton = createSprite(300,240,150,100);
  health = createSprite(300,240,50,50);
  Crt = createSprite(1800,300,10,10);
  Crt.addImage(Crt1);
  GameOver = createSprite(1800,240,10,10);
  xp = createSprite(300,340,50,50);
  playScreenSound.play();
}
function preload(){
 plateImage = loadImage("Images/AloneCloudB.png");
 plateImage2 = loadImage("Images/AloneCloudA.png");
 plateImage3 = loadImage("Images/FamilyCloudA.png");
 plateImage4 = loadImage("Images/FamilyCloudB.png");
 playerImageUp = loadImage("Images/playerUp.png");
 playerImageDown = loadImage("Images/playerDown.png");
 playerImageLand = loadImage("Images/playerLand.png");
 playerImageDive = loadImage("Images/PlayerDive.png");
 playerUpDive = loadImage("Images/playerUpDive.png");
 BackGroundImage = loadImage("Images/BackGroundImage.png");
 buttonImage = loadImage("Images/PlayStartImage.png");
 SkySkipImage = loadImage("Images/SkySkipImage.png");
 startingBack = loadImage("Images/LoadingScreenBackground.png");
 HoverButtonImage = loadImage("Images/ButtonHoverImage.png");
 CreditsImage = loadImage("Images/CreditsSign.png");
 CreditsImage2 = loadImage("Images/CreditSignTouch.png");
 backGround3 = loadImage("Images/CreditBackGround.png");
 wormImage = loadImage("Images/WormImage.png");
 ////////////// Full and empty heath
 FullHeart = loadImage("Heath-xp/H1.png");
 //no heath
 NoHealth = loadImage("Heath-xp/H2.png");
///
sixHeart = loadImage("Heath-xp/h1-10.png");
fiveHeart = loadImage("Heath-xp/h2-10.png");
HalfHeart = loadImage("Heath-xp/h3-10.png");
//
threeHeart = loadImage("Heath-xp/h4-10.png");
twoHeart = loadImage("Heath-xp/h5-10.png");
oneHeart = loadImage("Heath-xp/h6-10.png");
 //////////////////////no heath
 xpImage1 = loadImage("Heath-xp/xp0-10.png");
 //full heath
 xpImage2 = loadImage("Heath-xp/xpFull.png");
///
xpImage3 = loadImage("Heath-xp/xp1-10.png");
xpImage4 = loadImage("Heath-xp/xp2-10.png");
xpImage5 = loadImage("Heath-xp/xp3-10.png");
xpImage6 = loadImage("Heath-xp/xp4-10.png");
xpImage7 = loadImage("Heath-xp/xp5-10.png");
xpImage8 = loadImage("Heath-xp/xp6-10.png");

//
ShipImage = loadImage("Images/ShipImage.png");
//
GameOver1 = loadImage("Images/GameOver.png");
Crt1 = loadImage("Images/CRT.png");
backButtonImage1 = loadImage("Images/BackButtonImage1.png");
backButtonImage2 = loadImage("Images/BackButtonImage2.png");
 playScreenSound = loadSound("PlayScreenMusic.wav");
 clickSound = loadSound("ClickSound.wav");
 
}

function draw() {
 console.log(HealthScore)
  
 if (mouseIsOver(Credits)) {
    Credits.addImage(CreditsImage2);
   
  }else{
    Credits.addImage(CreditsImage);
    
  }


  if (mousePressedOver(Button)) {
    gameState = 1;
   
    clickSound.play();
    
  } 
  
  if (mouseIsOver(Button)) {
    Button.addImage(HoverButtonImage);
    
   }else{
     Button.addImage(buttonImage);
     
   }

   if (mousePressedOver(Credits)) {
    gameState = 4;
    clickSound.play();
    backButton.visible = true;  
  } 
  if(mousePressedOver(backButton)){
    gameState = 0;
    backButton.visible = false;  
  }
if(mouseIsOver(backButton)){
  backButton.addImage(backButtonImage2);
}else{
  backButton.addImage(backButtonImage1);
}
 
   
if(gameState === CREDITS){
  background(backGround3);
  console.log("WORK");
  textSize(20);
  text("",1000,1200);
  Crt.visible = true;  
  GameOver.visible = false;
  playScreenSound.stop();
  Credits.visible = false; 
  backButton.visible = true;  
  Button.visible = false; 
    skySkip.visible = false; 
    player.visible = false;
}
  if(gameState === START){
    background(startingBack);
    Button.y = 1000;
    Credits.y = 1200; 
    health.visible = false;
    xp.visible = false;
  fill("green");
  textSize(100);
  Crt.visible = false; 
  GameOver.visible = false; 
  if(gameState === START){
    HealthScore++;
  
  }
   backButton.visible = false;  
  Credits.visible = true; 
    Button.visible = true; 
    skySkip.visible = true; 
    player.visible = false;
  }

  if(gameState === PLAY){
    backButton.visible = false;  
    playScreenSound.stop();
   health.addImage(FullHeart);
   xp.addImage(xpImage2);
   Crt.visible = false;  
   Button.y = 3000; 
   Credits.y = 3000; 
   background("#add8e6");  
    background(BackGroundImage); 
    playerGroup.add(player);  
    player.shapeColor = "red";
    player.visible = true;
   health.visible = true;
   xp.visible = true;
   if(player.y > 1800){
   player.y = 200;
   player.x = 200;
   }
   if(player.x < 0){
    player.y = 200;
    player.x = 200;
    }
   Button.visible = false;
   skySkip.visible = false;
   Credits.visible = false; 
   GameOver.visible = false;
   //
    player.velocityY = player.velocityY + 1
    if(keyDown("w")){
      player.velocityY = -10;
     player.addImage(playerImageUp);
    }
    if(keyDown("d")){
      player.velocityX = 10;
      player.addImage(playerImageDown);
  
    }
    if(keyDown("a")){
      player.velocityX = -10;
      player.addImage(playerImageLand);
    }
    if(keyDown("s")){
      player.velocityY = 10;
      player.addImage(playerImageDive);
    }
    //Quick jumps
    if(keyDown("q")){
      player.velocityY = 40;
      player.addImage(playerImageDive);
    }
    if(keyDown("e")){
      player.velocityY = -30;
      player.addImage(playerUpDive);
    }

    // Giving heath if the player needs it
    if(wormGroup.isTouching(playerGroup)){
      HealthScore++;
      wormGroup.destroyEach();
    }
    if(ShipGroup.isTouching(playerGroup)){ 
      HealthScore = HealthScore - 1;
      ShipGroup.destroyEach();
      player.addImage(playerImageLand);
    }
    if(HealthScore === 1){
      health.addImage(oneHeart);
    }
    if(HealthScore === 2){
      health.addImage(twoHeart);
    }
    if(HealthScore === 3){
      health.addImage(threeHeart);
    }
    if(HealthScore === 4){
      health.addImage(HalfHeart);
    }
    if(HealthScore === 5){
      health.addImage(fiveHeart);
    }
    if(HealthScore === 6){
      health.addImage(sixHeart);
    }
    if(HealthScore === 7){
      health.addImage(FullHeart);
    }
    if(HealthScore === 0){
      health.addImage(NoHealth);
      wormGroup.destroyEach();
      ShipGroup.destroyEach();
      plates.destroyEach();
    }
    if(HealthScore === 0){
      gameState = LOSE;
      HealthScore++;
    }
    if(HealthScore >= 7){
      HealthScore = 7;
    }
    
    if(HealthScore <= 0){
      HealthScore = 0;
    }
  //  
  player.collide(plates);
   if(plates.isTouching(playerGroup)){
       player.velocityX = 0;
       player.velocityY = 0;
   }



   
   if(gameState === LOSE){
    GameOver.addImage(GameOver1);
background("black");
if(gameState === LOSE){
  HealthScore++;
}
    Button.y = 1000;
    Credits.y = 1200; 
    health.visible = false;
    xp.visible = false;
  fill("green");
  textSize(100);
  Crt.visible = false;  
   backButton.visible = false;  
  Credits.visible = true; 
    Button.visible = true; 
    skySkip.visible = true; 
    player.visible = false;
    Button.visible = true;
   skySkip.visible = true;
   Credits.visible = false; 
   GameOver.visible = false;
   }

   

   

   Ships();
   worm();
   clouds();
  }
  
drawSprites();

}//Ship,ShipGroup
function Ships(){
  if (frameCount % 120 === 0) {
    var Ship = createSprite(3300,1800,90,90);
    Ship.y = Math.round(random(3000,180));
    Ship.shapeColor = "red";
    ShipGroup.add(Ship);
    Ship.velocityX = -20;
    Ship.lifetime = 300;
    Ship.addImage(ShipImage);
  }
}
function worm(){
  if (frameCount % 90 === 0) {
    var worm = createSprite(3300,1800,190,90);
    worm.y = Math.round(random(3000,180));
    worm.addImage(wormImage);
    worm.scale = 0.2;
    wormGroup.add(worm);
    worm.velocityX = -14;
    worm.lifetime = 300;
  }
}
function clouds(){
  if (frameCount % 30 === 0) {
    var platform = createSprite(3300,1800,190,90);
    platform.y = Math.round(random(3000,180));
    plates.add(platform);
    platform.velocityX = -14;
    
    
    
    platform.lifetime = 300;
  
      
    var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: platform.addImage(plateImage);
                break;
        case 2: platform.addImage(plateImage2);
                break;
        case 3: platform.addImage(plateImage3);
                break;
        case 4: platform.addImage(plateImage4);
                break;
        default: break;
    
  }
}
 
 console.log("aoir");} 
