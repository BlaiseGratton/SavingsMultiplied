document.addEventListener('DOMContentLoaded', function(){
  var loginModal = document.querySelector('.login-modal');
  var lightbox = document.querySelector('.lightbox');
  var signin = document.querySelector('#signinbutton');
  var signincancel = document.querySelector('#signincancel');
  


  lightbox.addEventListener('click', function(){
    hide(document.querySelector('.login-modal'));
  });
  
  signin.addEventListener('click', function(){
    show(document.querySelector('.login-modal'));
  });

  signincancel.addEventListener('click', function(){
    hide(document.querySelector('.login-modal'));
  });
});



function hide(element){
    element.style.display = "none";
  }

  function show(element){
    element.style.display = "block";
  }


