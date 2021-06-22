var dist=0;
var score=0;
var can = document.getElementById("canvas");
can.width = window.innerWidth;
can.height = window.innerHeight;
c = can.getContext("2d");
c.fillStyle = "grey";
c.fillRect(0, 0, window.innerWidth, window.innerHeight);
c.fillStyle = "black";
c.fillRect(0, 0, window.innerWidth, 300);
c.fillRect(0, window.innerHeight - 300, window.innerWidth, 300);

c.fillStyle = "blue";
var b = window.innerHeight - 350;
c.fillRect(600, b, 50, 50);

window.addEventListener("click", function () {
  if (b == window.innerHeight - 350) {
    c.clearRect(600, b, 50, 50);
    c.fillStyle = "grey";
    c.fillRect(600, b, 50, 50);
    c.fillStyle = "blue";
    c.fillRect(600, 300, 50, 50);
    b = 300;
  } else if (b == 300) {
    c.clearRect(600, 300, 50, 50);
    c.fillStyle = "grey";
    c.fillRect(600, 300, 50, 50);
    c.fillStyle = "blue";
    c.fillRect(600, window.innerHeight - 350, 50, 50);
    b = window.innerHeight - 350;
  }
});
var r1 = 1;
var x1 = window.innerWidth;
var id1 = null;
function animate1() {
  console.log("Shivam", x1, r1);
  if (r1 <= 2) {
    id1 = window.requestAnimationFrame(animate1);

    console.log("RAGHAV");
    c.fillStyle = "grey";
    c.fillRect(x1, window.innerHeight - 300, 200, 300);

    c.fillStyle = "black";
    c.fillRect(x1 + 190,window.innerHeight - 300,window.innerWidth - x1 - 190,300); //ensuring that when obstacle moves forward,the previous square is black again
    if (x1 + 199 <= 0) {
      x1 = window.innerWidth;
      r1 = Math.floor(Math.random() * 4);
    }
    if (check2() || check1()) {
      window.cancelAnimationFrame(id1);
      window.cancelAnimationFrame(id2);
    }
    dist+=0.001;
  score=Math.floor(dist*100);
  document.getElementById("gameover").innerHTML="Score: "+score;
    x1 = x1 - 10;
  } else {
    window.requestAnimationFrame(animate1);
    c.fillStyle = "black";
    c.fillRect(
      x1 + 190,window.innerHeight - 300,window.innerWidth - x1 - 190,300); //ensuring that when obstacle moves forward,the previous square is black again
    if (x1 + 199 <= 0) {
      x1 = window.innerWidth;
      r1 = Math.floor(Math.random() * 4);
    }
    dist+=0.001;
  score=Math.floor(dist*100);
  document.getElementById("gameover").innerHTML="Score: "+score;
    x1 = x1 - 10;
  }
}
animate1();

function check1() {
  if (x1 < 600 && x1 > 450 && b == window.innerHeight - 350 && r1 <= 2)
    return true;
}
var r2 = 1;
var x2 = window.innerWidth - 900;
var id2 = null;
function animate2() {
  if (r2 <= 1) {
    id2 = window.requestAnimationFrame(animate2);

    c.fillStyle = "grey";
    c.fillRect(x2, 0, 200, 300);

    c.fillStyle = "black";
    c.fillRect(x2 + 190, 0, window.innerWidth - x2 - 190, 300); //ensuring that when obstacle moves forward,the previous square is black again
    if (x2 + 199 <= 0) {
      x2 = window.innerWidth;
      r2 = Math.floor(Math.random() * 3);
    }
    if (check2() || check1()) {
      window.cancelAnimationFrame(id2);
      window.cancelAnimationFrame(id1);
    }
    x2 = x2 - 10;
  } else {
    window.requestAnimationFrame(animate2);
    c.fillStyle = "black";
    c.fillRect(x2 + 190,0,window.innerWidth - x2 - 190,300); //ensuring that when obstacle moves forward,the previous square is black again
    
    if (x2 + 199 <= 0) {
      x2 = window.innerWidth;
      r2 = Math.floor(Math.random() * 3);
    }
    x2 = x2 - 10;
  }
}
animate2();
function check2() {
  if (x2 < 600 && x2 > 450 && b == 300&&r2<=1) return true;
}