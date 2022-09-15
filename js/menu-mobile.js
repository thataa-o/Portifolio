function toggleMenu(button) {
    let nav = button.parentNode;
    nav.classList.toggle('active');
}

//quando clicar no menu levar a section da página
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

    function getDistanceFromTheTop(element) {
      const id = element.getAttribute("href");
      return document.querySelector(id).offsetTop;
    }

    function nativeScroll(distanceFromTheTop) {
      window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth",
      });
    }

    function scrollToSection(event) {
      const distanceFromTheTop = getDistanceFromTheTop(event.target) - 40;
      nativeScroll(distanceFromTheTop);
    }

    menuLinks.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });