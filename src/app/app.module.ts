import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { EnjeuxComponent } from './enjeux/enjeux.component';
import { LibrairiesComponent } from './librairies/librairies.component';
import { LiensComponent } from './liens/liens.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PrincipeComponent } from './principe/principe.component';
import { TechniqueComponent } from './technique/technique.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { SidemenupageComponent } from './sidemenupage/sidemenupage.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './footer/footer.component';
import { ApplicationComponent } from './application/application.component';
import { CodeComponent } from './code/code.component';
import { LinkComponent } from './link/link.component';
import { RobotComponent } from './robot/robot.component';






@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    EnjeuxComponent,
    LibrairiesComponent,
    LiensComponent,
    PresentationComponent,
    PrincipeComponent,
    TechniqueComponent,
    SidemenupageComponent,
    FooterComponent,
    ApplicationComponent,
    CodeComponent,
    LinkComponent,
    RobotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatRippleModule,
    MatCardModule,
    HttpClientModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
