// NAVBAR SCRIPTING
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}


// DOWNLOADS SCRIPTING
document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '../../doc/fwild.pdf';
    link.download = 'fwild.pdf';
    link.click();
});

//TOP BUTTON
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
