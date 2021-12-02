import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountantComponent } from './accountant/accountant.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AddAccountantComponent } from './admin/add-accountant/add-accountant.component';
import { ViewAccountantComponent } from './admin/view-accountant/view-accountant.component';
import { AddStudentComponent } from './accountant/add-student/add-student.component';
import { ViewStudentComponent } from './accountant/view-student/view-student.component';
import { StudentDueComponent } from './accountant/student-due/student-due.component';
import { SearchStudentComponent } from './accountant/search-student/search-student.component';
import { DelStudentComponent } from './accountant/del-student/del-student.component';
import { WildcardComponent } from './wildcard/wildcard.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountantComponent,
    AdminComponent,
    HomeComponent,
    AddAccountantComponent,
    ViewAccountantComponent,
    AddStudentComponent,
    ViewStudentComponent,
    StudentDueComponent,
    SearchStudentComponent,
    DelStudentComponent,
    WildcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
