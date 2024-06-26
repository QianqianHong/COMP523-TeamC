import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIpslogComponent } from './components/ips/add-ipslog/add-ipslog.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { IpslogListComponent } from './components/ips/ipslog-list/ipslog-list.component';
import { ClosedListComponent } from './components/closed/closed-list/closed-list.component';
import { AddClosedComponent } from './components/closed/add-closed/add-closed.component';
import { JobDevListComponent } from './components/jobDev/job-dev-list/job-dev-list.component';
import { AddJobDevComponent } from './components/jobDev/add-job-dev/add-job-dev.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { DemographicsComponent } from './components/person/person-list/demographics/demographics.component';
import { ClinicalComponent } from './components/person/person-list/clinical/clinical.component';
import { EducationComponent } from './components/person/person-list/education/education.component';
import { EmploymentComponent } from './components/person/person-list/employment/employment.component';
import { VrComponent } from './components/person/person-list/vr/vr.component';
import { AddPersonComponent } from './components/person/add-person/add-person.component';
import { StaffingListComponent } from './components/staffing/staffing-list/staffing-list.component';
import { AddStaffingComponent } from './components/staffing/add-staffing/add-staffing.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AuthGuard } from './auth.guard';
import { AuthGuard2 } from './auth.guard.2';
import { SignUpSuperadminPageComponent } from './components/sign-up-superadmin-page/sign-up-superadmin-page.component';
import { SignUpAdminPageComponent } from './components/sign-up-admin-page/sign-up-admin-page.component';
import { SignUpProviderPageComponent } from './components/sign-up-provider-page/sign-up-provider-page.component';
import { InviteUserComponent } from './components/invite-user/invite-user.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: LoginPageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'closed', canActivate: [AuthGuard2], component: ClosedListComponent },
  {
    path: 'addClosed',
    canActivate: [AuthGuard2],
    component: AddClosedComponent,
  },
  { path: 'jobDev', canActivate: [AuthGuard2], component: JobDevListComponent },
  {
    path: 'addjobDev',
    canActivate: [AuthGuard2],
    component: AddJobDevComponent,
  },
  { path: 'person', canActivate: [AuthGuard2], component: PersonListComponent },
  {
    path: 'addPerson',
    canActivate: [AuthGuard2],
    component: AddPersonComponent,
  },
  { path: 'ipslog', canActivate: [AuthGuard2], component: IpslogListComponent },
  { path: 'addIPS', canActivate: [AuthGuard2], component: AddIpslogComponent },
  {
    path: 'staffing',
    canActivate: [AuthGuard2],
    component: StaffingListComponent,
  },
  {
    path: 'addStaffing',
    canActivate: [AuthGuard2],
    component: AddStaffingComponent,
  },
  { path: 'demographics', component: DemographicsComponent },
  { path: 'clinical', component: ClinicalComponent },
  { path: 'education', component: EducationComponent },
  { path: 'employment', component: EmploymentComponent },
  { path: 'vr', component: VrComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'inviteUser', component: InviteUserComponent },
  {
    path: 'zmY4KHGcqMKPjEsewQTE2QbazONxITTjSHGP2sA',
    component: SignUpSuperadminPageComponent,
  },
  { path: 'dmfde3YDsBZKsNEnzLo9Q', component: SignUpAdminPageComponent },
  { path: '9be6A5Vv7HVV0ojFI4Izfw', component: SignUpProviderPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
