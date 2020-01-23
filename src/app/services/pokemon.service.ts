import { Injectable } from '@angular/core';
import {Pokemon} from '../modeles/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  private pokemon = [
    { id : 1, nom : 'Bulbizarre', types : ['Poison', 'Plante'], taille : '0,7', poids : '6,9', image : this.img + '1.png' },
    { id : 2, nom : 'Herbizarre', types : ['Poison', 'Plante'], taille : '1', poids : '13', image : this.img + '2.png' },
    { id : 3, nom : 'Florizarre', types : ['Poison', 'Plante'], taille : '0,7', poids : '6,9', image : this.img + '3.png' },
    { id : 4, nom : 'Salamèche', types : ['Feu'], taille : '0,6', poids : '8,5', image : this.img + '4.png' },
    { id : 5, nom : 'Reptincel', types : ['Feu'], taille : '1,1', poids : '19', image : this.img + '5.png' },
    { id : 6, nom : 'Dracaufeu', types : ['Feu', 'Vol'], taille : '1,7', poids : '90,5', image : this.img + '6.png' },
    { id : 7, nom : 'Carapuce', types : ['Eau'], taille : '0,5', poids : '9', image : this.img + '7.png' },
    { id : 8, nom : 'Carabaffe', types : ['Eau'], taille : '1', poids : '22,5', image : this.img + '8.png' },
    { id : 9, nom : 'Tortank', types : ['Eau'], taille : '1,6', poids : '85,5', image : this.img + '9.png' },
    { id : 10, nom : 'Chenipan', types : ['Insecte'], taille : '0,3', poids : '2,9', image : this.img + '10.png' },
    { id : 11, nom : 'Chrysacier', types : ['Insecte'], taille : '0,7', poids : '9,9', image : this.img + '11.png' },
    { id : 12, nom : 'Papillusion', types : ['Insecte', 'Vol'], taille : '1,1', poids : '32', image : this.img + '12.png' },
    { id : 13, nom : 'Aspicot', types : ['Insecte', 'Poison'], taille : '0,3', poids : '3,2', image : this.img + '13.png' },
    { id : 14, nom : 'Coconfort', types : ['Insecte', 'Poison'], taille : '0,6', poids : '10', image : this.img + '14.png' },
    { id : 15, nom : 'Dardargnan', types : ['Insecte', 'Poison'], taille : '1', poids : '29,5', image : this.img + '15.png' },
    { id : 16, nom : 'Roucool', types : ['Normal', 'Vol'], taille : '0,3', poids : '1,8', image : this.img + '16.png' },
    { id : 17, nom : 'Roucoups', types : ['Normal', 'Vol'], taille : '1,1', poids : '30', image : this.img + '17.png' },
    { id : 18, nom : 'Roucarnage', types : ['Normal', 'Vol'], taille : '1,5', poids : '39,5', image : this.img + '18.png' },
    { id : 19, nom : 'Rattata', types : ['Normal'], taille : '0,3', poids : '3,5', image : this.img + '19.png' },
    { id : 20, nom : 'Rattatac', types : ['Normal'], taille : '0,7', poids : '18,5', image : this.img + '20.png' },
    { id : 21, nom : 'Piafabec', types : ['Normal', 'Vol'], taille : '0,3', poids : '2', image : this.img + '21.png' },
    { id : 22, nom : 'Rapasdepic', types : ['Normal', 'Vol'], taille : '1,2', poids : '38', image : this.img + '22.png' },
    { id : 23, nom : 'Abo', types : ['Poison'], taille : '2', poids : '6,9', image : this.img + '23.png' },
    { id : 24, nom : 'Arbok', types : ['Poison'], taille : '3,5', poids : '65', image : this.img + '24.png' }
  ];

  getPokemons(): Array<Pokemon> {
    return this.pokemon;
  }

  nbPokemons(): number {
    return this.pokemon.length;
  }

  constructor() { }
}
