var modal=document.getElementById("modal");
var tune_f=new Audio("tune_fail.wav");
var tune_s=new Audio("gta_san_andreas.mp3");
var modal2=document.getElementById("modal2");
function start(){
modal2.style.display="none";
animate1();
animate2();
}
var highscore=window.localStorage.getItem("highscore");
if(highscore==null)
{
  document.getElementById("hiscore").innerHTML="Hi-Score:";
}
else{
  document.getElementById("hiscore").innerHTML="Hi-Score: "+highscore;
}


var dist=0;
var score=0;
var can = document.getElementById("canvas");
can.width = window.innerWidth;
can.height = window.innerHeight;
c = can.getContext("2d");
// c.fillStyle = "grey";
// c.fillRect(0, 0, window.innerWidth, window.innerHeight);
c.fillStyle = "black";
c.fillRect(0, 0, window.innerWidth, 275);
c.fillRect(0, window.innerHeight - 300, window.innerWidth, 300);

c.fillStyle = "blue";
var b = window.innerHeight - 350;
c.fillRect(100, b, 50, 50);

//using mouseclick as movement
// window.addEventListener("click", function moving () {
//   if (b == window.innerHeight - 350) {
//    c.fillStyle="grey";    
//     c.fillRect(100, b, 50, 50);
//          c.fillStyle = "blue";
//     c.fillRect(100, 275, 50, 50);
//     b = 275;
//   } else if (b == 275) {
    
//     c.fillStyle = "grey";
//     c.fillRect(100, 275, 50, 50);
//     c.fillStyle = "blue";
//     c.fillRect(100, window.innerHeight - 350, 50, 50);
//     b = window.innerHeight - 350;
//   }
// });

//Using spacebar as movement
document.body.onkeyup = function(e){
  if(e.keyCode == 32){
    if (b == window.innerHeight - 350) {
      c.fillStyle="grey";    
       c.fillRect(100, b, 50, 50);
            c.fillStyle = "blue";
       c.fillRect(100, 275, 50, 50);
       b = 275;
     } else if (b == 275) {
       
       c.fillStyle = "grey";
       c.fillRect(100, 275, 50, 50);
       c.fillStyle = "blue";
       c.fillRect(100, window.innerHeight - 350, 50, 50);
       b = window.innerHeight - 350;
     }  
  }
}




var r1 = 1;
var x1 = window.innerWidth;
var id1 = null;
function animate1() {
  // console.log("Shivam", x1, r1);
  if (r1 <= 2) {
    id1 = window.requestAnimationFrame(animate1);
    
    // console.log("RAGHAV");
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
  score=Math.floor(dist*10);
  document.getElementById("score").innerHTML="Score: "+score;
  console.log(score);
  x1 = x1 - 10;
  } else {
    id1=window.requestAnimationFrame(animate1);
    c.fillStyle = "black";
    c.fillRect(x1 + 190,window.innerHeight - 300,window.innerWidth - x1 - 190,300); //ensuring that when obstacle moves forward,the previous square is black again
    if (x1 + 199 <= 0) {
      x1 = window.innerWidth;
      r1 = Math.floor(Math.random() * 4);
    }
  dist+=0.001;
  score=Math.floor(dist*10);
    console.log(score);
    document.getElementById("score").innerHTML="Score: "+score;
    x1 = x1 - 10;
  }
}


function check1() {
  if (x1 <= 100 && x1 >= -50 && b == window.innerHeight - 350 && r1 <= 2)
  {if(highscore<=score)
    {window.localStorage.removeItem("highscore");
    window.localStorage.setItem("highscore",score);
    document.getElementById("hiscore").innerHTML="Hi-Score: "+score;
    document.getElementById("modal-content").innerHTML="Congrats!!You have beaten the Hi-score.The new record is:"+score;
    tune_s.play();}
    else
    {document.getElementById("modal-content").innerHTML="Your score is:"+score+" and Hi-score is:"+highscore;
  tune_f.play();}
    modal.style.display="block";
    return true;}
}
var r2 = 1;
var x2 = window.innerWidth - 900;
var id2 = null;
function animate2() {
  if (r2 <= 1) {
    id2 = window.requestAnimationFrame(animate2);
  
    c.fillStyle = "grey";
    c.fillRect(x2, 0, 200, 275);

    c.fillStyle = "black";
    c.fillRect(x2 + 190, 0, window.innerWidth - x2 - 190, 275); //ensuring that when obstacle moves forward,the previous square is black again
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
   id2= window.requestAnimationFrame(animate2);
    c.fillStyle = "black";
    c.fillRect(x2 + 190,0,window.innerWidth - x2 - 190,275); //ensuring that when obstacle moves forward,the previous square is black again
    
    if (x2 + 199 <= 0) {
      x2 = window.innerWidth;
      r2 = Math.floor(Math.random() * 3);
    }
    x2 = x2 - 10;
  }
}

function check2() {
  if (x2 < 100 && x2 > -50 && b == 275&&r2<=1)
  {if(highscore<score)
  {window.localStorage.removeItem("highscore");
  window.localStorage.setItem("highscore",score);
  document.getElementById("hiscore").innerHTML="Hi-Score: "+score;
  document.getElementById("modal-content").innerHTML="Congrats!!You have beaten the Hi-score.The new record is:"+score;
  tune_s.play();}
  else
    {document.getElementById("modal-content").innerHTML="Your score is:"+score+" and Hi-score is:"+highscore;
   tune_f.play();}
  modal.style.display="block";
  return true;} 
}




