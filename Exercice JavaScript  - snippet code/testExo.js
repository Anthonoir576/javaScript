// ##############################  15  ##########################################
// recuperer un element / ou les enfants

let ul = document.querySelector('#UL');

ul.children // uniquement les enfants LI
ul.childNodes // Liste LI + noeud list, espace, etc . voir la doc
ul.childElementCount // compte le nombre denfant comme un .length
ul.getElementsByTagName('li') // recupere tous les li
ul.firstElementChild // premier li
ul.lastElementChild // derniere li
ul.querySelector('li:nth-child(3)') // recupere le troisieme li

let ulProfond = ul.querySelector('li:nth-child(3)');
ulProfond.previousElementSibling; // nous donnera lelement precedent
ulProfond.previousElementSibling.previousElementSibling // DONNERA LELEMENT precedent du precedent XD 

// ****************************************************** 

