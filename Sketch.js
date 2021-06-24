var princess;
var dress1, dress2, dress3;
var legging1, legging2, legging3;
var shoe1, shoe2, shoe3, shoe4;

var PrincessIMG;
var dress1IMG, dress2IMG, dress3IMG;
var legging1IMG, legging2IMG, legging3IMG;
var shoe1IMG, shoe2IMG, shoe3IMG, shoe4IMG;

var gameState = "start";

var background;

function preload(){
    PrincessIMG = loadImage("Princess.png");
    dress1IMG = loadImage("dress1.png");
    dress2IMG = loadImage("Dress2.png");
    dress3IMG = loadImage("Dress3.png");
    legging1IMG = loadImage("Legging1.png");
    legging2IMG = loadImage("Legging2.png");
    legging3IMG = loadImage("Legging3.png");
    shoe1IMG = loadImage("Shoe1.png");
    shoe2IMG = loadImage("Shoe2.png");
    shoe3IMG = loadImage("Shoe3.png");
    shoe4IMG = loadImage("Shoe4.png");

    background = loadImage("bg.jpg");
  }

  function setup(){
  createCanvas(700, 300);
  

  princess = createSprite(200,200,100,100);
  princess.addImage(PrincessIMG);

  dress1 = createSprite(550,130,20,50);
  dress1.addImage(dress1IMG);

  dress2 = createSprite(550,130,20,50);
  dress2.addImage(dress2IMG);

  dress3 = createSprite(550,130,20,50);
  dress3.addImage(dress3IMG);

  legging1 = createSprite(550,130,20,50);
  legging1.addImage(legging1IMG);

  legging2 = createSprite(550,130,20,50);
  legging2.addImage(legging2IMG);

  legging3 = createSprite(550,130,20,50);
  legging3.addImage(legging3IMG);

  shoe1 = createSprite(550,130,20,50);
  shoe1.addImage(shoe1IMG);

  shoe2 = createSprite(550,130,20,50);
  shoe2.addImage(shoe2IMG);

  shoe3 = createSprite(550,130,20,50);
  shoe3.addImage(shoe3IMG);

  shoe4 = createSprite(550,130,20,50);
  shoe4.addImage(shoe4IMG);


  }
  
  function draw() {
    background(background);
    drawSprites();

    if(gameState==="start"){
        textSize(25);
        text("The princess needs to get to the party as soon as possible, help her dress up! Drag the dresses, leggings and shoes on the princess", 200,200)
    }
  }