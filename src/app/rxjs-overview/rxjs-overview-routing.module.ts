import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectsComponent } from './lessons';
import { RxjsOverviewMenuComponent } from './rxjs-overview-menu/rxjs-overview-menu.component';


const routes: Routes = [
  {
    path: 'subjects',
    component: SubjectsComponent,
  },
  {
    path: '',
    outlet: 'sidebar',
    component: RxjsOverviewMenuComponent,
  },
  {
    path: '**',
    redirectTo: 'subjects',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsOverviewRoutingModule { }
