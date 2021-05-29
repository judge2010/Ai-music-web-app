var song = "";
var left_wrist_y;
var left_wrist_x;
var right_wrist_y
var right_wrist_x;

function preaload(){
song=loadSound("poct.mp3")
};
function setup(){
Canvas=createCanvas(550,500);
Canvas.position(540,250);
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
  poseNet.on("pose",gotPoses);
};
function draw(){
    image(video, 0,0,550,500);
    fill("#ff0000")
    circle(left_wrist_x ,left_wrist_y ,20);
    if(left_wrist_y < 500 && left_wrist_y > 100){
        song.play();
        song.setVolume(1);
        song.rate(1);
    };
};
function modelloaded(){
    console.log("Model is loaded");
    };
    
    function gotPoses(results){
        if(results.length > 0){
    console.log(results);
    left_wrist_y=results[0].pose.leftWrist.y;
    left_wrist_x=results[0].pose.leftWrist.x;
    right_wrist_x=results[0].pose.rightWrist.x;
    right_wrist_y=results[0].pose.rightWrist.y;
        };      
    
    };