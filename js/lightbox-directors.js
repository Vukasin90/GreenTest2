
var lbImage = document.querySelector('.lightbox-img');
var lbDirectors = document.querySelector('.lightbox-directors');
var profiles = document.querySelectorAll('.profiles');
var closeDirectorsBox = document.querySelector('.close-button-two');

// var profiles2 = document.querySelectorAll('.profiles'); 

// profiles.addEventListener('click', function(e) {
//     var imgLink = e.target.closest('img');
//     var lightBoxImage = imgLink.getAttribute('src');

//     lbImage.setAttribute('src', lightBoxImage);
//     lbDirectors.setAttribute('data-state', 'visible');
// });

closeDirectorsBox.addEventListener('click', function(){
    lbDirectors.setAttribute('data-state', 'invisible');
});
document.addEventListener('keyup', function(e) {
    if(e.keyCode === 27) {
        closeDirectorsBox.click();
    }
})

for(var i = 0; i < profiles.length; i++) {
    profiles[i].addEventListener('click', function() {
        var image = this.querySelector('img');
        var text = this.querySelector('span');

        var lightBoxImage = image.getAttribute('src');

        lbImage.setAttribute('src', lightBoxImage);
        lbDirectors.setAttribute('data-state', 'visible');

        console.log(image, text);
    });
}