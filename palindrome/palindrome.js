"use strict"

// Cette fonction prend un mot en entrée, l'inverse et vérifie s'il est identique à l'original
function palindrome() {
    let mot = document.getElementById("id-mot-saisi").value.toLowerCase(); // Récupérer le mot saisi et le mettre en minuscules
    // Inverser le mot
    let inverse = mot.split('').reverse().join('');
    // Comparer et afficher le résultat
    document.getElementById("resultat").textContent = (mot === inverse) ? "C'est un palindrome" : "Ce n'est pas un palindrome";

}

