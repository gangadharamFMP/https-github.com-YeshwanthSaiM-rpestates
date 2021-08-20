import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const providers = []

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
@NgModule({})
export class App1SharedModule{
  static forRoot(): any {
    return {
      ngModule: AppModule,
      providers:providers
    }
  }
}





