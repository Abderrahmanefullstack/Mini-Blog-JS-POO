// Question 1 et 2
let Etudiant = {
    nom: "Alami",
    prenom: "Reda",
    age: 20,
    cne: "P123456",
    etudier: (etablissement) => {
        return Etudiant.nom + " " + Etudiant.prenom + " " + Etudiant.age + " ans, CNE " + Etudiant.cne + " etudie dans " + etablissement
    }
}

let Professeur = {
    nom: "Daoui",
    age: 50,
    cin: "K123456",
    enseigner: (matiere) => {
        return Professeur.nom + " " + "enseigne " + matiere;
    }
}
console.log(Professeur.enseigner("Anglais"));
console.log(Etudiant.etudier("AUI"));
// Question 3

let mylist = [{
    nom: "Daoui",
    age: 50,
    cin: "K123456",
    enseigner: (matiere) => {
        return Professeur.nom + " " + "enseigne " + matiere;
    }
},
{
    nom: "Tahiry",
    age: 40,
    cin: "K94856",
    enseigner: (matiere) => {
        return Professeur.nom + " " + "enseigne " + matiere;
    }
},
{
    nom: "Bakkali",
    age: 60,
    cin: "K197515",
    enseigner: (matiere) => {
        return Professeur.nom + " " + "enseigne " + matiere;
    }
}
];
mylist.sort((a, b) => a.nom.localeCompare(b.nom));
console.log("Apres le Tri en fct de l'ordre alphabétique on obtient :");
mylist.forEach(function (professeur) {
    console.log("Nom : " + professeur.nom + ", Âge : " + professeur.age + ", CIN : " + professeur.cin);
});