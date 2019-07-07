import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { AsyncPipeRoutingModule } from './async-pipe-routing.module';
import { AsyncPipeMenuComponent } from './async-pipe-menu/async-pipe-menu.component';
import { AsyncPipeCreationComponent } from './lessons/async-pipe-creation/async-pipe-creation.component';
import { AsyncPipe } from './async.pipe';


@NgModule({
  declarations: [
    AsyncPipeMenuComponent,
    AsyncPipeCreationComponent,
    AsyncPipe,
  ],
  imports: [
    CommonModule,
    AsyncPipeRoutingModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class AsyncPipeModule { }
