// ******************************************************

// ##############################  12 ##########################################
// Fonction timing, execute l'action un nombre de fois defini, et avec un interval defini

function POP2() {

    let i = 0;
    let id = window.setInterval(function() {

        i++;
        console.log( i + ' Je m\'affiche qu\'au bout de 1 seconde 10 fois :) ');
        if (i === 10) {

            // Permet d'arreter l'interval lorsque i et egale a 10, a chaque affichage i et incrémenté avec i++ soit equivalent a i = i + 1 et l'arrete avec la condition if fixé a 10, si je met 119393 sa serrai 119393 fois executé
            return window.clearInterval(id)

        }

    }, 1000);

    return id;

};

console.log(POP2());


// ******************************************************
