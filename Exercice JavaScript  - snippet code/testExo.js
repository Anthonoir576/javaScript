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

// Exemple d'utilisation d'ajout de class
// Pour rendre le truc plus naturelle faut jouer avec les transitions css, mais ca c'est a vous de voir, vous avez la base, recupérer un element, et comment ca fonctionne
window.setInterval(function() {

    change.classList.toggle('P--modifierJS')

}, 1000);


// Tu peux modifier aussi les styles du css directement
change.style.fontSize = "50px";
change.style.fontSize = "19.5px";

// Tu peux modifier le contenu HTML directement genre modifier le texte dun paragraphe

// innerHtml prendra en compte la modification de balise, comme ci vous aviez mis des balises strong contrairement a innerText qui va prendre vos balises comme un texte simple.
// Pour resumé innerHtml modifie meme des balises
// Et innerText uniquement du texte                            ou textContent 
change.innerHTML = '<h1><strong>SALUT</strong></h1> LES GUYS'
change.innerText = '<h1><strong>SALUT</strong></h1> LES GUYS'



// ****************************************************** 
