import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { CheckOutComponent } from './components/check-out/check-out.component';


const routes: Routes = [
  {path:"users", component:UserManagementComponent},
  {path:"bookings", component: BookingsComponent},
  {path:"checkin", component: CheckInComponent},
  {path:"checkout", component:CheckOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
