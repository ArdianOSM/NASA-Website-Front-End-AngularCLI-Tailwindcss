import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ErrorComponent } from './pages/error/error.component';
import { ContactsupportComponent } from './pages/contactsupport/contactsupport.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { ApplyformComponent } from './pages/applyform/applyform.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: 'landingpage' , component:LandingpageComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'blog',component:BlogComponent},
  {path:'careers', component:CareersComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'',component:ErrorComponent},
  {path:'contactsupport',component:ContactsupportComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'apply',component:ApplyformComponent},
  {path:'test',component:TestComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
