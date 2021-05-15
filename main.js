var song = "";
var left_wrist_y;
var right_wrist_y

function preaload(){
song=loadSong("poct.mp3")
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
};
function modelloaded(){
    console.log("Model is loaded");
    };
    
    function gotPoses(results){
        if(results.length > 0){
    console.log(results);
    left_wrist_y=results[0].pose.leftWrist.y;
    right_wrist_y=results[0].pose.rightWrist.y;
        };      
    if(left_wrist_y < 500 && left_wrist_y > 100){
        song.play();
        song.setVolume(1);
        song.rate(1);
    };
    };