// On repère le bouton avec l’id "valider" dans la page HTML, pour pouvoir lui associer une action plus tard
const btnValider = document.getElementById("valider");

// On repère également l’élément où l'on veut afficher un message (ici le paragraphe avec l'id "message")
const message = document.getElementById("message");

// On récupère la zone de saisie texte où l’utilisateur tape sa lettre (id="lettre").
// Cela permet de lire ce que l’utilisateur a écrit (inputLettre.value) et de manipuler ce champ (vider, remettre le focus…).
const inputLettre = document.getElementById("lettre");

// On ajoute un "écouteur" d’événement sur le bouton : dès que l’utilisateur clique dessus,
// la fonction demandée sera exécutée
btnValider.addEventListener("click", function () {
  // Ici, on change le contenu texte de l’élément "message" pour afficher un texte fixe
  const lettre = inputLettre.ariaValueMax.toLowerCase();
  // Ici, on récupère la lettre tapée par l’utilisateur dans le champ inputLettre.
  // .value donne le contenu texte écrit dans l’input.
  // .toLowerCase() transforme cette lettre en minuscule pour éviter les différences entre majuscules et minuscules
  // (par exemple « A » et « a » seront identiques pour comparer).

  if (!lettre.match)
});
