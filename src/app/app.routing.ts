import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { RegisterComponent } from './examples/register/register.component';

import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { DetailsComponent } from './details/details.component';
import { VirtualTourComponent } from './virtual-tour/virtual-tour.component';
import { View3DModelComponent } from './view3-dmodel/view3-dmodel.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesPageComponent } from "./components/services-page/services-page.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactPageComponent } from "./components/contact-page/contact-page.component";


const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'index', component: ComponentsComponent },
    { path: 'nucleoicons', component: NucleoiconsComponent },

    { path: "properties", component: ServicesPageComponent },
    { path: "about", component: AboutComponent },
    { path: "contact", component: ContactPageComponent },

    { path: "login", component: LoginComponent },
    { path: "home", component: LandingComponent },
    { path: "register", component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'virtual-tour', component: VirtualTourComponent },
    { path: '3d-model', component: View3DModelComponent },
    { path: 'vacancy', component: VacancyComponent },
    { path: 'details', component: DetailsComponent },

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
