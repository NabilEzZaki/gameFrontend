import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './add-game/add-game.component';
import { UpdateGameComponent } from './update-game/update-game.component';
import { ViewGameComponent } from './view-game/view-game.component';


const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: ViewGameComponent },
  //{ path: 'login', component: LoginComponent },
  { path: 'add', component: AddGameComponent },
  { path: 'update/:id', component: UpdateGameComponent },
  //{ path: 'games/:id', component: GameDetailComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
