import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {HomePlComponent} from "./pages/home-pl/home-pl.component";

const routes: Routes = [
  { path: 'en', component: HomeComponent },
  { path: 'pl', component: HomePlComponent },
  { path: '', redirectTo: '/en', pathMatch: 'full' },
  { path: '', redirectTo: '/en', pathMatch: 'full' },
  { path: '*/**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
