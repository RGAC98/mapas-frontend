import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import de componentes
import { OpenStreetMapComponent } from './open-street-map/open-street-map.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

//import de modulos google maps
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    OpenStreetMapComponent,
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
