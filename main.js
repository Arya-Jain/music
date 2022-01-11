song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;
left_wrist_score = 0;

song_name ="";

rightWristY = 0;
rightWristY = 0;

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();

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

    
	fill("#FF0000");
	stroke("#FF0000");

    song_1 = song1.isPlaying();

    if(left_wrist_score >0.2){
        circle(leftWristX, leftWristY, 20);
        song2.stop();
        if(song_1 == false){
            song1.play();
        }
        else{
            document.getElementById("song").innerHTML = "song name : Harry potter theme" 
        }
    }
}

function gotPoses(results){
    if(results.length > 0)
    {

        console.log(results);

        left_wrist_score = results[0].pose.keypoints[9].score;

        rightWristY = results[0].pose.rightWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("the right wrist x = " + rightWristX + " y = " + rightWristY);

        leftWristY = results[0].pose.leftWrist.y;
        leftWristX = results[0].pose.leftWrist.x;
        console.log("the keft wrist x = " + leftWristX + " y = " + leftWristY);
    }
}

