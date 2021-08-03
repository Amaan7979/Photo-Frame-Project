function preload() {

}

function setup() {
canvas = createCanvas(640,500);
canvas.position(150,150);
video = createCapture(VIDEO);
 video.hide();
}

function draw() {
image(video,230,150,220,200);
fill("red");
circle(50,50,80);
circle(150,50,80);
circle(250,50,80);
circle(350,50,80);
circle(450,50,80);
circle(550,50,80);

circle(50,150,80);
circle(50,250,80);
circle(50,350,80);
circle(50,450,80);

circle(150,450,80);
circle(250,450,80);
circle(350,450,80);
circle(450,450,80);
circle(550,450,80);

circle(550,150,80);
circle(550,250,80);
circle(550,350,80);
}
 
function take_snapshot() {
    save("picture.png")
}
  