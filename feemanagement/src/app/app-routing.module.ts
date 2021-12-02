import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountantComponent } from './accountant/accountant.component';
import { AddStudentComponent } from './accountant/add-student/add-student.component';
import { DelStudentComponent } from './accountant/del-student/del-student.component';
import { SearchStudentComponent } from './accountant/search-student/search-student.component';
import { StudentDueComponent } from './accountant/student-due/student-due.component';
import { ViewStudentComponent } from './accountant/view-student/view-student.component';
import { AddAccountantComponent } from './admin/add-accountant/add-accountant.component';
import { AdminComponent } from './admin/admin.component';
import { ViewAccountantComponent } from './admin/view-accountant/view-accountant.component';
import { HomeComponent } from './home/home.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "admin", component: AdminComponent },
  { path: "accountant", component: AccountantComponent },
  { path: "add-account", component: AddAccountantComponent },
  { path: "view-account", component: ViewAccountantComponent },
  { path: "add-student", component: AddStudentComponent },
  { path: "view-student", component: ViewStudentComponent },
  { path: "student-due", component: StudentDueComponent },
  { path: "search-student", component: SearchStudentComponent },
  { path: "del-student", component: DelStudentComponent },
  { path: "**", component: WildcardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
