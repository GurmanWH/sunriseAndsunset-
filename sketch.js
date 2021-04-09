const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    backgroundImg=loadImage("sunrise1.png")
    backgroundImg=loadImage("sunrise2.png")
    backgroundImg=loadImage("sunrise3.png")
    backgroundImg=loadImage("sunrise4.png")
    backgroundImg=loadImage("sunrise5.png")
    backgroundImg=loadImage("sunrise6.png")
    backgroundImg=loadImage("sunset7.png")
    backgroundImg=loadImage("sunset8.png")
    backgroundImg=loadImage("sunset9.png")
    backgroundImg=loadImage("sunset10.png")
    backgroundImg=loadImage("sunset11.png")
    backgroundImg=loadImage("sunset12.png")

}

function setup(){
    getBackgroundImg();
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
   if(backgroundImg){
       background(backgroundImg)
   }

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responseJSON=await response.json()
   
    // write code slice the datetime
    var dateTime=responseJSON.datetime 
    var hour=dateTime.slice(11,13)
    // add conditions to change the background images from sunrise to sunset
   if(hour>=5&&hour<=18){
        bg="sunrise1.png"
        bg="sunrise2.png"
        bg="sunrise3.png"
        bg="sunrise4.png"
        bg="sunrise5.png"
        bg="sunrise6.png"
   }else{
       bg="sunset7.png"
       bg="sunset8.png"
       bg="sunset9.png"
       bg="sunset10.png"
       bg="sunset11.png"
       bg="sunset12.png"
   }

    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg)
}
