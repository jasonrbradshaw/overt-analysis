var onScrollHandler = function() {

  var origImage = document.getElementById('bIsles');

  var newImageUrl = origImage.src;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 1000) {
     newImageUrl = "images/IslesMap.png"
  }
  if (scrollTop > 1900) {
     newImageUrl = "images/england.png"
  }
  if (scrollTop > 3250) {
     newImageUrl = "images/IslesMap.png"
  }
  if (scrollTop > 5180) {
     newImageUrl = "images/england.png"
  }
  origImage.src = newImageUrl;
};

window.addEventListener ("scroll", onScrollHandler);