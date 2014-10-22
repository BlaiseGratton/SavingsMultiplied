
function getJSON(url, cb){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function(){
    cb(JSON.parse(xhr.responseText));
  };
  xhr.send();
}



document.addEventListener('DOMContentLoaded', function(){
  getJSON('https://savingsmultipliedssh.firebaseio.com/itemlist.json', function(data){
    var shopData= data;
    var loopLength = shopData.length;
    var $container = document.querySelector('.img-gallery');
    for (var i = 0; loopLength > i; i++) {
      addItemToList($container, shopData[i]);


      }

    function addItemToList($container, index){
      var index = shopData[i];
      var $div = document.createElement("div");
      var $li = document.createElement("li");
      var $img = document.createElement("img");
      var $price = document.createElement("p");
      var $time = document.createElement("p");
      var $seller = document.createElement("p");
      var $title = document.createElement("h3");
      $img.src = index.image;
      $price.textContent = index.price;
      $time.textContent = index.remaining;
      $seller.textContent = index.seller;
      $title.textContent = index.title;

      $div.appendChild($title);
      $div.appendChild($img);
      $div.appendChild($price);
      $div.appendChild($time);
      $div.appendChild($seller);
      $li.appendChild($div);
      $container.appendChild($li);
    }
    console.log(shopData);

       




        














  
  
  
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

