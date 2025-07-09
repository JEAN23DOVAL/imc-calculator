// ========== 1. Attente que le DOM soit prêt ==========
document.addEventListener('DOMContentLoaded', () => {
  // Sélection des éléments HTML
  const form = document.getElementById('icmForm');
  const poidsInput = document.getElementById('poids');
  const tailleInput = document.getElementById('taille');
  const resultatIMC = document.getElementById('resultat-imc');
  const interpretationIMC = document.getElementById('interpretation-imc');

  // ========== 2. Ajout de l'écouteur d'événement ==========
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération et conversion des valeurs
    const poids = parseFloat(poidsInput.value);
    const taille = parseFloat(tailleInput.value);

    // ========== 3. Vérification des données ==========
    if (isNaN(poids) || isNaN(taille) || poids <= 0 || taille <= 0) {
      resultatIMC.textContent = "Veuillez entrer des valeurs valides.";
      interpretationIMC.textContent = "";
      return;
    }

    // ========== 4. Calcul de l’IMC ==========
    const imc = poids / (taille * taille);
    const imcArrondi = imc.toFixed(2); // On arrondit à 2 décimales
    resultatIMC.textContent = `Votre IMC est : ${imcArrondi}`;

    // ========== 5. Interprétation du résultat ==========
    let message = "";

    if (imc < 18.5) {
      message = "Vous êtes maigre. Pensez à mieux vous alimenter.";
    } else if (imc >= 18.5 && imc < 25) {
      message = "Félicitations, vous avez un poids normal.";
    } else if (imc >= 25 && imc < 30) {
      message = "Vous êtes en surpoids.";
    } else {
      message = "Vous êtes en obésité.";
    }

    interpretationIMC.textContent = message;

    // ========== 6. Débogage (console) ==========
    console.log("Poids:", poids);
    console.log("Taille:", taille);
    console.log("IMC calculé:", imcArrondi);
    console.log("Interprétation:", message);
  });
});