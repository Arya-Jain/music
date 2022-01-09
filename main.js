song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristY = 0;
rightWristY = 0;

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.position(260,10);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
	console.log("model is intialised");
}
  

function draw(){
    image(video, 0, 0, 500, 400);
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        rightWristY = results[0].pose.rightWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("the right wrist x = " + rightWristX + " y = " + rightWristY);
        leftWristY = results[0].pose.leftWrist.y;
        lefttWristX = results[0].pose.leftWrist.x;
        console.log("the keft wrist x = " + leftWristX + " y = " + leftWristY);
    }
}

