function preload() {
    
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
    }
}
function Model_Loaded() {
    console.log("POSE NET IS INITIALIZED")
}
function draw() {
    image(video, 0, 0, 890, 680)
}
function take_snapshot() {
    save("MYfilterimage.png")
}