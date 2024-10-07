$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      // Calculate target offset: minus navbar height plus the desired offset
      var navbarHeight = 90; // Adjust this value based on your navbar height
      var additionalOffset = 10; // The extra offset you want
      var targetOffset = $(hash).offset().top - navbarHeight + additionalOffset;

      $("html, body").animate(
        {
          scrollTop: targetOffset,
        },
        700, // Duration of the animation in milliseconds
        function () {
          history.pushState(null, null, " "); // Clears the hash
          window.location.hash = hash; // Re-applies the hash
        }
      );
    }
  });
});

// protfolio filters
$(window).on("load", function () {
  var t = $(".portfolio-container");
  t.isotope({
    filter: ".new",
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: !1,
    },
  }),
    $(".filters a").click(function () {
      $(".filters .active").removeClass("active"), $(this).addClass("active");
      var i = $(this).attr("data-filter");
      return (
        t.isotope({
          filter: i,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1,
          },
        }),
        !1
      );
    });
});

// JavaScript
const sections = document.querySelectorAll(".section");
const buttons = document.querySelectorAll(".btn-animation");

function checkVisibility() {
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      buttons[index].classList.add("active");
    } else {
      buttons[index].classList.remove("active");
    }
  });
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("resize", checkVisibility);
