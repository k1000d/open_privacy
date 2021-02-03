export default function Sketch (p) {

  p.constructor = function(p){
		this.x = Math.random(0,p.width);
		this.y = Math.random(0,p.height);
		this.r = Math.random(1,8);
		this.xSpeed = Math.random(-1,0.4);
		this.ySpeed = Math.random(-1,0.4);
    }
    
  let circles = [];

  p.setup = function() {
    p.createCanvas(1520, 430);
    this.circles();
  };

  //clean up after redirect
 
  p.circles = function(p) {
    for (let i = 0; i < 300; i++) {
      let circle = {
        x: Math.floor(Math.random() * (window.innerWidth- 80) + 60),
        y: Math.floor(Math.random() * (window.innerHeight- 70) + 60),
        diameter: Math.floor(Math.random() * 10 + 10),
        dx: (Math.random() - 0.5) * 4,
        dy: (Math.random() - 0.5) * 4
      };
      circles.push(circle);
    }
  };

  const changeVelocity = c => {
    if (c.x + c.diameter / 3 > window.innerWidth || c.x - c.diameter / 3 < 0) {
      c.dx = -c.dx;
    }
    if (c.y + c.diameter / 2 > window.innerHeight || c.y - c.diameter / 2 < 0) {
      c.dy = -c.dy;
    }
    c.x += c.dx;
    c.y += c.dy;
  };

 

  p.draw = () => {
    p.background(0);
    //loop through circles to draw them and draw lines between
    circles.forEach(c => {
      p.noStroke();
      p.fill('rgba(200,203,0,0.5)');
      p.ellipse(c.x, c.y, c.diameter, c.diameter);
      changeVelocity(c);
      circles.forEach(circleTwo => {
        let a = Math.abs(c.x - circleTwo.x);
        let b = Math.abs(c.y - circleTwo.y);
        let distance = Math.sqrt(a * a + b * b);
        if (distance < 105) {
          p.stroke('rgba(255, 204,0,02)');
          p.line(c.x, c.y, circleTwo.x, circleTwo.y);
        }
      });
    });
  
  };
};
