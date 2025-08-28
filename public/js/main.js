'use strict';

document.addEventListener('DOMContentLoaded', function() {
  // helpers
  // mobile detection
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  // trigger things if scrolled into view
  function isScrolledIntoView(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight && rect.bottom >= 0;
  }

  // Dr. Frank Poole
  const animationPlaceholder = document.querySelector('.animation-placeholder');
  if (animationPlaceholder) {
    animationPlaceholder.addEventListener('click', function() {
      this.classList.add('animation-flyoff');
      setTimeout(function() {
        console.debug('setTimeout branch executed for Dr. Frank Poole animation');
        const placeholder = document.querySelector('.animation-placeholder');
        if (placeholder) {
          placeholder.classList.remove('animation-flyoff');
          placeholder.style.display = 'none';
        }
      }, 1982);
      if (typeof ga !== 'undefined' && ga.hasOwnProperty('loaded') && ga.loaded === true) {
        ga('send', 'event', 'button', 'click', 'Dr. Frank Poole');
      }
    });
  }

  // portfolio
  let shownSmartphone = false;
  let shownIntermission = false;
  const featured = document.querySelector('.featured');
  if (featured) {
    featured.classList.remove('dreamers');
    featured.classList.add('blank');
  }
  
  window.addEventListener('scroll', function() {
    const elementSmartphone = document.querySelector('.portfolio-smartphone');
    const elementIntermission = document.querySelector('.animation-spin');
    
    if (elementSmartphone && isScrolledIntoView(elementSmartphone) && !shownSmartphone) {
      const featured = document.querySelector('.featured');
      if (featured) {
        featured.className = 'featured dreamers';
      }
      shownSmartphone = true;
    }
    
    if (elementIntermission && isScrolledIntoView(elementIntermission) && !shownIntermission) {
      const featured = document.querySelector('.featured');
      if (featured) {
        featured.className = 'featured vackor';
      }
      shownIntermission = true;
    }
  });
  
  const portfolioElements = document.querySelectorAll('.nexus5, .portfolio-next');
  portfolioElements.forEach(function(element) {
    element.addEventListener('click', function() {
      const featured = document.querySelector('.featured');
      if (!featured) return;
      
      if (featured.classList.contains('upwork')) {
        featured.className = 'featured novalite';
      } else if (featured.classList.contains('novalite')) {
        featured.className = 'featured tt';
      } else if (featured.classList.contains('tt')) {
        featured.className = 'featured vackor';
      } else if (featured.classList.contains('vackor')) {
        featured.className = 'featured dafed';
      } else if (featured.classList.contains('dafed')) {
        featured.className = 'featured dreamers';
      } else {
        featured.className = 'featured upwork';
      }
      
      if (typeof ga !== 'undefined' && ga.hasOwnProperty('loaded') && ga.loaded === true) {
        ga('send', 'event', 'button', 'click', 'devices');
      }
    });
  });

  // parallax header
  if (!isMobile()) {
    function updateParallax() {
      const y = window.pageYOffset || document.documentElement.scrollTop;
      const spaceOdyssey = document.querySelector('.space-odyssey');
      if (spaceOdyssey) {
        spaceOdyssey.style.transform = 'translateY(' + parseInt(y / 1.5) + 'px)';
      }
    }
    
    window.addEventListener('load', updateParallax);
    window.addEventListener('resize', updateParallax);
    window.addEventListener('scroll', updateParallax);
  }

});

// replace low quality images after the page loads
window.addEventListener('load', function() {
  if (window.innerWidth >= 768) {
    const headerImage = new Image();
    headerImage.src = 'img/stanley-kubrick-2001-space-odyssey.jpg?ver=28082025';
    headerImage.addEventListener('load', function() {
      const spaceOdyssey = document.querySelector('.space-odyssey');
      if (spaceOdyssey) {
        spaceOdyssey.src = headerImage.src;
      }
    });
  }
});
