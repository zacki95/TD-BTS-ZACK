// Sélection des éléments HTML
let citation = document.getElementById("citation").textContent;
let motPlusLongElement = document.getElementById("motPlusLong");

// Remplacement des caractères spéciaux par un espace vide
let phraseSansPonctuation = citation.replace(/[^\w\s]/g, "");

// Séparation de la phrase en mots
let mots = phraseSansPonctuation.split(" ");

// Recherche du mot le plus long
let motPlusLong = "";
for (let mot of mots) {
    if (mot.length > motPlusLong.length) {
        motPlusLong = mot;
    }
}

// Affichage du mot le plus long dans la page HTML
motPlusLongElement.textContent = `Mot le plus long : ${motPlusLong}`;
