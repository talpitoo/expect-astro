"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // helpers
  // mobile detection
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  // trigger things if scrolled into view
  function isScrolledIntoView(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight && rect.bottom >= 0;
  }

  // Dr. Frank Poole
  const animationPlaceholder = document.querySelector(".animation-placeholder");
  if (animationPlaceholder) {
    animationPlaceholder.addEventListener("click", function () {
      this.classList.add("animation-flyoff");
      setTimeout(function () {
        console.debug(
          "setTimeout branch executed for Dr. Frank Poole animation"
        );
        const placeholder = document.querySelector(".animation-placeholder");
        if (placeholder) {
          placeholder.classList.remove("animation-flyoff");
          placeholder.style.display = "none";
        }
      }, 1982);
      if (
        typeof ga !== "undefined" &&
        ga.hasOwnProperty("loaded") &&
        ga.loaded === true
      ) {
        ga("send", "event", "button", "click", "Dr. Frank Poole");
      }
    });
  }

  // ex portfolio
  // if (
  //   typeof ga !== "undefined" &&
  //   ga.hasOwnProperty("loaded") &&
  //   ga.loaded === true
  // ) {
  //   ga("send", "event", "button", "click", "devices");
  // }
});
