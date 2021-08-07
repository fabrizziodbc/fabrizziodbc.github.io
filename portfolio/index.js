const fullStack = document.getElementById("writing-effect");
const loader = document.querySelector(".loader-container");
const header__hamburguer = document.querySelector(".header__hamburguer");
const menu_full = document.querySelector(".menu_full");
const portfolio__project = document.querySelectorAll(".portfolio__project");

addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    /* loader.classList.toggle("show"); */
    loader.style.opacity = 0
    loader.style.visibility = 'hidden'
  });
  header__hamburguer.addEventListener("click", () => {
    menu_full.classList.toggle("showRight");
  });
  menu_full.addEventListener("click", () => {
    menu_full.classList.toggle("showRight");
  });
  portfolio__project.forEach((item) =>
    item.addEventListener("mouseenter", () => {
      item.querySelector(".portfolio__hover").classList.add("showBot");
      /* item.querySelector(".portfolio__hover").style.visibility = 'visible'
      item.querySelector(".portfolio__hover").style.opacity = 1 */
    })
  );
  portfolio__project.forEach((item) =>
    item.addEventListener("mouseleave", () => {
      item.querySelector(".portfolio__hover").classList.remove("showBot");
     /* item.querySelector(".portfolio__hover").style.visibility = 'hidden'
     item.querySelector(".portfolio__hover").style.opacity = 0 */
    })
  );
});

const writingEffect = (text, time, etiqueta) => {
  let arrayCaracteres = text.split("");
  etiqueta.innerHTML = "";
  let cont = 0;
  let writing = setInterval(() => {
    etiqueta.innerHTML += arrayCaracteres[cont];
    cont++;
    if (cont === arrayCaracteres.length) {
      clearInterval(writing);
    }
  }, time);
};
