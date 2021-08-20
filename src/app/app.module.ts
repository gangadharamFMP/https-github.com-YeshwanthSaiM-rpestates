import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { App1SharedModule} from '../../projects/project/src/app/app.module'
import { SafePipeModule } from 'safe-pipe';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from "@angular/common";
import { DetailsComponent } from './details/details.component';

import {SafePipe} from './pipes/safe.pipe'
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        AppComponent,
        NavbarComponent,   
        DetailsComponent,  
        SafePipe, 
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule, 
        
        BrowserModule,    
        CommonModule, 
        SafePipeModule,  
        RouterModule,
        AppRoutingModule,
        App1SharedModule.forRoot(), 
        ComponentsModule,
        HttpClientModule,
        ExamplesModule,
        
    ],
    exports: [
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
