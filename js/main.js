(function () {
  "use strict";

  /************************Popup Form ********************* */
  document.addEventListener("DOMContentLoaded", function () {
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

    popupIcon.addEventListener("click", openPopupForm);
    cancelBtn.addEventListener("click", closePopupForm);
 })
  /************************Popup Form ********************* */

  

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
  var dropdownToggle = document.querySelectorAll(".dropdown-toggle");
  var dropdownMenu = document.querySelectorAll(".dropdown-menu");
  var showClass = "show";

  function handleDropdownHover() {
    var thisDropdown = this;
    thisDropdown.classList.add(showClass);
    thisDropdown.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "true");
    thisDropdown.querySelector(".dropdown-menu").classList.add(showClass);
  }

  function handleDropdownLeave() {
    var thisDropdown = this;
    thisDropdown.classList.remove(showClass);
    thisDropdown.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
    thisDropdown.querySelector(".dropdown-menu").classList.remove(showClass);
  }

  function handleMediaQuery(event) {
    if (window.matchMedia("(min-width: 992px)").matches) {
      dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener("mouseenter", handleDropdownHover);
        dropdown.addEventListener("mouseleave", handleDropdownLeave);
      });
    } else {
      dropdowns.forEach(function (dropdown) {
        dropdown.removeEventListener("mouseenter", handleDropdownHover);
        dropdown.removeEventListener("mouseleave", handleDropdownLeave);
      });
    }
  }

  window.addEventListener("load", handleMediaQuery);
  window.addEventListener("resize", handleMediaQuery);

  // Carousel Photos
  var carouselExample = document.getElementById("carouselExample");
  if (carouselExample) {
    new bootstrap.Carousel(carouselExample, {
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

  // Back to top button
  window.addEventListener("scroll", function () {
    var backToTop = document.querySelector(".back-to-top");
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  var backToTopButton = document.querySelector(".back-to-top");
  if (backToTopButton) {
    backToTopButton.addEventListener("click", function () {
      document.documentElement.scrollTop = 0;
    });
  }
})();
