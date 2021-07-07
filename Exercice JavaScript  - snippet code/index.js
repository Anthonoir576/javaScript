// LES CHAPITRES :


// Attention ! certaine valeur retourne undefined car je n'ai pas utilisé de return dans certaine fonction. Il s'agit de mes premiers exercice de JS
// Elles servent uniquement de base, ou d'aide mémoire concernant la structure globale !

// ##############################  01  ##########################################
// Variable déclaré globalement 

let nombre = 31;
let moy = 10;

let eleve1 = {

    nom: "chirac",
    note: [5, 5, 20]

}

let eleve2 = {

    nom: "francoisHollande",
    note: [20, 5, 18]

}

let phrase = "Cette page a été traduite la la à partir de l'anglais par la communauté. Vous pouvez également contribuer en rejoignant la communauté francophone sur MDN Web Docs.";

// ********************************************

// ##############################  02  ##########################################
// Fonction calcule d'un nombre premier 

function nombrePrem(valeur) {

    for (let i = 2; i < valeur; i++) {

        if (valeur % i === 0) {

            return false

        }

    }
    return true
}

console.log(nombrePrem(30))

// **********************************************

// ##############################  03  ##########################################
// Fonction qui multiplie, et attribue une valeur par defaut dans le cas ou un seul argument est declaré 

function multi(a, b) {

    if (b === undefined || a === undefined) {

        b = 0;
        a = 0;

    }

    return a * b;
}

console.log(multi(14))

// ********************************************* 

// ##############################  04  ##########################################
// Fonction qui parcours un tableau, et nous dit, qui a la moyenne, et qui ne l'as pas

let Eleves = [{

    nom: 'paul',
    moyenne: 15

}, {

    nom: 'richard',
    moyenne: 9

}, {

    nom: 'pauline',
    moyenne: 10

}, {

    nom: 'michou',
    moyenne: 7

}, {

    nom: 'polaro',
    moyenne: 20

}, {

    nom: 'richrol',
    moyenne: 11

}];

function moyenneMini() {

    for (let i = 0; i < Eleves.length; i++) {

        let eleve = Eleves[i];

        if (eleve.moyenne >= moy) {

            console.log(eleve.nom + ' Tu as la moyenne');

        } else {

            console.log(eleve.nom + ' Tu n\'as pas la moyenne mec');

        };
    };    
};

console.log(moyenneMini())

//  ********************************************

// ##############################  05  ##########################################
// Fonction compteur de mot dans une phrase, elle calcule le nombre de mot similaire, et nous liste une paire, clé valeur avec le mot en clé, et combien il y en a dans la phrase en tant que valeur

function frequence(phrase) {

    let mots = phrase.toLowerCase().split(" ");
    let compteur = {};

    for (let i = 0; i < mots.length; i++) {

        let mot = mots[i];
    
        if (compteur[mot] === undefined) {
    
            compteur[mot] = 1;
    
        } else {
    
            compteur[mot]++
    
        }
    }

    return compteur
    
}

console.log(frequence("ddd df sd d"))

// **********************************************

// ##############################  06  ##########################################
 // Fonction qui va parcourir deux objets eleve ou + , et permet de savoir qui a les meilleurs notes, en calculant la moyenne

function must(eleve1, eleve2) {

    if (moyenne(eleve1) < moyenne(eleve2) ) {

        console.log(eleve2.nom + ' est le meilleurs !')

    } else {

        console.log(eleve1.nom + " est le meilleurs !")

    }

}

function moyenne(notes) {

    let somme = 0;

    for (let i =0; i <notes.note.length; i++) {

        somme = somme + notes.note[i];

    }
    
    return somme / notes.note.length

}

console.log(must(eleve1, eleve2))


/*********************************************** */

// ##############################  07  ##########################################
// un objet global et créer, differente facon de recupéré une fonction et l'attribué a d'autre objet, du genre, calcule de moyenne, afin de ne pas réecrire le code 200 fois, je n'ai pas mis la methode du constructor sur cette exercice, car elle n'était pas mentionné dans l'exercice. 

let eleve = {

    moyenne: function () {

        let somme = 0;
    
        for (let i =0; i <this.notes.length; i++) {
    
            somme = somme + this.notes[i];
    
        }
        
        return somme / this.notes.length
    
    }

}

let Anthonoir = Object.create(eleve);

Anthonoir.notes = [10, 10, 10];
Anthonoir.nom = "Anthonoir";


let pierre = {

    nom: "pierre",
    notes: [10, 20, 20]

}

// privilégier le constructor . 

// ******************************************************

// ##############################  08  ##########################################
// fonction demande à l'utilisateur un chiffre random entre 0-10, si bon 'bravo' si au dessus 'plus haut' si en dessous 'plus bas' avec que trois chances 
// cette fonction utilise la boucle while, mais vous pouvez la faire avec une boucle FOR par exemple. En algo vous avez plusieurs methodes possible de résoudre des problèmes


function devineLeNombre() {

    let aleatoireChiffre = Math.round(Math.random() * 10);
    let alerteWindows = window.prompt("Entrer un chiffre entre 0 - 10");
    // Supprimé cette variable chance, et dans le code, pour enlever ou rajouté un nombre de chance
    let chance = 3; 

    // Le chiffre entrer par l'utilisateur et convertis grace a prompt, mais en chaine de caractère, pour la comparé on utilise la fonction parseInt pour la convertir en chiffre 
    alerteWindows = parseInt(alerteWindows, 10);

    // boucle TANT QUE 
    while (alerteWindows != aleatoireChiffre && chance > 0) {

        chance--
    
        if (alerteWindows > aleatoireChiffre) {

            alert(' Le chiffre doit être plus petit !');
        

        } else {

            alert( 'Le chiffre doit être plus grand !');
        

        }
        
        if (chance > 0) {

            alerteWindows = window.prompt('Retentez votre change :( ?');

        }
        
    }

    if (alerteWindows == aleatoireChiffre) {

        return alert('bravo');

    } else {

        alert("ECHEC L'AMI ...")

    }

}


console.log(devineLeNombre())



// ******************************************************

// ##############################  09  ##########################################
// Fonction qui execute une fonction dans un interval voulu type timer

function timingInterval() {

    let demo = function() {

        console.log('coucou le monde')

    }

    // fonction de lobj window qui execute une autre fonction, toute les 1 secondes, elle prend en argument la fonction a executer, et la durée.
    return window.setInterval(demo, 1000)

}

console.log(timingInterval());

// On peu l'écrire de cette manière, en mettant directement la fonction dans le premiere argument !! Appelez aussi callback 
function timingInterval2() {


    return window.setInterval(function() {

        console.log('coucou le monde')

    }, 1000)

}

console.log(timingInterval2());


// ******************************************************

// ##############################  10  ##########################################
// Fonction compteur par interval 1,2,3 etc toute les secondes

function numberInter() {

    let i = 0;

    return window.setInterval(function() {

        i++
        console.log( 'Le numéros et ' + i)

    }, 1000)

};

console.log(numberInter())


// ******************************************************

// ##############################  11  ##########################################
// Fonction timing, execute l'action qu'une seule fois, au moment choisi 
// affiche la commande, fenetre, ou alert qu'au moment voulu et prédéfini par vous meme, en l'occurence ici 5 secondes, prédéfini en 5000ms

function POP() {

    return window.setTimeout(function() {

        alert('Je m\'affiche qu\'au bout de 5 secondes :) ')

    }, 5000)

};

console.log(POP());


// ******************************************************

// ##############################  12  ##########################################
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

// Attention, la fonction window.setInterval possede un id, identifiant, en utilisant la variable, cela vous permez de recupéré l'id, et de le stoppé avec le CLEAR. 

// ******************************************************

// ##############################  13  ##########################################
// Comment ecrire une fonction qui s'appelle elle même. Très important de connaitre la syntaxe !


let a = "Antho te dit ";


(function () {
    
    console.log(a + ' coucou')

})()


// ******************************************************

// ##############################  14  ##########################################
// LE DOM  !  
// Les differentes facon de recuperé des elements HTML, ou directement via le selecteur css, si grace a JS vous voulez modifié un element, genre modifier la couleur p, lorsque tu scrolls, ou faire apparaitre ou disparaitre des elements au scroll, il faut pouvoir les ' pointés ' ou les recupérés celon votre facon de voir les choses, grace cest differentes methode.

// Pour plus d'info voir la doc qui est bien foutu sur ces valeurs, ca serra important pour la suite. Si vous savez pas ciblé un élément, vous pourrez rien faire en JS coté développement web.

// recupérer un ID
document.getElementById('demonstration1')

// récupérer une class
document.getElementsByClassName('P')

// récuperer les balises, ou une si il y en a qu'une 
document.getElementsByTagName('div')
document.querySelectorAll('p')

// récupérer un selecteur css
document.querySelector('.P') 
document.querySelector('#demonstration1')
document.querySelector('#demonstration1 p') // recupère que la balise p a l'intérieur de demonstration1

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

// Pour rendre tous les paragraphes clignotant . une fonction qui sappelle elle meme est necessaire, du au faite, qu'il y aurait des problèmes de variables globale / Locale
// on choppe tous les P ! le faite de prendre tous les P, les stock dans un tableau, d'ou la boucle FOR, qui permet de le parcourir!

let paragraphes = document.querySelectorAll('p');

for (let i = 0; i < paragraphes.length; i++) {

    let p = paragraphes[i];

    (function(valeurRemplacerParLeParagraphe) {

        window.setInterval(function() {

            valeurRemplacerParLeParagraphe.classList.toggle('P--modifierJS');
            
        }, 1000)

    })(p)

};


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


