// ================== VARIABLES GLOBALES ==================

// Nombre d'essais de départ (chaque mauvaise lettre va décrémenter ce nombre)
let essaisRestants = 8;

// Tableau qui contiendra toutes les lettres déjà proposées par le joueur
let lettresProposees = [];

// Le mot à deviner (pour l'instant fixe, mais on pourra le rendre aléatoire plus tard)
const motADeviner = "kimura";

// ================== RÉFÉRENCES DES ÉLÉMENTS HTML ==================

// Paragraphe qui affiche le nombre d'essais restants
const affichageEssais = document.getElementById("essais-restants");

// Zone où on affiche le mot avec les lettres trouvées et les underscores
const motAffiche = document.getElementById("mot-a-deviner");

// Bouton sur lequel le joueur clique pour valider sa lettre
const btnValider = document.getElementById("valider");

// Zone de message pour informer le joueur (valide, erreur, gagné, perdu, etc.)
const message = document.getElementById("message");

// Champ de saisie dans lequel le joueur tape une lettre
const inputLettre = document.getElementById("lettre");

// ================== FONCTIONS ==================

/**
 * Met à jour le texte qui affiche le nombre d'essais restants.
 */
function afficherEssais() {
  affichageEssais.textContent = "Essais restants : " + essaisRestants;
}

/**
 * Affiche le mot en cours de découverte :
 * - Lettres trouvées visibles
 * - Lettres non trouvées remplacées par "_"
 */
function afficherMot() {
  let motAAfficher = "";

  for (let lettreCourante of motADeviner) {
    // Si la lettre a déjà été proposée, on l'affiche
    if (lettresProposees.includes(lettreCourante)) {
      motAAfficher += lettreCourante + " ";
    } else {
      // Sinon, on met un underscore à la place
      motAAfficher += "_ ";
    }
  }

  // Supprime l'espace final et affichage dans le HTML
  motAffiche.textContent = motAAfficher.trim();
}

/**
 * Vérifie si toutes les lettres du mot ont été trouvées.
 * Retourne true si le joueur a trouvé le mot complet, false sinon.
 */
function motTrouve() {
  for (let lettre of motADeviner) {
    if (!lettresProposees.includes(lettre)) {
      return false;
    }
  }
  return true;
}

// ================== ÉVÉNEMENTS ==================

/**
 * Lorsqu'on clique sur le bouton "Valider" :
 * 1. On récupère la lettre tapée.
 * 2. On vérifie qu'elle est valide.
 * 3. On vérifie si elle a déjà été proposée.
 * 4. On met à jour la liste des lettres proposées.
 * 5. On décrémente les essais si la lettre est fausse.
 * 6. On met à jour l'affichage du mot et du compteur.
 * 7. On teste la victoire ou la défaite.
 */
btnValider.addEventListener("click", function () {
  // Récupération de la lettre saisie et mise en minuscule
  const lettre = inputLettre.value.toLowerCase();

  // Vérification que c'est bien une seule lettre valide (y compris lettres accentuées et tiret)
  if (!lettre.match(/^[a-zà-ÿ-]$/)) {
    message.textContent = "Merci de saisir une lettre valide";
  }
  // Vérification que cette lettre n'a pas déjà été jouée
  else if (lettresProposees.includes(lettre)) {
    message.textContent = "Lettre déjà proposée, essaie une autre !";
  } else {
    // On ajoute cette lettre dans la liste des lettres proposées
    lettresProposees.push(lettre);

    // Si la lettre n'est pas dans le mot, on perd un essai
    if (!motADeviner.includes(lettre)) {
      essaisRestants--;
      message.textContent = `Raté ! Il te reste ${essaisRestants} essais.`;
    } else {
      message.textContent = `Bravo ! La lettre "${lettre}" est dans le mot.`;
    }

    // Actualisation de l'affichage du mot et des essais
    afficherMot();
    afficherEssais();

    // Si plus d'essais → défaite
    if (essaisRestants === 0) {
      message.textContent = "Perdu ! Le mot était : " + motADeviner;
      btnValider.disabled = true;
      inputLettre.disabled = true;
    }
    // Si toutes les lettres trouvées → victoire
    else if (motTrouve()) {
      message.textContent = "Bravo ! Tu as gagné !";
      btnValider.disabled = true;
      inputLettre.disabled = true;
    }
  }

  // Réinitialise le champ de saisie et redonne le focus pour la prochaine lettre
  inputLettre.value = "";
  inputLettre.focus();
});

// ================== INITIALISATION ==================

// Afficher dès le départ le mot masqué et le nombre d'essais
afficherMot();
afficherEssais();
