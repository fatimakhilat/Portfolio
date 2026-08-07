import { projects, showCard } from "../data/project.js";



const filterButtons = document.querySelectorAll(".js-filter-btn");
const moreBtn = document.querySelector(".js-filter-btn2");
const filterPanel = document.querySelector(".js-projects-filter");
const projectsGrid = document.querySelector(".js-projects-grid");


let html = "";

projects.forEach(project => {
  html += showCard(project);
});

projectsGrid.innerHTML = html;

const projectCards = document.querySelectorAll(".js-project-card");

hideAllCards();
filterButtons.forEach(button => {
  button.addEventListener("click", handleProjectFilter);
});

function handleProjectFilter(event) {

  // Catégorie sélectionnée
  const selectedCategory = event.target.dataset.filter;

  // Bouton actif
  filterButtons.forEach(button => {
    button.classList.remove("active");
  });

  event.target.classList.add("active");

  // Cacher toutes les cartes
  hideAllCards();

  // Afficher les bonnes cartes une par une
  let delay = 0;

  projectCards.forEach(card => {

    const isVisible =
      selectedCategory === "all" ||
      card.dataset.category === selectedCategory;

    if (isVisible) {

      setTimeout(() => {
        card.classList.remove("hidden");
        card.classList.add("show");
      }, delay);

      delay += 150;

    }

  });

}

const categories = {};
// Compter les cartes
projectCards.forEach((card) => {
  const category = card.dataset.category;

  if (categories[category]) {
    // ici augmenter le compteur
    categories[category]++;
  }
  else {
    // ici créer le compteur avec la valeur 1
    categories[category] = 1;
  }

});

filterButtons.forEach(button => {

  const category = button.dataset.filter;
  const name = button.dataset.name;

  if (category === "all") {
    button.textContent = `${name} (${projectCards.length})`;
  } else {
    button.textContent = `${name} (${categories[category] || 0})`;
  }

});


function hideAllCards() {

  projectCards.forEach(card => {
    card.classList.add("hidden");
    card.classList.remove("show");
  });

}

/************************** buttonmenu ***********************************/

if (moreBtn && filterPanel) {
  moreBtn.addEventListener("click", toggleMenu);

  filterButtons.forEach(btn => {
    btn.addEventListener("click", closeMenu);
  });
}

function toggleMenu() {

  filterPanel.classList.toggle("active");

  const isOpen = filterPanel.classList.contains("active");

  localStorage.setItem(
    "filterpanel",
    isOpen ? "open" : "close"
  );
}

function closeMenu() {

  filterPanel.classList.remove("active");

}