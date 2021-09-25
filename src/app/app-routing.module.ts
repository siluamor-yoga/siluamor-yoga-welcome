import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './component/base/sidenav/sidenav.component';
import { ActivitiesComponent } from './component/home/activities/activities.component';
import { PresentationComponent } from './component/home/presentation/presentation.component';
import { ProfileComponent } from './component/home/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/presentation', pathMatch: 'full' },
  { path: 'presentation', component: PresentationComponent },
  { path: 'profile', component: ProfileComponent },
  //{ path: 'sidenav', component: SidenavComponent },
  { path: 'activities', component: ActivitiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
