import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { RouterModule } from '@angular/router';import { RegisterPage } from './register.page';
import { RegisterPageRoutingModule } from './register-routing.module';
;


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    ComponentsModule,
    RegisterPageRoutingModule
  ],
  declarations: [
    RegisterPage,
  ],
  exports: [
    RegisterPage,
  ],
  providers: [
  ]
})
export class RegisterPageModule {}
