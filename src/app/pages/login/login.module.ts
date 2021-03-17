import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    ComponentsModule,
    LoginPageRoutingModule
  ],
  declarations: [
    LoginPage,
  ],
  exports: [
    LoginPage,
  ],
  providers: [
  ]
})
export class LoginPageModule {}
