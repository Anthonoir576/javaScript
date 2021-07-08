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

// ****************************************************** 