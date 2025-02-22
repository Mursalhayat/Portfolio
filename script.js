var typed = new Typed(".text", {
    strings: ["YouTuber", "Web Developer", "Python Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
  });
  function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  // Highlight active section in navbar
  window.addEventListener("scroll", () => {
      let current = "";
      
      document.querySelectorAll("section").forEach((section) => {
          const sectionTop = section.offsetTop - 100;
          if (scrollY >= sectionTop) {
              current = section.getAttribute("id");
          }
      });

      navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").includes(current)) {
              link.classList.add("active");
          }
      });
  });
});
emailjs.init("T2mdk42A_zO1GcYKC"); // Replace with your actual Public Key

let templateParams = {
    from_name: name,
    from_email: email,
    message: message
};

emailjs.send("service_y7439j4", "template_ys35er3", templateParams)
    .then(function(response) {
        formMessage.style.color = "green";
        formMessage.textContent = "Message sent successfully!";
        document.getElementById("contactForm").reset();
    }, function(error) {
        formMessage.style.color = "red";
        formMessage.textContent = "Error sending message. Try again later.";
        console.error("EmailJS Error:", error);
    });
