// ##############################  19  ##########################################
// Les évènements 


// créer un effet au survole, comme un hover, et l'enleve une fois que la souris n'est plus dessus.
let pS = document.querySelectorAll('p');

for (let i = 0; i < pS.length; i++) {

    let p = pS[i];

    p.addEventListener('mouseover', function() {

        this.classList.add('P--modifierJS');

    });

    p.addEventListener('mouseout', function() {

        this.classList.remove('P--modifierJS');

    });

};


// demande de confirmation au click sur lien 
let linkS = document.querySelectorAll('a.div--link');

for (let i = 0; i < linkS.length; i++) {

    let lien = linkS[i];

    // le (e) ou (event) comme vous voulez fait reference a levenement qui a ete declanché au click, ou toute autre parametre a la place du click . preventDefault permet d'annuler lelement, si lutilisateur met annuler. Ca evite qu'il ce retrouve sur le lien, alors qu'il en a finalement pas envie xD
    lien.addEventListener('click', function(event) {

        let valeurDeWindowReponseUtilisateur = window.confirm('Voulez-vous réellement suivre ce liens frauduleux ? XD');
        
        let reponse = valeurDeWindowReponseUtilisateur;
        
        if (reponse === false) {

            event.preventDefault();

        }
        

    });
  
};



// ****************************************************** 