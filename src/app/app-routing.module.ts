import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  /*{
    path : (lien) CELA VA SE GREFFER SUR L'URL /(: pour paramétrer ex : id)    route joker : **                    |   mettre joker a la fin
    component : (composant) NOM DU COMPOSANT                                   route joker : choisir un composant  |
    mettre private route dans constructeur ts
     -> this.route.snapshot.paramMap.get('id')
   }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
