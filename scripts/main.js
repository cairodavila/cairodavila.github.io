
/* mudar cor do logo maior */
var myImage = document.querySelector('img#logo-maior');

myImage.onmouseenter = function() {
      myImage.classList.remove('transition2');
      myImage.setAttribute('class', 'transition1');

   myImage.setAttribute ('src','images/type-logo-coral.png');
}


myImage.onmouseleave = function() {
  myImage.classList.remove('transition1');
  myImage.setAttribute('class', 'transition2');

myImage.setAttribute ('src','images/type-logo.png');
}

/* mudar cor do insta */
var insta = document.querySelector('img#insta');

insta.onmouseenter = function() {
    var mySrc = insta.getAttribute('src');

      insta.setAttribute ('src','images/insta-logo-coral.svg');

}

insta.onmouseleave = function() {
    var mySrc = insta.getAttribute('src');

      insta.setAttribute ('src','images/insta-logo.svg');
}

/* mudar cor do face */
var face = document.querySelector('img#face');

face.onmouseenter = function() {
    var mySrc = face.getAttribute('src');

      face.setAttribute ('src','images/face-logo-coral.svg');

}

face.onmouseleave = function() {
    var mySrc = face.getAttribute('src');

      face.setAttribute ('src','images/face-logo.svg');
}

/* mudar imagem do display */
