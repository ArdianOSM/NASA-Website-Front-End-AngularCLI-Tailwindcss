import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { PagesComponent } from './pages/pages.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LheaderComponent } from './components/lheader/lheader.component';
import { SigninComponent } from './pages/signin/signin.component';
import { RouterModule } from '@angular/router';
import { L2headerComponent } from './components/l2header/l2header.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderHComponent } from './components/header-h/header-h.component';
import { Lheader3Component } from './components/lheader3/lheader3.component';
import { Lheader4Component } from './components/lheader4/lheader4.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { LnavbarComponent } from './components/lnavbar/lnavbar.component';
import { HomeheaderComponent } from './components/homeheader/homeheader.component';
import { Homeheader2Component } from './components/homeheader2/homeheader2.component';
import { CareerjobsComponent } from './components/careerjobs/careerjobs.component';
import { ErrorComponent } from './pages/error/error.component';
import { ContactsupportComponent } from './pages/contactsupport/contactsupport.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { ApplyformComponent } from './pages/applyform/applyform.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    PagesComponent,
    NavbarComponent,
    FooterComponent,
    LandingpageComponent,
    SignupComponent,
    LheaderComponent,
    SigninComponent,
    SignupComponent,
    L2headerComponent,
    HomeComponent,
    HeaderHComponent,
    Lheader3Component,
    Lheader4Component,
    BlogComponent,
    CareersComponent,
    CalendarComponent,
    LnavbarComponent,
    HomeheaderComponent,
    Homeheader2Component,
    CareerjobsComponent,
    ErrorComponent,
    ContactsupportComponent,
    ForgotpasswordComponent,
    ApplyformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
