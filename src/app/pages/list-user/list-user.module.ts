import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { RouterModule } from '@angular/router';
import { ListUserPage } from './list-user.component';
import { ListUserPageRoutingModule } from './list-user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    ComponentsModule,
    ListUserPageRoutingModule
  ],
  declarations: [
    ListUserPage,
  ],
  exports: [
    ListUserPage,
  ],
  providers: [
  ]
})
export class ListUserPageModule {}
