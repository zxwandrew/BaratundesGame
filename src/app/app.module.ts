import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { Level3Component } from './level3/level3.component';
import { Level1endComponent } from './level1end/level1end.component';
import { Level3endComponent } from './level3end/level3end.component';
import { Level4Component } from './level4/level4.component';
import { Level4endComponent } from './level4end/level4end.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Level1Component,
    Level2Component,
    Level3Component,
    Level1endComponent,
    Level3endComponent,
    Level4Component,
    Level4endComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
