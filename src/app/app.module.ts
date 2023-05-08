import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts.component';
import { HomeComponent } from './home.component';
import { ActivitiesComponent } from './activities.component';
//import {HomeComponent} from './home.component';
// import { SidenavComponent } from './sidenav/SidenavComponent'

import { MaterialModule } from './material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DesignComponent } from './design/design.component';
import { ColsComponent } from './cols/cols.component';
import { MatSidenav } from '@angular/material';

export const routes = [
  { path: 'home', component: HomeComponent, label: 'Home' },
  { path: 'cols', component: ColsComponent, label: 'Cols' },
  { path: 'activities', component: ActivitiesComponent, label: 'Activities' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    ActivitiesComponent,
    ContactsComponent,
    SidenavComponent,
    DesignComponent,
    HomeComponent,
    ColsComponent,
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
