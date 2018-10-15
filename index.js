// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var memberBtn = document.getElementById("memberBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var buttonOne= document.getElementById('buttonOne')

var forInnerOne= document.getElementById('forInnerOne')


var loginButton;

var learnAbout = document.getElementById('learnAbout')
var michaelPic = document.getElementById('michaelPic')

michaelPic.addEventListener ('mouseover',typeWriter)

var seeAllBtn= document.getElementById('seeAllBtn')
var scaleId = document.getElementById('scaleId')

seeAllBtn.addEventListener('mouseover',scale)
seeAllBtn.addEventListener('mouseout',scale2)


var i = 0;
var txt = 'It all starts with an idea. '+ 
'But you can never tell where an idea will end up. '+
'Because ideas spread. '+
'They change, grow. '+
'They connect us with the world. '+
'And in a fast-moving world,'+
'Where good news moves at the speed of time,'+
"And bad news isn't always what it seems."+
'Because when push comes to shove.'+
'We all deserve a second chance '+
'To score.'+
'Dunder Mifflin. Limitless paper in a paperless world.'+"-Michael Gary Scott"
;
var speed = 150;

 
memberBtn.onclick = function() {
    modal.style.display = "block";
    forInnerOne.innerHTML='Thank you for your interest!!'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

buttonOne.onclick = function() {
    modal.style.display = "block";
    forInnerOne.innerHTML='<div class="container">'+
      '<label for="uname"><b>Username</b></label>'+
      '<input type="text" placeholder="Enter Username" name="uname" required>'+

      '<label for="psw"><b>Password</b></label>'+
      '<input type="password" placeholder="Enter Password" name="psw" required>'+

      '<button id="loginButton" type="submit">Login</button>'+
      '<label>'+
        '<input type="checkbox" checked="checked" name="remember"> Remember me'+
      '</label>'
    '</div>'
  ;
  loginButton = document.getElementById('loginButton')

  loginButton.onclick = function() {
     modal.style.display = "none";
     console.log('hi')

 }

}



 learnAbout.onclick = function() {
     modal.style.display = "block";
     forInnerOne.innerHTML='Here at the Dunder Mifflin member portal we offer you exclusive deals.. check back soon!';
 }



function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function scale(){
  scaleId.style.transform = 'scale(1.7)'

}

function scale2(){
  scaleId.style.transform = 'scale(1.0)'
}

  