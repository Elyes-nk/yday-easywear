function getSaison() {
  const now = new Date();
  const mois = now.getMonth();
  let saison;

  switch (mois) {
    case 11:
    case 0:
    case 1:
      saison = "hiver";
      break;
    case 2:
    case 3:
    case 4:
      saison = "printemps";
      break;
    case 5:
    case 6:
    case 7:
      saison = "été";
      break;
    case 8:
    case 9:
    case 10:
      saison = "automne";
      break;
    default:
      saison = "saison indéterminée";
  }

  return saison;
}

module.exports = {
  getSaison,
};
