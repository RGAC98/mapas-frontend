import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import {OpenStreetMapComponent} from './open-street-map/open-street-map.component';
import {GoogleMapsComponent} from './google-maps/google-maps.component';

const routes: Routes = [
  {path: 'openSMap', component: OpenStreetMapComponent},
  {path: 'googleMaps', component: GoogleMapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
