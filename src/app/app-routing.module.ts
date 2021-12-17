import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { CodeComponent } from './code/code.component';
import { EnjeuxComponent } from './enjeux/enjeux.component';
import { HomeComponent } from './home/home.component';
import { LibrairiesComponent } from './librairies/librairies.component';
import { LiensComponent } from './liens/liens.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PrincipeComponent } from './principe/principe.component';
import { TechniqueComponent } from './technique/technique.component';
import { RobotComponent } from './robot/robot.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full'},
  { path: 'accueil', component: HomeComponent, data: { showMenu: false }},
  { path: 'presentation', component: PresentationComponent, data: { showMenu: true }},
  { path: 'application', component: ApplicationComponent, data: { showMenu: true } },
  { path: 'principe', component: PrincipeComponent, data: { showMenu: true }  },
  { path: 'technique', component: TechniqueComponent, data: { showMenu: true }  },
  { path: 'code', component: CodeComponent, data: { showMenu: true }  },
  { path: 'librairies', component: LibrairiesComponent, data: { showMenu: true }  },
  { path: 'enjeux', component: EnjeuxComponent, data: { showMenu: true }  },
  { path: 'liens', component: LiensComponent, data: { showMenu: true }  },

];


// const routes: Routes = [
//   {
//     path: '',
//     pathMatch:'full',
//     component: HomeComponent,
//   },
//   {
//     path: 'decouvrir',
//     component: PresentationComponent,
//     children: [
//       { path: 'presentation', component: PresentationComponent },
//       { path: 'application', component: ApplicationComponent },
//       { path: 'principe', component: PrincipeComponent },
//       { path: 'technique', component: TechniqueComponent },
//       { path: 'code', component: CodeComponent },
//       { path: 'librairies', component: LibrairiesComponent },
//       { path: 'enjeux', component: EnjeuxComponent },
//       { path: 'liens', component: LiensComponent },
//     ]
//   }
// ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
