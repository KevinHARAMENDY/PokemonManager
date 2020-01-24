import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GenerationsComponent} from './generations/generations.component';
import {PokemonsComponent} from './pokemons/pokemons.component';
import {MainComponent} from './main/main.component';
import {ErrorComponent} from './error/error.component';


const routes: Routes = [
  {path: 'generations', component: GenerationsComponent},
  {path: 'pokemons', component: PokemonsComponent},
  {path: '', component: MainComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
