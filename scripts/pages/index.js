    async function getPhotographers() {
      // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
      // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".

      let photographersApi = new FetchApi();
      const photographersData = await photographersApi.get('/data/photographers.json');

      return photographersData;
    }

    async function displayData(photographers) {
      const photographersSection = document.querySelector('.photographer_section');

      photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
      });
    }
    // 1 e
    async function init() {
      // Récupère les datas des photographes
      const { photographers } = await getPhotographers();
      console.log('photographers: ', photographers);
      displayData(photographers);
    }
    
    init();
    
