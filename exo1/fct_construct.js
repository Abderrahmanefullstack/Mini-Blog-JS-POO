// Question 1
class Voiture {
    constructor(model, marque, annee, type, carburant) {
        this.model = model;
        this.marque = marque;
        this.annee = annee;
        this.type = type;
        this.carburant = carburant;
    }
}
// Question 2
var voitureList = [];
voitureList.push(new Voiture("Clio", "Renault", 2020, "Sedan", "Essence"));
voitureList.push(new Voiture("Megane", "Renault", 2021, "Sedan", "Diesel"));
voitureList.push(new Voiture("Clio", "Renault", 2022, "Sedan", "Essence"));
console.log(voitureList);
console.log("les voitures sont :");
voitureList.forEach(function (voiture) {
    console.log("model : " + voiture.model + ", marque : " + voiture.marque + ", annee : " + voiture.annee + ", type : " + voiture.type + ", carburant : " + voiture.carburant);
});
// Question 3
class Hyundai extends Voiture {
    constructor(model, marque, annee, type, carburant, serie, hybride) {
        super(model, marque, annee, type, carburant);
        this.serie = serie;
        this.hybride = hybride;
    }
    alarmer() {
        console.log("Alarme de la Hyundai " + this.model + " est activée !");
    }
}
class Ford extends Voiture {
    constructor(model, marque, annee, type, carburant, options) {
        super(model, marque, annee, type, carburant);
        this.options = options;
    }
}
// Exemple d'utilisation des deux class Hyundai et Ford
var Hyundaicar = new Hyundai("Sonata", "Hyundai", 2023, "Sedan", "Hybride", "OX255", true);
Hyundaicar.alarmer();
var Fordcar = new Ford("Mustang", "Ford", 2022, "Sedan", "Essence", ["ABS", "ESP"]);
console.log(Fordcar.model);

// Question 4
voitureList.sort((a, b) => a.annee - b.annee);
console.log("Les voitures triées par année croissante sont :");
voitureList.forEach(function (Voiture) {
    console.log("Modèle : " + Voiture.model + ", Année : " + Voiture.annee);
});