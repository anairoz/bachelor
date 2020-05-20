import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthorComponent } from './author/author.component';
import { UserComponent } from './user/user.component';
import { TestsComponent } from './author/author-content/tests/tests.component';
import { PollsComponent } from './author/author-content/polls/polls.component';
import { GroupsComponent } from './author/author-content/groups/groups.component';
import { AuthorProfileComponent } from './author/author-content/author-profile/author-profile.component';


const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'author', component : AuthorComponent,
    children: [
      {
        path : '',
        component: AuthorProfileComponent,
        outlet: "content"
      },
      {
        path : 'tests',
        component: TestsComponent,
        outlet: "content"
      },
      {
        path : 'polls',
        component: PollsComponent,
        outlet: "content"
      },
      {
        path : 'groups',
        component: GroupsComponent,
        outlet: "content"
      }
    ]},

  {
    path : 'user',
    component : UserComponent
  },
  { path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
