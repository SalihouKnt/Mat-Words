let lettresProposees = [];
const motADeviner = "kimura";

function afficherMot() {
  let motAAfficher = "";

  for (let lettreCourrante of motADeviner) {
    // si la lettre a été proposé, on l'affiche
    if (lettresProposees.includes(lettreCourrante)) {
      motAAfficher += lettreCourante + " "; // On ajoute la lettre + un espace
    } else {
      motAAfficher += "_ "; // sinon on ajoute un underscore + un espace
    }
  }
  // On enlèce l'espace en trop et on met à jour la div qui affiche le mot
  motAffiche.textContent = motAAfficher.trim();
}

const motAffiche = document.getElementById("mot-a-deviner");

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
  const lettre = inputLettre.value.toLowerCase();
  // Ici, on récupère la lettre tapée par l’utilisateur dans le champ inputLettre.
  // .value donne le contenu texte écrit dans l’input.
  // .toLowerCase() transforme cette lettre en minuscule pour éviter les différences entre majuscules et minuscules
  // (par exemple « A » et « a » seront identiques pour comparer).

  if (!lettre.match(/^[a-zà-ÿ-]$/)) {
    // Si la lettre n’est pas correcte, on affiche ce message d’erreur au joueur, dans la zone prévue.
    message.textContent = "Merci de sasisir une lettre valide";
  } else {
    // Sinon (ie. la lettre est correcte), on affiche un message de confirmation avec la lettre prise en compte.
    message.textContent = `Lettre prise en compte : "${lettre}"`;
  }
  inputLettre.value = ""; // On vide le champ texte (inputLettre) pour que l’utilisateur puisse saisir directement une nouvelle lettre.
  inputLettre.focus(); // On remet le focus dans le champ texte, c’est-à-dire que le curseur clignotant
  // revient automatiquement dans la case de saisie, prêt à recevoir une nouvelle lettre.
  // C’est plus confortable pour jouer rapidement.
});
