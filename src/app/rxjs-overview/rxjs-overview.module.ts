import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    RxjsOverviewRoutingModule
  ]
})
export class RxjsOverviewModule { }
