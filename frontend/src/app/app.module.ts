import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MyOwnMaterialModule } from './my-own-material-module';
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
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
