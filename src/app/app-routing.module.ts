import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';


const routes: Routes = [
  {
    path: 'courses',
    component: CourseComponent,
    children: [
      {
        path: 'rxjs-overview',
        loadChildren: () => import('./rxjs-overview/rxjs-overview.module').then(m => m.RxjsOverviewModule),
      },
      {
        path: 'async-pipe',
        loadChildren: () => import('./async-pipe/async-pipe.module').then(m => m.AsyncPipeModule),
      },
      {
        path: 'subscription-management',
        loadChildren: () => import('./subscription-management/subscription-management.module').then(m => m.SubscriptionManagementModule),
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'courses/rxjs-overview'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
