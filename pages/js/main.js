// ========================================
// COMMON CODE
// ========================================
function toggleScrollButton() {
    const scrollUpBtn = document.getElementById("scrollUpBtn");
    if (scrollUpBtn) {
        scrollUpBtn.style.display = window.pageYOffset > 20 ? "block" : "none";
    }
}

function slowScrollToTop() {
    const scrollStep = -window.scrollY / 30;
    const scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}

// NAVBAR TOGGLE FUNCTION
function toggleNavBar() {
    const navBar = document.querySelector(".nav-bar");
    if (navBar) {
        navBar.classList.toggle("active");
    }
}

// ========================================
// home.js
// ========================================
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const scrollUpBtn = document.getElementById("scrollUpBtn");
    const overlay = document.getElementById("overlay");

    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener("click", toggleNavBar);
    }

    // Top button
    window.onscroll = toggleScrollButton;

    // Smooth scroll to top button
    if (scrollUpBtn) {
        scrollUpBtn.addEventListener('click', slowScrollToTop);
    }

    // Page navigation with overlay effect
    if (overlay) {
        window.navigateTo = function (page) {
            overlay.classList.add("active");
            setTimeout(() => {
                window.location.href = `../${page}/${page}.html`;
            }, 500); // Adjust the delay to match the duration of the fadeIn animation
        };
    }
});

// ========================================
// about.js
// ========================================
const hamburgerAbout = document.querySelector(".hamburger");
if (hamburgerAbout) {
    hamburgerAbout.onclick = toggleNavBar;
}

// Top button
window.onscroll = toggleScrollButton;

if (document.getElementById('scrollUpBtn')) {
    document.getElementById('scrollUpBtn').addEventListener('click', slowScrollToTop);
}

// ========================================
// contact.js
// ========================================
window.onload = function () {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(contactForm);
            const templateParams = {
                from_name: formData.get("name"),
                to_name: formData.get("receiverName"),
                email_id: formData.get("email"),
                designation: formData.get("designation"),
                company: formData.get("company"),
                subject: formData.get("subject"),
                message: formData.get("message") || "No message provided.",
            };

            console.log("Attempting to send email via EmailJS...");

            emailjs.send("service_aby4lqq", "template_5wg17wd", templateParams).then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    showMessage("Your message has been sent successfully!", "success");
                },
                function (error) {
                    console.log("FAILED...", error);
                    showMessage("Failed to send the message. Please try again later.", "error");
                }
            );
        });
    }
};

// Show message function
function showMessage(message, type) {
    const messageContainer = document.getElementById("messageContainer");
    if (messageContainer) {
        messageContainer.textContent = message;
        messageContainer.className = `message-container ${type}`;
        messageContainer.style.display = "block"; // Show the message
    }
}

// ========================================
// download.js
// // ========================================
// DOWNLOADS SCRIPTING
document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '../../doc/fwild.pdf'; // Ensure this path is correct for the brochure
    link.download = 'fwild.pdf'; // Set the filename for the download
    document.body.appendChild(link); // Append the link to the body
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up after download
});

// Add download functionality for video
document.getElementById('downloadVideoButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '../../videos/L2M-MVIS.mp4'; // Replace with the correct path to your video
    link.download = 'yourVideoName.mp4'; // Set the filename for the download
    document.body.appendChild(link); // Append the link to the body
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up after download
});



// ========================================
// features.js
// ========================================
const hamburgerFeatures = document.querySelector(".hamburger");
if (hamburgerFeatures) {
    hamburgerFeatures.onclick = toggleNavBar;
}

// Top button
window.onscroll = toggleScrollButton;

if (document.getElementById('scrollUpBtn')) {
    document.getElementById('scrollUpBtn').addEventListener('click', slowScrollToTop);
}

// ========================================
// Visibility Scripting
// ========================================
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
