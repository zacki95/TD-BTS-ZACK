function construirePyramide() {
    // Récupération du nombre d'étages saisi par l'utilisateur
    let nombre = parseInt(document.getElementById("ligne-pyramide").value);
    let pyramideElement = document.getElementById("pyramide");

    // Vérification de l'entrée
    if (isNaN(nombre) || nombre <= 0) {
        pyramideElement.textContent = "Veuillez entrer un nombre valide.";
        return;
    }

    // Construction de la pyramide
    let pyramide = "";
    for (let i = 1; i <= nombre; i++) {
        let espaces = " ".repeat(nombre).slice(0, nombre - i); // Utilisation de slice()
        let etoiles = "*".repeat(2 * i - 1);
        pyramide += espaces + etoiles + "\n";
    }

    // Affichage dans la page HTML
    pyramideElement.textContent = pyramide;
}
