document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navBar = document.querySelector(".nav-bar");
    const scrollUpBtn = document.getElementById("scrollUpBtn");
    const overlay = document.getElementById("overlay");
    
    // Hamburger menu toggle
    hamburger.addEventListener("click", () => {
      navBar.classList.toggle("active");
    });


    //top button
    window.onscroll = function() {
      toggleScrollButton();
  };
  
  function toggleScrollButton() {
      const scrollUpBtn = document.getElementById("scrollUpBtn");
      if (window.pageYOffset > 20) {
          scrollUpBtn.style.display = "block";
      } else {
          scrollUpBtn.style.display = "none";
      }
  }
  
  function slowScrollToTop() {
      const scrollStep = -window.scrollY / 30;
      const scrollInterval = setInterval(function(){
          if (window.scrollY !== 0) {
              window.scrollBy(0, scrollStep);
          } else {
              clearInterval(scrollInterval);
          }
      }, 15);
  }
  
  document.getElementById('scrollUpBtn').addEventListener('click', function() {
      slowScrollToTop();
  });
  


  
    // Page navigation with overlay effect
    window.navigateTo = function (page) {
      overlay.classList.add("active");
  
      setTimeout(() => {
        window.location.href = `../${page}/${page}.html`;
      }, 500); // Adjust the delay to match the duration of the fadeIn animation
    };
  });
  

  // VISIBILITY SCRIPTING*********************
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

function toggleVisibilityOnScroll() {
  const elements = document.querySelectorAll('.about-fbg-wild');
  elements.forEach((element) => {
      if (isInViewport(element)) {
          element.classList.add('visible');
      } else {
          element.classList.remove('visible');
      }
  });
}

window.addEventListener('scroll', toggleVisibilityOnScroll);
document.addEventListener('DOMContentLoaded', toggleVisibilityOnScroll);