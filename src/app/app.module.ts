import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { LogInComponent } from './home/navigation/log-in/log-in.component';
import { SignUpComponent } from './home/navigation/sign-up/sign-up.component';
import { AuthorComponent } from './author/author.component';
import { UserComponent } from './user/user.component';
import { MainComponent } from './home/main/main.component';
import { AboutComponent } from './home/about/about.component';
import { FooterComponent } from './home/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogOutComponent } from './author/in-app-nav/log-out/log-out.component';
import { TestsComponent } from './author/author-content/tests/tests.component';
import { PollsComponent } from './author/author-content/polls/polls.component';
import { GroupsComponent } from './author/author-content/groups/groups.component';
import { InAppNavComponent } from './author/in-app-nav/in-app-nav.component';
import { AuthorContentComponent } from './author/author-content/author-content.component';
import { AuthorProfileComponent } from './author/author-content/author-profile/author-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    LogInComponent,
    SignUpComponent,
    AuthorComponent,
    UserComponent,
    MainComponent,
    AboutComponent,
    FooterComponent,
    PageNotFoundComponent,
    LogOutComponent,
    TestsComponent,
    PollsComponent,
    GroupsComponent,
    InAppNavComponent,
    AuthorContentComponent,
    AuthorProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
