window.addEventListener("load", function () {document.querySelectorAll("select").forEach(function (select) {select.style.display = "none";select.offsetHeight;select.style.display = "";});});const fadeInElements = document.querySelectorAll(".fade-in");function isElementInView(element) {const rect = element.getBoundingClientRect();return rect.top < window.innerHeight && rect.bottom >= 0;}function checkFadeIn() {fadeInElements.forEach((el) => {if (isElementInView(el)) {el.classList.add("visible");}});}window.addEventListener("scroll", checkFadeIn);window.addEventListener("load", checkFadeIn);