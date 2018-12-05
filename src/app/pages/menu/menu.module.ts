import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { MenuRoutingModule } from './menu-routing.module';
import { HousesPageModule } from '../houses/houses.module';
import { InboxPageModule } from '../inbox/inbox.module';
import { HomePageModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRoutingModule,
    HomePageModule,
    HousesPageModule,
    InboxPageModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
