// LES CHAPITRES :


// Attention ! certaine valeur retourne undefined car je n'ai pas utilisé de return dans certaine fonction. Il s'agit de mes premiers exercice de JS 

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
// Fonction multiplier, et attribuer une valeur par defaut dans le cas ou un seul argument est declaré 

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
// Fonction qui parcours un tableau, et nous dit, qui a la moyenne, et qui ne la pas

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
// Fonction compteur de mot dans une phrase, elle calcule le nombre de mot similaire, et nous liste une paire, clé valeur avec le mot en clé, et combien il y en a dans la phrase en valeur

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

// ##############################  06 ##########################################
 // Fonction qui va parcourir deux objets eleve ou + , et permet de savoir qui a les meilleurs note, en calculant la moyenne

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
// un objet global et créer, differente facon de recupéré une fonction et l'attribué a d'autre objet, du genre, calcule de moyenne, afin de ne pas réecrire le code 200 fois, je n'ai pas mis la methode du constructor sur cette exercice, car elle n'était pas mentionné dessus. 

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

// ##############################  08 ##########################################
// fonction demande a l'utilisateur un chiffre random entre 0-10, si bon 'bravo' si au dessus 'plus haut' si en dessous 'plus bas' avec que trois chances 

let aleatoire = function () {

    return Math.round(Math.random() * 10);

}

function hallo () {

    let spam = window.prompt('0 - 10')
    console.log(spam)

}
