// ##############################  22  ##########################################
// Les évènements -

//recupere une lettre tappé 
let input = document.querySelector('#input1');

input.addEventListener('keyup', function(e) {

    console.log(e.key)

});


// si le nombre de caractere nest pas egale a 5, renvoie une erreur
let listen = document.querySelector("#form");

listen.addEventListener("submit", function(e) {

    let content = document.querySelector("#cp");

    if(content.value.length != 5) {

        alert("le code postal n'est pas bon ");
        e.preventDefault();

    }

})


// ****************************************************** 