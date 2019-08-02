import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { Level1Component } from './level1/level1.component'
import { Level1endComponent } from './level1end/level1end.component'
import { Level2Component } from './level2/level2.component'
import { Level3Component } from './level3/level3.component'
import { Level3endComponent } from './level3end/level3end.component';
import { Level4Component } from './level4/level4.component';
import { Level4endComponent } from './level4end/level4end.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'level1', component: Level1Component},
  { path: 'level1end', component: Level1endComponent},
  { path: 'level2', component: Level2Component},
  { path: 'level3', component: Level3Component},
  { path: 'level3end', component: Level3endComponent},
  { path: 'level4', component: Level4Component},
  { path: 'level4end', component: Level4endComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
