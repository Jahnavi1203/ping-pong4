rightWristX = "";
rightWristY = "";
rightWristScore = "";   

function setup(){
    var canvas =  createCanvas(700,600);
    canvas.parent('canvas');
    
    video = createCapture(VIDEO);
    video.size(700, 600);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background(0);
    image(video, 0, 0, 700, 600);

    if(rightWristScore > 0.2){
        fill("#FFFF00");
        stroke("#FFFF00");
        circle(rightWristX, rightWristY, 30);
    }

}

function modelLoaded(){
    console.log("Model Loaded!!");
}

function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        rightWristScore = results[0].pose.score;
        console.log("RightWristX = " + rightWristX + ", RightWristY =" + rightWristY + " RightWristScore" + rightWristScore);
    }
}