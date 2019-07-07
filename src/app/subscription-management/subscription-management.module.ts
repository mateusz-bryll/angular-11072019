import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { SubscriptionManagementRoutingModule } from './subscription-management-routing.module';
import { SubscriptionManagementMenuComponent } from './subscription-management-menu/subscription-management-menu.component';
import { FireAndForgetComponent } from './lessons/fire-and-forget/fire-and-forget.component';


@NgModule({
  declarations: [SubscriptionManagementMenuComponent, FireAndForgetComponent],
  imports: [
    CommonModule,
    SubscriptionManagementRoutingModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class SubscriptionManagementModule { }
