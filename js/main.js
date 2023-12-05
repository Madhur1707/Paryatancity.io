document.addEventListener("DOMContentLoaded", function () {
  // Spinner
  var spinner = function () {
    setTimeout(function () {
      var spinnerElement = document.getElementById("spinner");
      if (spinnerElement) {
        spinnerElement.classList.remove("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 45) {
      navbar.classList.add("sticky-top", "shadow-sm");
    } else {
      navbar.classList.remove("sticky-top", "shadow-sm");
    }
  });

  // Dropdown on mouse hover
  var dropdowns = document.querySelectorAll(".dropdown");
  var showClass = "show";

  function toggleDropdown() {
    var thisDropdown = this;
    thisDropdown.classList.toggle(showClass);
    var isExpanded = thisDropdown.classList.contains(showClass);
    thisDropdown.querySelector(".dropdown-toggle").setAttribute("aria-expanded", isExpanded);

    var dropdownMenu = thisDropdown.querySelector(".dropdown-menu");
    dropdownMenu.classList.toggle(showClass);
  }

  function handleMediaQuery(mediaQuery) {
    if (mediaQuery.matches) {
      dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener("mouseenter", toggleDropdown);
        dropdown.addEventListener("mouseleave", toggleDropdown);
      });
    } else {
      dropdowns.forEach(function (dropdown) {
        dropdown.removeEventListener("mouseenter", toggleDropdown);
        dropdown.removeEventListener("mouseleave", toggleDropdown);
      });
    }
  }

  var mediaQuery = window.matchMedia("(min-width: 992px)");
  handleMediaQuery(mediaQuery);
  mediaQuery.addListener(handleMediaQuery);

  // Carousel Photos
  var carouselExample = document.getElementById("carouselExample");
  if (carouselExample) {
    carouselExample.carousel({
      interval: 1000,
    });
  }

  // Read More Toggle Button
  function toggleParagraph(day) {
    var paragraph = document.getElementById("hiddenParagraph" + day);
    if (paragraph.style.maxHeight === "0px" || paragraph.style.maxHeight === "") {
      paragraph.style.display = "block";
      setTimeout(function () {
        paragraph.style.maxHeight = paragraph.scrollHeight + "px";
        paragraph.style.opacity = "1";
      }, 10);
    } else {
      paragraph.style.maxHeight = "0px";
      paragraph.style.opacity = "0";
      setTimeout(function () {
        paragraph.style.display = "none";
      }, 500);
    }
  }

  document.getElementById("readMoreButton1").addEventListener("click", function () {
    toggleParagraph(1);
  });

  document.getElementById("readMoreButton2").addEventListener("click", function () {
    toggleParagraph(2);
  });

  document.getElementById("readMoreButton3").addEventListener("click", function () {
    toggleParagraph(3);
  });

  // PopUp Form
  var popupIcon = document.getElementById("popupIcon");
  var popupForm = document.getElementById("popupForm");
  var overlay = document.getElementById("overlay");
  var cancelBtn = document.getElementById("cancel");

  function openPopupForm() {
    popupForm.style.display = "block";
    overlay.style.display = "block";
  }

  function closePopupForm() {
    popupForm.style.display = "none";
    overlay.style.display = "none";
  }

  if (popupIcon) {
    popupIcon.addEventListener("click", openPopupForm);
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", closePopupForm);
  }

  // Back to top button
  window.addEventListener("scroll", function () {
    var backToTop = document.querySelector(".back-to-top");
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  var backToTopBtn = document.querySelector(".back-to-top");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
});
