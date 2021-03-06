import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:"", redirectTo:'home', pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"movies", component:MoviesComponent},
  {path:"tv", component:TvComponent},
  {path:"people", component:PeopleComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
