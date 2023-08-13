document.addEventListener('DOMContentLoaded'), function() {
  const navToggle = document.getElementById("navToggle");
const overlay = document.getElementById("overlay");
const closeOverlay = document.getElementById("closeOverlay");

navToggle.addEventListener("click", () => {
  overlay.classList.toggle("active");
  if (overlay.classList.contains("active")) {
    overlay.style.right = "0";
  } else {
    overlay.style.right = "-100%";
  }
});

closeOverlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  overlay.style.right = "-100%";
});

window.addEventListener("scroll", () => {
  if (overlay.classList.contains("active")) {
    overlay.classList.remove("active");
    overlay.style.right = "-100%";
  }
});

// Check screen width on load and resize
function checkScreenWidth() {
  if (window.innerWidth > 767) {
    overlay.classList.remove("active");
    overlay.style.right = "-100%";
  }
}

window.addEventListener("load", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);

const portfolioTitle = document.getElementById("portfolio-title");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0, // 100% of the element visible in the viewport
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      portfolioTitle.classList.add("animate-slide-opacity");
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(portfolioTitle);

function setupFullScreen(
  fullScreenLinks,
  fullScreenOverlay,
  fullScreenImage,
  closeButton,
  prevButton,
  nextButton,
  imageUrls
) {
  let currentIndex = 0;

  fullScreenLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openFullScreen(index);
    });
  });

  closeButton.addEventListener("click", closeFullScreen);
  prevButton.addEventListener("click", showPrevImage);
  nextButton.addEventListener("click", showNextImage);

  function openFullScreen(imageIndex) {
    fullScreenImage.src = imageUrls[imageIndex];
    currentIndex = imageIndex;

    fullScreenOverlay.style.opacity = 0;
    fullScreenOverlay.style.display = "flex";

    setTimeout(() => {
      fullScreenOverlay.style.opacity = 1;
    }, 10);
  }

  function closeFullScreen() {
    fullScreenOverlay.style.display = "none";
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    openFullScreen(currentIndex);
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    openFullScreen(currentIndex);
  }
}

// For Project 1
setupFullScreen(
  document.querySelectorAll(".full-screen-link"),
  document.querySelector(".full-screen-overlay"),
  document.querySelector(".full-screen-image"),
  document.querySelector(".full-screen-close"),
  document.querySelector(".prev"),
  document.querySelector(".next"),
  [
    "img/rokmonta/rokmonta1.png",
    "img/rokmonta/rokmonta2.png",
    "img/rokmonta/rokmonta3.png",
    // Add more image URLs as needed
  ]
);

// For Project 2
setupFullScreen(
  document.querySelectorAll(".full-screen-link-project2"),
  document.querySelector(".full-screen-overlay-project2"),
  document.querySelector(".full-screen-image-project2"),
  document.querySelector(".full-screen-close-project2"),
  document.querySelector(".prev-project2"),
  document.querySelector(".next-project2"),
  [
    "img/mileOfprogress/1.png",
    "img/mileOfprogress/2.png",
    "img/mileOfprogress/3.png",
    "img/mileOfprogress/4.png",
    "img/mileOfprogress/5.png",
    "img/mileOfprogress/6.png",
    "img/mileOfprogress/7.png",
  ]
);
}
  

