// ##############################  18  ##########################################
//  Les évènements 

// Selectionne mon premier paragraphe 
let first = document.querySelector("#demonstration1 p");

first.addEventListener('click', function () {

    // TOGGLE or ADD ? j'aurais pus mettre add au lieu de toggle, mais toggle permet au premier click de mettre la class et au second de l'enlever, la class add met la class, mais ne l'enleve pas au second click
    first.classList.toggle('P--modifierJS')

});

// Selectionne tous mes P 
let Paragraph = document.querySelectorAll('p');

for (let i = 0; i < Paragraph.length; i++) {

    let paragraphS = Paragraph[i];

    (function(value) {

        value.addEventListener('click', function() {

            value.classList.toggle('P--modifierJS');

        });

    })(paragraphS);

};

// on utilise this, a la place de la fonction qui s'appelle elle meme elle permet de recuperer en gros l'index du p au moment du click, cette objet window de base, facilite lecriture du code dans ce contexte la. Personne ne force sont utilisation, au debut, je conseil de leviter surtout si vous avez du mal, apprenez a ecrire d'une facon dont vous vous comprenez, puis peaufiné avec l'experience. 
for (let i = 0; i < Paragraph.length; i++) {

    let paragraphS = Paragraph[i];
    let orange = function() {

        this.classList.toggle('P--modifierJS');
       
    };

    paragraphS.addEventListener('click', orange);

};



// ****************************************************** 