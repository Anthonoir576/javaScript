// ******************************************************

// ##############################  15  ##########################################
// Rajouté une class a un élément html.
// Souvent vous avez deja créer ce selecteur sur votre fichier css, et lorsque vous créez cette class en JS, le css ferra le changement.

// Dans cette exemple j'ai créer une class P--modifierJS en css, qui change le text en bleu, si vous faites une fonction time interval par exemple vous pouvez faire des effets clignotant ou autre, il y a des possibilités ilimité. Le fichier style.css vous montrera comment j'ai procédé, suffit de voir sur l'inspecteur du navigateur, que la class a bien été rajouté après rafraichissement.
document.querySelector('#demonstration1 p').className = "P P--modifierJS"


// ****************************************************** 
