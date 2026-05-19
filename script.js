function getData() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      /// EXAM: COMPLÉTEZ LE CODE ICI !
      console.log(data);


      // TODO 1: REMPLIR LE HEADER
      let headerDiv = document.querySelector(".container");
      console.log(headerDiv);

      let journal = data.journal;

      /// Brouillon pour plus tard : 
      // <p>${journal.texteAppelAction}</p>
      //   <br></br>


      headerDiv.innerHTML = `
        <img src="${journal.logo}" alt="">
        <h1>${journal.nomJournal}</h1>
        <p><b>${journal.phraseAccroche}</b></p>
      `;


      // TODO 2: REMPLIR LA NAVIGATION

      let navDiv = document.querySelector(".navbar");
      console.log(navDiv);

      let navButton1 = document.createElement("button");
      
      let navButton2 = document.createElement("button");

      let navButton3 = document.createElement("button");

      let navButton4 = document.createElement("button");

      navDiv.insertAdjacentHTML("beforeend", navButton1);


      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL

      let heroSection = document.querySelector(".hero");
      console.log(heroSection);

      let articleContainer = document.getElementById("article-principal")

      let article = data.journal.articlePrincipal;

      articleContainer.innerHTML = `
        <img id="hero-image" src="${article.image}" alt="">
        
        <div class="hero-info">
          <button class="read-article-btn">Actualités</button>
          <h2 id="hero-titre">${article.titre}</h2>
          <p id="hero-description"><b>${article.description}</b></p>
          <p id="hero-auteur">${article.theme} — ${article.date}</p>
        </div>
      `;


      // TODO 4: REMPLIR LA GRILLE D'ARTICLES
 
      let containerArticles = document.querySelector("#articles-grid");
 
      function creerCarte(article) {
        let articles = data.journal.articles[0];
       
        let card = `<div class="article-card">
          <img src="${article.image}" alt="">
          <div class="article-content">
            <span class="theme-badge">${article.theme}</span>
            <h3>${article.titre}</h3>
            <p class="date">${article.date}</p>
          </div> `;

        containerArticles.insertAdjacentHTML("beforeend", card);
      };

      data.journal.articles.forEach(article => {
            creerCarte(article)
        });


      /// Pour une carte je peux créer plusieurs variables pour chaque object qui est dans le tableau "articles". Par exemple mettre "data.journal.articles", car les articles se trouvent dans l'objet "Journal" qui lui comporte d'autres objects.. Ensuite pour cibler 1 carte, j'utilise l'index ([0]) pour rechercher ma première carte en faisant "data.journal.articles[0]" et pour être plus précis je met un point et récupérer ce qui m'intéresse comme ici "let firstArticleTitle = data.journal.articles[0].titre;". Ça c'est la première technique ! 

      // let firstArticleTitle = data.journal.articles[0].titre;

      // let firstArticleDate = data.journal.articles[0].date;

      // let firstArticleTheme = data.journal.articles[0].theme;

      // let firstArticleImage = data.journal.articles[0].image;

      // let firstArticlePopularite = data.journal.articles[0].popularite;
      
      // Je peux également faire plus simple en créant une variable générale et cibler. Comme "let articles = data.journal.articles[0];" et faire un console.log par la suite.

      // let articles = data.journal.articles[0];
      // console.log(articles);
    
    
      // TODO 5: REMPLIR LES THEMES

        // `<section class="themes-section">
        //   <div class="container">
        //     <h2 class="section-title">Nos Thèmes</h2>
        //     <div id="themes-list" class="themes-list">
        //     </div>
        //   </div>
        // </section>`

        let containerThemes = document.querySelector("#themes-list");
 
        function creerCarteTheme(theme) {
          let themes = data.journal.themes[0];
        
          let cardThemes = `<div class="theme-card">
            <div class="themes-section">
              <h3 class="theme-badge">${theme.nom}</h3>
              <p class="themes-list">${theme.description}</p>
            </div> `;

          containerThemes.insertAdjacentHTML("beforeend", cardThemes);
        };

        data.journal.themes.forEach(theme => {
              creerCarteTheme(theme)
          });

      // TODO 6: REMPLIR LES AUTEURS

        // `<section class="authors-section">
        //   <div class="container">
        //     <h2 class="section-title">Nos Auteurs</h2>
        //     <div id="authors-list" class="authors-list">
        //     </div>
        //   </div>
        // </section>`

      // TODO 7: REMPLIR LE CALL TO ACTION

        // `<section class="cta-section">
        //   <div class="container">
        //     <div id="call-to-action">
        //     </div>
        //   </div>
        // </section>`

      /// FIN DU CODE

        // `<footer class="footer">
        //   <div class="container">
        //     <p>&copy; 2026 Webmag. Tous droits réservés.</p>
        //   </div>
        // </footer>`

      // BONUS 1 : Alert sur le bouton CTA

      // BONUS 2 : Filtrage par thème

      // BONUS 3 : Tri par popularité
    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

getData();
