(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();

window.onload = function() {
  document.getElementById('loader').classList.remove('is-active');  //example function call.
}


(function(){
	setTimeout(function(){ document.getElementById('loader').classList.remove('is-active'); }, 10000);
})();