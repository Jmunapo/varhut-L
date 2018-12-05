import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';
import { HousesPage } from '../houses/houses.page';
import { InboxPage } from '../inbox/inbox.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'home',
        outlet: 'menuContent',
        component: HomePage
      },
      {
        path: 'houses',
        outlet: 'menuContent',
        component: HousesPage
      },
      {
        path: 'inbox',
        outlet: 'menuContent',
        component: InboxPage
      }
    ]
  }, 
  {
    path: '',
    redirectTo: '/menu/(menuContent:home)'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
