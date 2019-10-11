/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

console.log("Début du programme\nBienvenue dans le gestionnaire de contacts !\nChoisissez une option:\n1: Lister les contacts\n2: Ajouter un contact\n3: Quitter");


let contacts = [{ prenom: 'Carole', nom: 'Lévisse' }, { prenom: 'Mélodie', nom: 'Nelsonne' }];
let lastContact = contacts[contacts.length - 1];


function choixOptions() {

  while (true) {

    let options = prompt("Choisissez une option:\n1: Lister les contacts\n2: Ajouter un contact\n0: Quitter ");
    console.log('Option choisie :', options);

    if (options == 0) {
      console.log("Fin du programme !");
      window.close();
      return null;
    }

    // Si utilisateur entre un mauvais choix qui n'est pas parmis les options
    if (options != 1 && options != 2 && options != 0) {
      console.log('Recommencer ! Il faut choisir parmis ces options:\n1: Lister les contacts\n2: Ajouter un contact\n0: Quitter ');
    }
    // si utilisateur choisi de voir la liste des contacts
    if (options == 1) {
      console.log('1- liste de contacts :\n', contacts);
    }

    // si utilisateur prefere ajouter un contact
    if (options == 2) {
      const prenom = prompt("Entrer un prenom ");
      const nom = prompt("Entrer un nom ");
      // pusher valeurs dans le tableau 
      contacts.push({ prenom, nom });
let i=null;
      console.log(`Le nombre de contacts est de : ${contacts.length}`);
      console.log('Dernier contact ajouté :', contacts[contacts.length - 1]);
      // console.log(Object.values(contacts));
      console.log('liste de contacts mis à jour :');
      for (let i = 0; i < contacts.length; i++) {

        console.log(`${[i + 1]}- ${contacts[i].prenom} ${contacts[i].nom}`);
      }

    }

  }
  // fin de la de la boucle WHILE

}
// fin de la fonction choixOptions();

choixOptions();







