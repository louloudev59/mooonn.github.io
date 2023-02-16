// Date du premier live
const dateDebut = new Date('2020-05-01T00:00:00Z');

// Fonction qui calcule le nombre d'années et de jours depuis la date de début
function calculeCompteur() {
  const dateActuelle = new Date();
  const annees = dateActuelle.getUTCFullYear() - dateDebut.getUTCFullYear();
  const jours = Math.floor((dateActuelle - dateDebut) / (1000 * 60 * 60 * 24));
  document.getElementById('compteur-annees').textContent = `${annees} an${annees > 1 ? 's' : ''}`;
  document.getElementById('compteur-jours').textContent = `${jours % 365} jour${jours % 365 > 1 ? 's' : ''}`;
}

// Appelle la fonction une première fois pour afficher le compteur initial
calculeCompteur();

// Appelle la fonction toutes les secondes pour mettre à jour le compteur
setInterval(calculeCompteur, 1000);
