import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { RxjsOverviewRoutingModule } from './rxjs-overview-routing.module';
import { RxjsOverviewMenuComponent } from './rxjs-overview-menu/rxjs-overview-menu.component';
import { SubjectsComponent } from './lessons';


@NgModule({
  declarations: [
    RxjsOverviewMenuComponent,
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    RxjsOverviewRoutingModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class RxjsOverviewModule { }
