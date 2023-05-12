status="";
Tissues_image="";
objects= [];

function preload(){
    Tissues_image =  loadImage("Tissues.jpg");
}

function setup(){
    canvas= createCanvas(640,400);
    canvas.position(315,200);
    object_detector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML= " Status: Detecting objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status= true;
    object_detector.Detect(Tissues_image,gotResults);
}

function gotResults(results,error){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects= results;
}

function draw(){
    image(Tissues_image,0,0,640,350);
    if(status !=""){
        document.getElementById("status").innerHTML="Status: Objects Detetcted";

        fill("fc0303");
        percent= floor(objects[i].confidence*100);
        text(objects[i].label + " "+ percent+"%",objects[i].x - 800 , objects[i].y - 520);
        noFill();
        stroke("#fc0303");
        rect(objects[i].x - 800, objects[i].y - 520, objects[i].width - 910, objects[i].height - 250);
    }
}