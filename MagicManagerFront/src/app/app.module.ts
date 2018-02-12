import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AlertComponent } from './components/alert-queue/alert/alert.component';
import { AlertQueueComponent } from './components/alert-queue/alert-queue.component';

import { ResoucesService } from './services/resources/resouces.service';
import { AlertService } from './components/alert-queue/service/alert.service';

const appRoutes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: '**', 
    component: NotFoundComponent 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    MainMenuComponent,
    AlertComponent,
    AlertQueueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ResoucesService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
