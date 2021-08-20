import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import {RegisterComponent } from './examples/register/register.component';

import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'home',     component: LandingComponent },
    { path: 'login',       component: LoginComponent },
    { path: 'register',       component: RegisterComponent },

    { path: 'profile',     component: ProfileComponent },
    { path: 'details',     component: DetailsComponent }

];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
