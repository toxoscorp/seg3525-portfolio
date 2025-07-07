(function() {
  "use strict"; // Start of use strict

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {

    var navbarCollapse = mainNav.querySelector('.navbar-collapse');
    
    if (navbarCollapse) {
      
      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      
      var navbarItems = navbarCollapse.querySelectorAll('a');
      
      // Closes responsive menu when a scroll trigger link is clicked
      for (var item of navbarItems) {
        item.addEventListener('click', function (event) {
          collapse.hide();
        });
      }
    }

    // Collapse Navbar
    var collapseNavbar = function() {

      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    collapseNavbar();
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);
  }

})(); // End of use strict

  // Select all cards
  document.querySelectorAll('.project-img').forEach(function(card) {
    card.style.cursor = 'pointer'; // Make it look clickable
    card.addEventListener('click', function() {
      if (card.classList.contains('gymjim')) {
        window.location.href = 'https://uottawa-project-sharing.github.io/seg3525-assignment2/';
      } else if (card.classList.contains('tilematcher')) {
      window.location.href = 'https://uottawa-project-sharing.github.io/seg3525-assignment3/';
    } else if (card.classList.contains('stylenest')) {
      window.location.href = 'https://uottawa-project-sharing.github.io/seg3525-assignment4/';
    } else {
        window.location.href = 'wip.html';
      }
    });
  });
  // Select all cards
  document.querySelectorAll('.project-card').forEach(function(card) {
    card.style.cursor = 'pointer'; // Make it look clickable
    card.addEventListener('click', function() {
      if (card.classList.contains('gymjim')) {
        window.location.href = 'https://uottawa-project-sharing.github.io/seg3525-assignment2/';
      } else if (card.classList.contains('tilematcher')) {
      window.location.href = 'https://uottawa-project-sharing.github.io/seg3525-assignment3/';
    } else if (card.classList.contains('stylenest')) {
      window.location.href = 'https://uottawa-project-sharing.github.io/seg3525-assignment4/';
    } else {
        window.location.href = 'wip.html';
      }
    });
  });
