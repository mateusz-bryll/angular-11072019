import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionManagementMenuComponent } from './subscription-management-menu/subscription-management-menu.component';
import { FireAndForgetComponent } from './lessons';


const routes: Routes = [
  {
    path: 'fire-and-forget',
    component: FireAndForgetComponent,
  },
  {
    path: '',
    outlet: 'sidebar',
    component: SubscriptionManagementMenuComponent,
  },
  {
    path: '**',
    redirectTo: 'fire-and-forget',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionManagementRoutingModule { }
