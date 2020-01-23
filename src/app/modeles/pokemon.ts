export class Pokemon {
  id: number;
  nom: string;
  taille: string;
  poids: string;
  image: string;
  types: Array<string>;

  constructor(id: number, nom: string, taille: string, poids: string, image: string, types: Array<string>) {
    this.id = id;
    this.nom = nom;
    this.taille = taille;
    this.poids = poids;
    this.image = image;
    this.types = types;
  }
}
