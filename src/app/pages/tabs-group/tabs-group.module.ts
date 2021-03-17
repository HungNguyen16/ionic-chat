import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { TabsGroupPageRoutingModule } from './tabs-group-routing.module';
import { TabsGroupComponent } from './tabs-group.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    ComponentsModule,
    TabsGroupPageRoutingModule
  ],
  declarations: [
    TabsGroupComponent,
  ],
  exports: [
    TabsGroupComponent,
  ],
  providers: [
  ]
})
export class TabsGroupModule { }
