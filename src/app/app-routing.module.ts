import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'home'
  // },
  // {
  //   component: HomeComponent,
  //   path: 'home'
  // },
  // {
  //   component: AboutComponent,
  //   path: 'about'
  // },
  // {
  //   component: ContactComponent,
  //   path: 'contact'
  // }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  // this offset needs to match headerOffset
  // in section scroll directive
  scrollOffset: [0, 200]
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
