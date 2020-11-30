function jscheck() {
  document.getElementsByTagName("BODY")[0].classList.remove("no-js");
}
//theming local storage
if (localStorage.getItem("theme") != null) {
    getColour = localStorage.theme;
    document.body.className = getColour;
}
else { document.body.classList.add('lightTheme') }

const dayButton = document.getElementById('night');
dayButton.addEventListener('click', () => {
    setColour = "lightTheme"
    document.body.className = setColour
    localStorage.setItem("theme", setColour);
});

const nightButton = document.getElementById('day');
nightButton.addEventListener('click', () => {
    setColour = "darkTheme"
    document.body.className = setColour
    localStorage.setItem("theme", setColour);
});

//lazy load images
/*
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {  
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      window.addEventListener("load", lazyload);
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  })
*/
  // ServiceWorker is a progressive technology. Ignore unsupported browsers
  /*
  if ('serviceWorker' in navigator) {
    console.log('CLIENT: service worker registration in progress.');
    navigator.serviceWorker.register('../service-worker.min.js').then(function() {
      console.log('CLIENT: service worker registration complete.');
    }, function() {
      console.log('CLIENT: service worker registration failure.');
    });
  } else {
    console.log('CLIENT: service worker is not supported.');
  */