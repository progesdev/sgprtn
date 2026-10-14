document.addEventListener('DOMContentLoaded',function(){
  var els=document.querySelectorAll('.sgpr-anim');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){if(e.isIntersecting){e.target.style.animationPlayState='running';io.unobserve(e.target);}});
    },{threshold:.12});
    els.forEach(function(e){e.style.animationPlayState='paused';io.observe(e);});
  }
});