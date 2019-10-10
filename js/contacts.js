/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

console.log("Début du programme\nBienvenue dans le gestionnaire de contacts !\nChoisissez une option:\n1: Lister les contacts\n2: Ajouter un contact\n3: Quitter");


let eleves = [{ prenom: 'lola', nom: 'toto' }, { prenom: 'momo', nom: 'fifi' }, { prenom: 'oko', nom: 'gogo' }];
const options = prompt("Choisissez une option:\n1: Lister les contacts\n2: Ajouter un contact\n0: Quitter ");
let lastContact = eleves[eleves.length - 1];




function choixOptions() {
console.log('Option choisie :', options);


    if (options == !1 || !2 || !0) {
        console.log('Recommencer ! Il faut choisir parmis ces options:\n1: Lister les contacts\n2: Ajouter un contact\n0: Quitter ');

    }

    if (options == 1) {

        console.log('1- liste de contacts :\n', eleves);
    }



    if (options == 2) {
        const prenom = prompt("Entrer un prenom ");
        const nom = prompt("Entrer un nom ");
        // pusher valeurs dans le tableau eleve
        eleves.push({ prenom, nom });

        console.log(`Le nombre de contacts est de : ${eleves.length}`);
        console.log('Dernier contact ajouté :', eleves[eleves.length - 1]);
        console.log(Object.values(eleves));


    }
    //    proposer à l'utilisateur de pouvoir continuer pour ajouter un contact ou quitter  ????????
    
    
}
// fin du programme
                if (options == 0) {
                    
                    // console.log("Fin du programme !");
                    window.close();
                }
choixOptions();






