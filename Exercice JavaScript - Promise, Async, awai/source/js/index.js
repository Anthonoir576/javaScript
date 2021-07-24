// REQUET #########################################################

// let get = (url, succes, error) => {

//     let xhr = new window.XMLHttpRequest()

//     xhr.onreadystatechange = () => {

//         if (xhr.readyState === 4) {

//             if (xhr.status === 200) {

//                 succes(xhr.responseText);

//             } else {

//                 error(xhr)

//             }

//         };

//     };

//     xhr.open('GET', url, true);
//     xhr.send();

// };

// let getPosts = (succes, error) => {

//     get('https://jsonplaceholder.typicode.com/users', (reponse) => {

//         let users = JSON.parse(reponse);

//         get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id, (reponse) =>{

//             let posts = JSON.parse(reponse)
//             succes(posts)

//         }, (e) => {

//             error('erreur AJAX', e);

//         })

//     }, (e) => {

//         error(e);

//     });

// };

// getPosts( (posts) => {

//     console.log('first ', posts[0]);

// }, (error) => {

//     console.error(error)

// })




// PROMISE ##########################################################

let get = (url) => {

    return new Promise( (resolve, reject) => {

        let xhr = new window.XMLHttpRequest()

        xhr.onreadystatechange = () => {

            if (xhr.readyState === 4) {

                if (xhr.status === 200) {

                    resolve(xhr.responseText);

                } else {

                    reject(xhr)

                }

            };

        };

        xhr.open('GET', url, true);
        xhr.send();


    });

};

get('https://jsonplaceholder.typicode.com/users').then( (reponse) => {

    console.log(reponse);

}).catch( (error) => {

    console.log(error);

});