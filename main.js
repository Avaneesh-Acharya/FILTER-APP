noseX=""
noseY=""
function preload() {    
    clown_nose=loadImage("https://i.postimg.cc/MHXD6Cxb/bigotes-moustaches-black-cartoon-mustache-png-clipart-removebg-preview.png")
}
function setup() {
    canvas=createCanvas(890, 680)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(890, 680)
    video.hide()
    pn=ml5.poseNet(video, Model_Loaded())
    pn.on('pose', Got_Pose)
}
function Got_Pose(Results) {
    if (Results.length>0) {
        console.log(Results)
        console.log("nose x="+Results[0].pose.nose.x)
        console.log("nose y="+Results[0].pose.nose.y)
        noseX=Results[0].pose.nose.x
        noseY=Results[0].pose.nose.y
    }   
}
function Model_Loaded() {
    console.log("POSE NET IS INITIALIZED")
}
function draw() {
    image(video, 0, 0, 890, 680)
    fill(255,0,0)
    stroke(0,25, 37)
    //circle(noseX, noseY, 15)//
    image(clown_nose, noseX-75, noseY-10, 145,65)
}
function take_snapshot() {
    save("MYfilterimage.png")
}