import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsyncPipeMenuComponent } from './async-pipe-menu/async-pipe-menu.component';
import { AsyncPipeCreationComponent } from './lessons';


const routes: Routes = [
  {
    path: 'async-pipe-creation',
    component: AsyncPipeCreationComponent,
  },
  {
    path: '',
    outlet: 'sidebar',
    component: AsyncPipeMenuComponent,
  },
  {
    path: '**',
    redirectTo: 'async-pipe-creation',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsyncPipeRoutingModule { }
