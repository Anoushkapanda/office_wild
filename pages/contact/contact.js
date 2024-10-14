// NAVBAR SCRIPTING
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

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


//*********************************FORM SUBMISSION*****************************************
window.onload = function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      const form = event.target;
      const data = new FormData(form);

      const templateParams = {
        from_name: data.get("name"),
        to_name: data.get("receiverName"),
        email_id: data.get("email"),
        designation: data.get("designation"),
        company: data.get("company"),
        subject: data.get("subject"),
        message: data.get("message") || "No message provided.",
      };

      console.log("Attempting to send email via EmailJS...");
      window.onload = function () {
        document
          .getElementById("contactForm")
          .addEventListener("submit", function (event) {
            event.preventDefault();

            const form = event.target;
            const data = new FormData(form);

            // Extract values from form data
            const name = data.get("name").trim();
            const email = data.get("email").trim();
            const receiverName = data.get("receiverName").trim();
            // const subject = data.get('subject').trim();
            const designation = data.get("designation").trim();
            const company = data.get("company").trim();

            const templateParams = {
              from_name: name,
              to_name: receiverName, // Dynamic receiver's name
              email_id: email,
              subject: subject,
              designation: designation,
              company: company,
              message: data.get("message") || "No message provided.",
            //   to_email: "binitabaral3711@gmail.com",
            };

            console.log("Attempting to send email via EmailJS...");

            emailjs
              .send("service_aby4lqq", "template_5wg17wd", templateParams)
              .then(
                function (response) {
                  console.log("SUCCESS!", response.status, response.text);
                  showMessage(
                    "Your message has been sent successfully!",
                    "success"
                  );
                },
                function (error) {
                  console.log("FAILED...", error);
                  showMessage(
                    "Failed to send the message. Please try again later.",
                    "error"
                  );
                }
              );
          });
      };

      function showMessage(message, type) {
        const messageContainer = document.getElementById("messageContainer");
        messageContainer.textContent = message;
        messageContainer.className = `message-container ${type}`;
        messageContainer.style.display = "block"; // Show the message
      }

      emailjs.send("service_aby4lqq", "template_5wg17wd", templateParams).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          showMessage("Your message has been sent successfully!", "success");
        },
        function (error) {
          console.log("FAILED...", error);
          showMessage(
            "Failed to send the message. Please try again later.",
            "error"
          );
        }
      );
    });
};

function showMessage(message, type) {
  const messageContainer = document.getElementById("messageContainer");
  messageContainer.textContent = message;
  messageContainer.className = `message-container ${type}`;
  messageContainer.style.display = "block";
}
