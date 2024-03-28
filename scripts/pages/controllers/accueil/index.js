import { photographerTemplate } from '../../../templates/accueil/index.js';
// async function getPhotographers(model) {
//   // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
//   // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".

// }

async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
// 1 e
export async function init(photographersData) {

  // Récupère les datas des photographes
  const photographers = photographersData;

  await displayData(photographers);
}

//init();
