class Vecteur2D {
    x = 0;
    y = 0;
    constructor(x = NaN, y = NaN) {
        if (x === NaN || y === NaN) {
            return;
        }

        this.x = x;
        this.y = y;
    }
    afficher() {

        return "(" + this.x + ", " + this.y + ")";
    }

    static additionner(vecteur1, vecteur2) {
        return new Vecteur2D(vecteur1.x + vecteur2.x, vecteur1.y + vecteur2.y);
    }
}
var vecteurSansParametre = new Vecteur2D();
console.log("Vecteur sans paramètre : ");
vecteurSansParametre.afficher();
var vecteurAvecParametre = new Vecteur2D(3, 4);
console.log("Vecteur avec paramètres : ");
vecteurAvecParametre.afficher();
console.log("-----------------------------------------");
var vecteur1 = new Vecteur2D(1, 2);
vecteur1.afficher();
console.log("le premier vecteur est " + vecteur1.afficher());
var vecteur2 = new Vecteur2D(6, 4);
var resultatadittion = Vecteur2D.additionner(vecteur1, vecteur2);
console.log("le deuxieme vecteur est " + vecteur2.afficher());
console.log("Apres l'addition des deux vecteurs on a :");
console.log(resultatadittion.afficher());
console.log("-----------------------------------------");
class Rectangle {
    constructor(longueur = 0, largeur = 0) {
        this.longueur = longueur;
        this.largeur = largeur;
        this.nom = "rectangle";
    }

    afficher() {
        console.log("Nom : " + this.nom + ", Longueur : " + this.longueur + ", Largeur : " + this.largeur);
    }

    surface() {
        return this.longueur * this.largeur;
    }
}
class Carre extends Rectangle {
    constructor(cote = 0) {
        super(cote, cote);
        this.nom = "carré";
    }
}
class Point {
    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }
}
const rectangle = new Rectangle(4, 6);
const carre = new Carre(5);

console.log("Rectangle :");
rectangle.afficher();
console.log("Surface du rectangle :", rectangle.surface());

console.log("\nCarré :");
carre.afficher();
console.log("Surface du carré :", carre.surface());
console.log("-----------------------------------------");
class Segment {
    constructor(x1, y1, x2, y2) {
        this.orig = new Point(x1, y1);
        this.extrem = new Point(x2, y2);
    }
}

// Programme principal
const segment = new Segment(1, 2, 4, 6);

console.log("Origine du segment : x =", segment.orig.x, ", y =", segment.orig.y);
console.log("Extrémité du segment : x =", segment.extrem.x, ", y =", segment.extrem.y);