noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    video.position(50,200)

    canvas=createCanvas(500,500);
    canvas.position(560,200);

    pose=ml5.poseNet(video,modelloaded);
    pose.on('pose',gotposes);
}

function modelloaded(){
    console.log("Model Loaded");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nosex="+noseX+" nosey="+noseY);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        console.log("rightwristX="+rightwristX+" leftwristX="+leftwristX);
        difference=floor(leftwristX-rightwristX)
        }
}

function draw(){
    background('#393E46');
    fill ("#FDF6F0");
    stroke ("#FDF6F0");
    square (noseX,noseY,difference);
    document.getElementById("square_sides").innerHTML="Width and height of the square ="+difference+"px"
}