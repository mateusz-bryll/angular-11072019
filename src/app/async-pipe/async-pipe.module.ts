import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncPipeRoutingModule } from './async-pipe-routing.module';
import { AsyncPipeMenuComponent } from './async-pipe-menu/async-pipe-menu.component';
import { AsyncPipeCreationComponent } from './lessons/async-pipe-creation/async-pipe-creation.component';


@NgModule({
  declarations: [AsyncPipeMenuComponent, AsyncPipeCreationComponent],
  imports: [
    CommonModule,
    AsyncPipeRoutingModule
  ]
})
export class AsyncPipeModule { }
