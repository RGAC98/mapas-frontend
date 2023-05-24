import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import {OpenStreetMapComponent} from './open-street-map/open-street-map.component';

const routes: Routes = [
  {path: 'openSMap', component: OpenStreetMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
