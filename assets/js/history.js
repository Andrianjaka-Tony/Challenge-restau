/**
 * Fonction pour enlever la classe active du dot active
 * @return {void}
 */
const removeActiveDot = () => {
  document.querySelector(".dots span.active").classList.remove("active");
};

/**
 * Fonction pour switcher le contenu de history
 * @param {HTMLSpanElement} dot
 */
const switchHistoryItem = (dot) => {
  let history = document.querySelector(".history-items-container");
  let index = parseInt(dot.getAttribute("data-index"));
  let activeHistory = document.querySelector(".history-item.active");

  history.classList.add("invisible");
  window.setTimeout(() => {
    activeHistory.classList.remove("active");
    history.children[index].classList.add("active");
    history.classList.remove("invisible");
  }, 200);
};

let dots = document.querySelectorAll(".dots span");
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    removeActiveDot();
    dot.classList.add("active");
    switchHistoryItem(dot);
  });
});
