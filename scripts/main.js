
function getJSON(url, cb){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function(){
    cb(JSON.parse(xhr.responseText));
  };
  xhr.send();
}


function addImageToDiv($container, image){
  var $li = document.createElement("li");
  var $img = document.createElement("img");
  $img.src = image;
  $li.appendChild($img);
  $container.appendChild($li);
}

document.addEventListener('DOMContentLoaded', function(){
  getJSON('https://savingsmultipliedssh.firebaseio.com/itemlist.json', function(data){
    var shopImages = data;
    var loopLength = shopImages.length;
    var $container = document.querySelector('.img-gallery');
    while (loopLength > 0) {
      addImageToDiv($container, shopImages[(loopLength-1)].image);


      loopLength--;
    }



       




    console.log(shopImages[0]);
    console.log(shopImages[0].image);
        














  
  
  
    var loginModal = document.querySelector('.login-modal');
    var lightbox = document.querySelector('.lightbox');
    var signin = document.querySelector('#signinbutton');
    var signincancel = document.querySelector('#signincancel');
  
  
    var loginModalToggleAreas = document.querySelectorAll(
      '.lightbox, #signinbutton, #signincancel'
    );
  
  
    for (var i=0; i<loginModalToggleAreas.length; i++){
      loginModalToggleAreas[i].addEventListener('click', function(){
        toggle(loginModal);
      });
    }
  });  
});

function toggle (element){
  if (element.classList) {
    element.classList.toggle('hidden')
  } else {
    var classes = element.className.split(' ');
    var existingIndex = -1;
    for (var i = classes.length; i--;) {
      if (classes[i] === 'hidden')
	existingIndex = i;
    }

    if (existingIndex >=0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

  element.className = classes.join(' ');
  }
}


function hide(element){
  if (element.classList)
    element.classList.add('hidden');
  else 
    element.className += ' ' + 'hidden';
  }

  function show(element){
    if (element.classList)
      element.classList.remove('hidden');
    else
      element.className = element.className
	.replace(new RegExp('(^|\\b)' + 'hidden'.split(' ')
	.join('|') + '(\\b|$)', 'gi'), ' ');
  }

