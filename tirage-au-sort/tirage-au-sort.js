// Liste des éléments pour le tirage au sort
let mangas = ["Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK", "Spy x Family", "Sakamoto Days", "JJBA", "HnK", "Boruto"];

function tirage() {
    // Générer un index aléatoire entre 0 et la longueur du tableau - 1
    let index = Math.floor(Math.random() * mangas.length);

    // Sélection de l'élément aléatoire
    let mangaSelectionne = mangas[index];

    // Affichage du résultat dans la page HTML
    document.getElementById("affichage").textContent = `Manga sélectionné : ${mangaSelectionne}`;
}
