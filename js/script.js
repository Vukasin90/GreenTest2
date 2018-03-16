// VIDEO - LIGHTBOX ////////////////////////////////////////

var playButton = document.querySelector(".play-button");
var lightBox = document.querySelector(".lightbox");
var closeButton = document.querySelector(".close-button");

if(playButton) {
    playButton.addEventListener("click", function() {
       lightBox.setAttribute("data-state", "visible"); 
    });
}

if(closeButton) {
    closeButton.addEventListener("click", function(){
        lightBox.setAttribute("data-state", "invisible");
    });
}

document.addEventListener('keyup', function(e) {
    if(e.keyCode === 27) {
        closeButton.click();
    }
});

// LIGHTBOX DIRECTORS 

var lbImage = document.querySelector('.lightbox-img');
var lbDirectors = document.querySelector('.lightbox-directors');
var profiles = document.querySelectorAll('.profiles');
var closeDirectorsBox = document.querySelector('.close-button-two');


for(var i = 0; i < profiles.length; i++) {
    profiles[i].addEventListener('click', function() {
        var image = this.querySelector('img');
        var text = this.querySelector('span');

        var lightBoxImage = image.getAttribute('src');

        lbImage.setAttribute('src', lightBoxImage);
        lbDirectors.setAttribute('data-state', 'visible');
    });
}

if(closeDirectorsBox) {
    closeDirectorsBox.addEventListener('click', function() {
        lbDirectors.setAttribute('data-state', 'invisible');
    });
}

document.addEventListener('keyup', function(e) {
    if(closeDirectorsBox) {
        if(e.keyCode === 27) {
            closeDirectorsBox.click();
        }
    }
});


// HAMBURGER MENU 

var menuToggle = document.querySelector('.menu-toggle');
var hamburgerMenu = document.querySelector('.hamburger-menu');
var subMenu = document.querySelector('.sub-open');
var subMenuToggle = document.querySelector('.sub-hamburger-menu')

if(menuToggle) {
    menuToggle.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('hamburger-menu-open');
        menuToggle.classList.toggle('menu-clicked');
    });
}

if(subMenu) {
    subMenu.addEventListener('click', function() {
        subMenuToggle.classList.toggle('sub-menu-toggle');
    });
}