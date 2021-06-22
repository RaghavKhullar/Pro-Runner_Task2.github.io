var modal=document.getElementById("modal");
var tune_f=new Audio("tune_fail.wav");
var tune_s=new Audio("gta_san_andreas.mp3");
var modal2=document.getElementById("modal2");
function start(){
modal2.style.display="none";
animate1();
animate2();
animate3();
animate4();
animate5();
}
console.log(window.innerWidth);
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
can.addEventListener("click",  moving );

//Using spacebar as movement
document.body.onkeyup = function(e){
  if(e.keyCode == 32){
    moving();
  }
}

function moving(){if (b == window.innerHeight - 350) {
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


var r1 = 1;
var x1 = window.innerWidth;
var id1 = null;
function animate1() {
  // console.log("Shivam", x1, r1);
  if (r1 <= 2) {
    id1 = window.requestAnimationFrame(animate1);
    
    // console.log("RAGHAV");
    c.fillStyle = "grey";
    c.fillRect(x1, window.innerHeight - 300, 100, 300);

    c.fillStyle = "black";
    c.fillRect(x1 + 90,window.innerHeight - 300,150,300); //ensuring that when obstacle moves forward,the previous square is black again
    if (x1 + 99 <= 0) {
      x1 = window.innerWidth;
      r1 = Math.floor(Math.random() * 4);
    }
    if (check2() || check1()||check3()||check4()||check5()) {
     
      window.cancelAnimationFrame(id1);
      window.cancelAnimationFrame(id2);
      window.cancelAnimationFrame(id3);
      window.cancelAnimationFrame(id4);
      window.cancelAnimationFrame(id5);
      
    }
  dist+=0.001;
  score=Math.floor(dist*10);
  document.getElementById("score").innerHTML="Score: "+score;
  console.log(score);
  x1 = x1 - 10;
  } else {
    id1=window.requestAnimationFrame(animate1);
    c.fillStyle = "black";
    c.fillRect(x1 + 90,window.innerHeight - 300,150,300); //ensuring that when obstacle moves forward,the previous square is black again
    if (x1 + 99 <= 0) {
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
  if (x1 <= 100 && x1 >= 50 && b == window.innerHeight - 350 && r1 <= 2)
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



var r3 = 3;
var x3 = window.innerWidth-1000;
var id3 = null;
function animate3() {
  // console.log("Shivam", x1, r1);
  if (r3 <= 2) {
    id3 = window.requestAnimationFrame(animate3);
    
    // console.log("RAGHAV");
    c.fillStyle = "grey";
    c.fillRect(x3, window.innerHeight - 300, 100, 300);

    c.fillStyle = "black";
    c.fillRect(x3 + 90,window.innerHeight - 300,150,300); //ensuring that when obstacle moves forward,the previous square is black again
    if (x3 + 99 <= 0) {
      x3 = window.innerWidth;
      r3 = Math.floor(Math.random() * 4);
    }
    if (check2() || check1()||check3()||check4()||check5()) {
     
      window.cancelAnimationFrame(id1);
      window.cancelAnimationFrame(id2);
      window.cancelAnimationFrame(id3);
      window.cancelAnimationFrame(id4);
      window.cancelAnimationFrame(id5);
      
    }

  x3 = x3 - 10;
  } else {
    id1=window.requestAnimationFrame(animate3);
    c.fillStyle = "black";
    c.fillRect(x3 + 90,window.innerHeight - 300,150,300); //ensuring that when obstacle moves forward,the previous square is black again
    if (x3 + 99 <= 0) {
      x3 = window.innerWidth;
      r3 = Math.floor(Math.random() * 4);
    }
 
 
    x3 = x3 - 10;
  }
}



function check3() {
  if (x3 <= 100 && x3 >= 50 && b == window.innerHeight - 350 && r3 <= 2)
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



var r5 = 1;
var x5 = window.innerWidth-300;
var id5 = null;
function animate5() {
  // console.log("Shivam", x1, r1);
  if (r5 <= 2) {
    id5 = window.requestAnimationFrame(animate5);
    
    // console.log("RAGHAV");
    c.fillStyle = "grey";
    c.fillRect(x5, window.innerHeight - 300, 100, 300);

    c.fillStyle = "black";
    c.fillRect(x5 + 90,window.innerHeight - 300,150,300); //ensuring that when obstacle moves forward,the previous square is black again
    if (x5 + 99 <= 0) {
      x5 = window.innerWidth;
      r5 = Math.floor(Math.random() * 4);
    }
    if (check2() || check1()||check3()||check4()||check5()) {
     
      window.cancelAnimationFrame(id1);
      window.cancelAnimationFrame(id2);
      window.cancelAnimationFrame(id3);
      window.cancelAnimationFrame(id4);
      window.cancelAnimationFrame(id5);
    }

  x5 = x5 - 10;
  } else {
    id5=window.requestAnimationFrame(animate5);
    c.fillStyle = "black";
    c.fillRect(x5 + 90,window.innerHeight - 300,150,300); //ensuring that when obstacle moves forward,the previous square is black again
    if (x5 + 99 <= 0) {
      x5 = window.innerWidth;
      r5 = Math.floor(Math.random() * 4);
    }
 
 
    x5 = x5 - 10;
  }
}



function check5() {
  if (x5 <= 100 && x5 >= 50 && b == window.innerHeight - 350 && r5<= 2)
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
var x2 = window.innerWidth - 600;
var id2 = null;
function animate2() {
  if (r2 <= 1) {
    id2 = window.requestAnimationFrame(animate2);
  
    c.fillStyle = "grey";
    c.fillRect(x2, 0, 100, 275);

    c.fillStyle = "black";
    c.fillRect(x2 + 90, 0, 150, 275); //ensuring that when obstacle moves forward,the previous square is black again
    if (x2 + 99 <= 0) {
      x2 = window.innerWidth;
      r2 = Math.floor(Math.random() * 3);
    }
    if (check2() || check1()||check3()||check4()||check5()) {
      window.cancelAnimationFrame(id2);
      window.cancelAnimationFrame(id1);
      window.cancelAnimationFrame(id3);
      window.cancelAnimationFrame(id4);
      window.cancelAnimationFrame(id5);
    }
    x2 = x2 - 10;
  } else {
   id2= window.requestAnimationFrame(animate2);
    c.fillStyle = "black";
    c.fillRect(x2 + 90,0,150,275); //ensuring that when obstacle moves forward,the previous square is black again
    
    if (x2 + 99 <= 0) {
      x2 = window.innerWidth;
      r2 = Math.floor(Math.random() * 3);
    }
    x2 = x2 - 10;
  }
}

function check2() {
  if (x2 < 100 && x2 > 50 && b == 275&&r2<=1)
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





var r4 = 1;
var x4 = window.innerWidth - 1300;
var id4 = null;
function animate4() {
  if (r4 <= 1) {
    id4 = window.requestAnimationFrame(animate4);
  
    c.fillStyle = "grey";
    c.fillRect(x4, 0, 100, 275);

    c.fillStyle = "black";
    c.fillRect(x4 + 90, 0, 150, 275); //ensuring that when obstacle moves forward,the previous square is black again
    if (x4 + 99 <= 0) {
      x4 = window.innerWidth;
      r4 = Math.floor(Math.random() * 3);
    }
    if (check2() || check1()||check3()||check4()||check5()) {
      window.cancelAnimationFrame(id2);
      window.cancelAnimationFrame(id1);
      window.cancelAnimationFrame(id3);
      window.cancelAnimationFrame(id5);
      window.cancelAnimationFrame(id4);
    }
    x4 = x4 - 10;
  } else {
   id4= window.requestAnimationFrame(animate4);
    c.fillStyle = "black";
    c.fillRect(x4 + 90,0,150,275); //ensuring that when obstacle moves forward,the previous square is black again
    
    if (x4 + 99 <= 0) {
      x4 = window.innerWidth;
      r4 = Math.floor(Math.random() * 3);
    }
    x4 = x4 - 10;
  }
}

function check4() {
  if (x4 < 100 && x4 > 50 && b == 275&&r4<=1)
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
