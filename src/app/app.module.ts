import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddGameComponent } from './add-game/add-game.component';
import { ViewGameComponent } from './view-game/view-game.component';
import { UpdateGameComponent } from './update-game/update-game.component';

@NgModule({
  declarations: [
    AppComponent,
    AddGameComponent,
    UpdateGameComponent,
    ViewGameComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
