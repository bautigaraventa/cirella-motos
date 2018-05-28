import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MotosComponent } from './motos/motos.component';
import { MotoThumbnailComponent } from './moto-thumbnail/moto-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    MotosComponent,
    MotoThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
