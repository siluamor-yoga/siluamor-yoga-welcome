import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { PresentationComponent } from './component/home/presentation/presentation.component';
import { ActivitiesComponent } from './component/home/activities/activities.component';
import { MenuComponent } from './component/base/menu/menu.component';
import { FooterComponent } from './component/base/footer/footer.component';
import { ProfileComponent } from './component/home/profile/profile.component';
import { ResumeComponent } from './component/home/presentation/resume/resume.component';
import { DetailComponent } from './component/home/presentation/detail/detail.component';
import { SidenavComponent } from './component/base/sidenav/sidenav.component';

//AngularMaterial
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavListComponent } from './component/base/sidenav/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    ActivitiesComponent,
    MenuComponent,
    FooterComponent,
    ProfileComponent,
    ResumeComponent,
    DetailComponent,
    SidenavComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }