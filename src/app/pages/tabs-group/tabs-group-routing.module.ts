import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsGroupComponent } from './tabs-group.component';
const routes: Routes = [
  {
    path: '',
    component: TabsGroupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsGroupPageRoutingModule {}
