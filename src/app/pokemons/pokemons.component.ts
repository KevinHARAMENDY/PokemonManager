import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  private img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  private pokemon = [
    { nom : 'Bulbizarre', types : ['Poison', 'Plante'], taille : '0,7', poids : '6,9', image : this.img + '1.png' },
    { nom : 'Herbizarre', types : ['Poison', 'Plante'], taille : '1', poids : '13', image : this.img + '2.png' },
    { nom : 'Florizarre', types : ['Poison', 'Plante'], taille : '0,7', poids : '6,9', image : this.img + '3.png' },
    { nom : 'Salamèche', types : ['Feu'], taille : '0,6', poids : '8,5', image : this.img + '4.png' },
    { nom : 'Reptincel', types : ['Feu'], taille : '1,1', poids : '19', image : this.img + '5.png' },
    { nom : 'Dracaufeu', types : ['Feu', 'Vol'], taille : '1,7', poids : '90,5', image : this.img + '6.png' },
    { nom : 'Carapuce', types : ['Eau'], taille : '0,5', poids : '9', image : this.img + '7.png' },
    { nom : 'Carabaffe', types : ['Eau'], taille : '1', poids : '22,5', image : this.img + '8.png' },
    { nom : 'Tortank', types : ['Eau'], taille : '1,6', poids : '85,5', image : this.img + '9.png' },
    { nom : 'Chenipan', types : ['Insecte'], taille : '0,3', poids : '2,9', image : this.img + '10.png' },
    { nom : 'Chrysacier', types : ['Insecte'], taille : '0,7', poids : '9,9', image : this.img + '11.png' },
    { nom : 'Papillusion', types : ['Insecte', 'Vol'], taille : '1,1', poids : '32', image : this.img + '12.png' },
    { nom : 'Aspicot', types : ['Insecte', 'Poison'], taille : '0,3', poids : '3,2', image : this.img + '13.png' },
    { nom : 'Coconfort', types : ['Insecte', 'Poison'], taille : '0,6', poids : '10', image : this.img + '14.png' },
    { nom : 'Dardargnan', types : ['Insecte', 'Poison'], taille : '1', poids : '29,5', image : this.img + '15.png' },
    { nom : 'Roucool', types : ['Normal', 'Vol'], taille : '0,3', poids : '1,8', image : this.img + '16.png' },
    { nom : 'Roucoups', types : ['Normal', 'Vol'], taille : '1,1', poids : '30', image : this.img + '17.png' },
    { nom : 'Roucarnage', types : ['Normal', 'Vol'], taille : '1,5', poids : '39,5', image : this.img + '18.png' },
    { nom : 'Rattata', types : ['Normal'], taille : '0,3', poids : '3,5', image : this.img + '19.png' },
    { nom : 'Rattatac', types : ['Normal'], taille : '0,7', poids : '18,5', image : this.img + '20.png' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
