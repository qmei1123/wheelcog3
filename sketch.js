function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
}

function draw() { 
    background(66,0,63);
    //line following mouse
    

    
    for (i = 0; i < width - 140; i+=65) {
        for (j = 0; j < height - 140; j+=70) {

            //custom shape 
            beginShape();
            fill(209,209,246,80);
            noStroke();

            let verticesTwo = map(mouseY, 0, height, 3, 100);

            for(let b = 0; b < 360; b += verticesTwo) {
                let x2 = 60 * cos(b) + 180;
                let y2 = 60 * sin(b) + 180;
                vertex (x2 + i - 90, y2 + j - 90);
            }
            endShape(CLOSE);

            beginShape();
            fill(66,0,63);
            noStroke();

            let vertices = map(mouseX, 0, width, 5, 100);

            for(let a = 0; a < 360; a += vertices) {
                let x = 20 * sin(a) + 180;
                let y = 20 * cos(a) + 180;
                vertex (x + i - 120, y + j - 120);
            }
            endShape(CLOSE);
        }
    }
}