import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeComponent } from './components/admin-components/add-employe/add-employe.component';
//import { LoginComponent } from './login/login.component';
import { InfoCandidateComponent } from './components/candidate-components/info-candidate/info-candidate.component';
import { DemandeCongeComponent } from './components/employe-components/demande-conge/demande-conge.component';

import { ListEmployesComponent } from './components/admin-components/list-employes/list-employes.component';
import { TodoListComponent } from './components/admin-components/todos/todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileEmployeComponent } from './components/admin-components/profile-employe/profile-employe.component';
import { NotesInternesComponent } from './components/admin-components/notes/notes-internes/notes-internes.component';
import { RecrutementsComponent } from './components/admin-components/recrutements/recrutements.component';
import { CaisseComponent } from './components/admin-components/caisse/caisse.component';
import { TimetrackingComponent } from './components/employe-components/timetracking/timetracking.component';
import { ListMeetingComponent } from './components/admin-components/meetings/list-meeting/list-meeting.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListCongesComponent } from './components/admin-components/conges/list-conges/list-conges.component';
import { PresenceCalendarComponent } from './components/employe-components/presence-calendar/presence-calendar.component';
import { HolidayCalendarComponent } from './components/admin-components/holiday-calendar/holiday-calendar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth/auth-guard.service';

import { NotesInternesEmployeComponent } from './components/employe-components/notes-internes-employe/notes-internes-employe.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoEmployeComponent } from './components/employe-components/info-employe/info-employe.component';
import { ProfilCandidatComponent } from './components/admin-components/profil-candidat/profil-candidat.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PresenceAdminComponent } from './components/admin-components/presence/presence-admin/presence-admin.component';
import { UpdateEmployeComponent } from './components/admin-components/update-employe/update-employe.component';
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



//import { HomeComponent } from './home/home.component';
//import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '', component : PublicLayoutComponent, children: [
      
      {path: '',redirectTo: 'home', pathMatch: 'full'},
      { path: 'home',component: HomeComponent},
      { path: 'candidat', component: InfoCandidateComponent },
      { path: 'response', component: ResponseComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },

    ]
  },
  

  { path: '', component: SidebarComponent,children:[

  {path:'', redirectTo:'dashboard' , pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'profil', component: UpdateProfilComponent},
  { path: 'addEmploye', component: AddEmployeComponent },
  { path: 'demandeConge', component: DemandeCongeComponent }, 
  
  { path: 'listEmployes', component: ListEmployesComponent },
  { path: 'archivedEmployes', component: ArchivedEmployesComponent },
  { path: 'todoList', component: TodoListComponent },
  //{ path: 'listEmployes/profilEmploye/:idUser', component: ProfileEmployeComponent },
  { path: 'profilEmploye/:id', component: ProfileEmployeComponent },
  { path: 'updateEmploye', component: UpdateEmployeComponent },
  { path: 'updatePhoto', component: UpdatePhotoComponent },
  { path: 'updateInfoEmploye', component: UpdateInfoEmployeComponent },
  { path: 'updateMeeting', component: UpdateMeetingComponent },
  { path: 'updateNote', component: UpdateNoteComponent },
  { path: 'updateTodo', component: UpdateTodoComponent },
  { path: 'profilCandidat/:id', component: ProfilCandidatComponent },
  { path: 'congeRequest/:id', component: CongeRequestComponent },
  { path: 'info-employe/:id', component: InfoEmployeComponent },
  
  { path: 'bilan-conges', component: BilanCongesComponent },
  { path: 'notesInternes', component: NotesInternesComponent },
  { path: 'employe-notesInternes', component: NotesInternesEmployeComponent },
  { path: 'conge-employe', component: CongeEmployeComponent },
  { path: 'recrutement', component: RecrutementsComponent },
  { path: 'caisse', component: CaisseComponent },
  { path: 'timetracking', component: TimetrackingComponent },
  { path: 'meetings', component: ListMeetingComponent },
  { path: 'list-conges', component: ListCongesComponent },
  { path: 'presence-calendar/:id', component: PresenceCalendarComponent },
  { path: 'presence', component: PresenceAdminComponent },
  { path: 'holiday-calendar', component: HolidayCalendarComponent }]},
  

 
  { path: 'footer', component: FooterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
