import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddEmployeComponent } from './components/admin-components/add-employe/add-employe.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeService } from './services/employe.service';
import { InfoCandidateComponent } from './components/candidate-components/info-candidate/info-candidate.component';
import { CandidateService } from './services/candidate.service';
import { ReactiveFormsModule} from '@angular/forms';
import { DemandeCongeComponent } from './components/employe-components/demande-conge/demande-conge.component';
import { DemandeDocComponent } from './components/employe-components/demande-doc/demande-doc.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { CommonModule } from '@angular/common';

import { FlatpickrModule } from 'angularx-flatpickr';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalModule } from 'ngx-bootstrap/modal';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgxPaginationModule } from 'ngx-pagination' ; 

import { ListEmployesComponent } from './components/admin-components/list-employes/list-employes.component';
import { TodoListComponent } from './components/admin-components/todos/todo-list/todo-list.component';
import { MatDialogModule, } from '@angular/material/dialog';
import { TodoService } from './services/todo.service';
import { ProfileEmployeComponent } from './components/admin-components/profile-employe/profile-employe.component';
import { UpdateEmployeComponent } from './components/admin-components/update-employe/update-employe.component';


import { RecrutementsComponent } from './components/admin-components/recrutements/recrutements.component';
import { NotesInternesComponent } from './components/admin-components/notes/notes-internes/notes-internes.component';
import { EmailService } from './services/email.service';
import { MatIconModule, MatButtonModule, MatInputModule, MatExpansionModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatSnackBarModule } from '@angular/material';
import { CaisseComponent } from './components/admin-components/caisse/caisse.component';
import { AjoutNoteComponent } from './components/admin-components/notes/ajout-note/ajout-note.component';
import { TimetrackingComponent } from './components/employe-components/timetracking/timetracking.component';
import { AddPresenceComponent } from './components/employe-components/add-presence/add-presence.component';
import { AddTodoComponent } from './components/admin-components/todos/add-todo/add-todo.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { MeetingComponent } from './components/admin-components/meetings/meeting/meeting.component';
import { ListMeetingComponent } from './components/admin-components/meetings/list-meeting/list-meeting.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { ListCongesComponent } from './components/admin-components/conges/list-conges/list-conges.component';
import { AcceptComponent } from './components/admin-components/dialogs/accept/accept.component';
import { PresenceCalendarComponent } from './components/employe-components/presence-calendar/presence-calendar.component';
import { HolidayCalendarComponent } from './components/admin-components/holiday-calendar/holiday-calendar.component';
import { HomeComponent } from './components/home/home.component';

import { FooterComponent } from './components/footer/footer.component';
import { NotesInternesEmployeComponent } from './components/employe-components/notes-internes-employe/notes-internes-employe.component';
import {InfoEmployeComponent} from './components/employe-components/info-employe/info-employe.component';
import { ProfilCandidatComponent } from './components/admin-components/profil-candidat/profil-candidat.component';
import {AccumulationChartModule} from '@syncfusion/ej2-angular-charts';
import { ProfilComponent } from './profil/profil.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';

import {  MatDividerModule} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PieComponent } from './shared/widgets/pie/pie.component';
import { LineComponent } from './shared/widgets/line/line.component';
import { Pie2Component } from './shared/widgets/pie2/pie2.component';
import { PresenceAdminComponent } from './components/admin-components/presence/presence-admin/presence-admin.component';
import { UpdateInfoEmployeComponent } from './components/employe-components/update-info-employe/update-info-employe.component';
import { UpdateMeetingComponent } from './components/admin-components/meetings/update-meeting/update-meeting.component';
import { UpdateNoteComponent } from './components/admin-components/notes/update-note/update-note.component';
import { UpdateTodoComponent } from './components/admin-components/todos/update-todo/update-todo.component';
import { CongeRequestComponent } from './components/admin-components/conges/conge-request/conge-request.component';
import { CongeEmployeComponent } from './components/employe-components/conge-employe/conge-employe.component';
import { UpdatePhotoComponent } from './components/admin-components/update-photo/update-photo.component';
import { BilanCongesComponent } from './components/admin-components/conges/bilan-conges/bilan-conges.component';
import { ResponseComponent } from './components/candidate-components/response/response.component';
import { UpdateProfilComponent } from './components/update-profil/update-profil.component';
import { ArchivedEmployesComponent } from './components/admin-components/archived-employes/archived-employes.component';
import {EditorModule} from '@tinymce/tinymce-angular';


import {    MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AddEmployeComponent,
    InfoCandidateComponent,
    DemandeCongeComponent,
    DemandeDocComponent,
    ListEmployesComponent,
    TodoListComponent,
    ProfileEmployeComponent,
    UpdateEmployeComponent,
    
    RecrutementsComponent,
    NotesInternesComponent,
    AjoutNoteComponent,
    CaisseComponent,
    TimetrackingComponent,
    AddPresenceComponent,
    AddTodoComponent,
    MeetingComponent,
    ListMeetingComponent,
    LoginComponent,
    RegisterComponent,
    ListCongesComponent,
    AcceptComponent,
    PresenceCalendarComponent,
    HolidayCalendarComponent,
    HomeComponent,
    FooterComponent,
    NotesInternesEmployeComponent,
    InfoEmployeComponent,
    ProfilCandidatComponent,
    ProfilComponent,
    DashboardComponent,
    PublicLayoutComponent,
    PieComponent,
    LineComponent,
    Pie2Component,
    PresenceAdminComponent,
    UpdateInfoEmployeComponent,
    UpdateMeetingComponent,
    UpdateNoteComponent,
    UpdateTodoComponent,
    CongeRequestComponent,
    CongeEmployeComponent,
    UpdatePhotoComponent,
    BilanCongesComponent,
    ResponseComponent,
    UpdateProfilComponent,
    ArchivedEmployesComponent,
    
    
   
    //LoginComponent,
    //RegisterComponent,
    //HomeComponent,
 
 
  ],
  imports: [
    MatDialogModule,
    ScheduleModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule,
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    ModalModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    FullCalendarModule,
    AccumulationChartModule,
    HighchartsChartModule,
    MatCardModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    EditorModule,
    MatSnackBarModule
  ],

  exports: [
    PieComponent
  ],
  providers: [EmployeService,CandidateService,TodoService,EmailService,authInterceptorProviders,  { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent,ListCongesComponent],
  entryComponents:[AjoutNoteComponent,AddTodoComponent,MeetingComponent,AcceptComponent,UpdateMeetingComponent]
})
export class AppModule { }
