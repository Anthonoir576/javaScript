// ******************************************************

// ##############################  15  ##########################################
// Rajouté une class a un élément html.
// Souvent vous avez deja créer ce selecteur sur votre fichier css, et lorsque vous créez cette class en JS, le css ferra le changement.

// Dans cette exemple j'ai créer une class P--modifierJS en css, qui change le text en bleu, si vous faites une fonction time interval par exemple vous pouvez faire des effets clignotant ou autre, il y a des possibilités ilimité. Le fichier style.css vous montrera comment j'ai procédé, suffit de voir sur l'inspecteur du navigateur, que la class a bien été rajouté après rafraichissement.
document.querySelector('#demonstration1 p').className = "P P--modifierJS"

// Pour procédé plus simplement, on va stocker mon document.ETC.. sur une variable pour raccourcir l'ecriture, la flemme tu connais .
let change = document.querySelector('#demonstration1 p');

// sur le queryselector, certain fonction peuvent être utilisé du genre .classList
// j'ai supprimé la class modifier, donc le text redeviens rouge !
change.classList.remove('P--modifierJS')

//Pour add ( OUI je sais pas ce que je veux !)
change.classList.add("P--modifierJS")

// Permet de savoir si la class exist dans mon elements en indiquant TRUE or FALSE. A quoi ca peut servir ? a mettre une condition, SIIII la class existe, ALORS faire tel ou tel action. enchainer sur dautre modification etc . 
change.classList.contains('P--modifierJS')

// ****************************************************** 
