import { Routes } from '@angular/router';
import { ClanUsersComponent } from './components/clan-users/clan-users.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'team', component: ClanUsersComponent }
];
