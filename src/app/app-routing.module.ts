import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandyAboutComponent } from './candy-about/candy-about.component';
import { CandyContactComponent } from './candy-contact/candy-contact.component';
import { CandyHomeComponent } from './candy-home/candy-home.component';
import { CandyStoreComponent } from './candy-store/candy-store.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CandyHomeComponent },
  { path: 'store', component: CandyStoreComponent },
  { path: 'about', component: CandyAboutComponent },
  { path: 'contact', component: CandyContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
