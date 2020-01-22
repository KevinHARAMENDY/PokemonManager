import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  private pokemon = [];
  private bul = this.pokemon.push({
    nom : 'Bulbizarre',
    types : ['Poison', 'Plante'],
    taille : '0,7',
    poids : '6,9'
  });
  private her = this.pokemon.push({
    nom : 'Herbizarre',
    types : ['Poison', 'Plante'],
    taille : '1',
    poids : '13'
  });
  private flo = this.pokemon.push({
    nom : 'Florizarre',
    types : ['Poison', 'Plante'],
    taille : '0,7',
    poids : '6,9'
  });
  private sal = this.pokemon.push({
    nom : 'Salamèche',
    types : ['Feu'],
    taille : '0,6',
    poids : '8,5'
  });
  private rep = this.pokemon.push({
    nom : 'Reptincel',
    types : ['Feu'],
    taille : '1,1',
    poids : '19'
  });
  private dra = this.pokemon.push({
    nom : 'Dracaufeu',
    types : ['Feu', 'Vol'],
    taille : '1,7',
    poids : '90,5'
  });

  constructor() { }

  ngOnInit() {
  }

}
