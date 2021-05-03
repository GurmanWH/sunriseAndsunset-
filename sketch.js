const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg,bgImg;

function preload() {
    // create getBackgroundImg( ) here
    bgImg=loadImage("sunrise1.png")
    bgImg=loadImage("sunrise2.png")
    bgImg=loadImage("sunrise3.png")
    bgImg=loadImage("sunrise4.png")
    bgImg=loadImage("sunrise5.png")
    bgImg=loadImage("sunrise6.png")
    bgImg=loadImage("sunset7.png")
    bgImg=loadImage("sunset8.png")
    bgImg=loadImage("sunset9.png")
    bgImg=loadImage("sunset10.png")
    bgImg=loadImage("sunset11.png")
    bgImg=loadImage("sunset12.png")
  

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

    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata")
   var responseJSON=await response.json()
   var dateTime=responseJSON.datetime
   var hour=dateTime.slice(11,13)
   //console.log(hour)
   
    // add conditions to change the background images from sunrise to sunset
    if(hour>=5&&hour<=15){
        bg="sunrise1.png",
        bg="sunrise2.png",
        bg="sunrise3.png",
        bg="sunrise4.png",
        bg="sunrise5.png",
        bg="sunrise6.png",
        console.log("insideif")
     }else if(hour>=16&&hour<=24){
       bg="sunset7.png",
       bg="sunset8.png",
       bg="sunset9.png",
       bg="sunset10.png",
       bg="sunset11.png",
       bg="sunset12.png"
     }
     backgroundImg = loadImage(bg)

    
}

