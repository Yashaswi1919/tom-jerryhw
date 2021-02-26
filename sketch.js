var cat,mouse,catImg,cat_running,cat_runnning2;
function preload() {
    //load the images here
    cat_running=loadAnimation("images/cat1.png") ;
    cat_runninng2=loadAnimation("images/cat2.png");
    cat_runnning=loadAnimation("images/cat3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(900,200,50,50)
    cat.addAnimation("moving",cat_running);
    cat.scale=0.2;

    mouse = createSprite(100,200,50,50)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
   
    keyPressed();
     drawSprites();
     
    }
  
   


function keyPressed(){
    if (keyCode === LEFT_ARROW){
        cat.velocityx=-5;
        cat.addAnimation("cat_running",cat2.png);
        cat.changeAnimation("cat_running");
        cat.addAnimation("cat3Img",cat3.png);
        cat.changeAnimation("cat3Img")

    }
   

  //For moving and changing animation write code here


}
