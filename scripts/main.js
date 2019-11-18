
/* mudar cor do logo maior */
var myImage = document.querySelector('img#logo-maior');

myImage.onmouseenter = function() {
    var mySrc = myImage.getAttribute('src');

      myImage.setAttribute ('src','images/type-logo-coral.png');

}

myImage.onmouseleave = function() {
    var mySrc = myImage.getAttribute('src');

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

/* mudar texto do cabeçalho */
var target = document.getElementById('msg-topo');
var titles = [
    'a tal da ',
    'somos a ',
    'this is ',
    'bem vindo a '
];

function newTitle () {
    var i = (Math.random() * titles.length) | 0;
    target.innerText = titles[i];
}

newTitle();