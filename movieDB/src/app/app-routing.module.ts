import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TvComponent } from './tv/tv.component';
import { NetworkComponent } from './network/network.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { UrlGuardGuard } from './url-guard.guard';
import { PeopleComponent } from './people/people.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:"", redirectTo:'home', pathMatch:'full'},
  {path:"home", canActivate:[UrlGuardGuard], component:HomeComponent},
  {path:"about", canActivate:[UrlGuardGuard], component:AboutComponent},
  {path:"movies", canActivate:[UrlGuardGuard], component:MoviesComponent},
  {path:"tv", canActivate:[UrlGuardGuard], component:TvComponent},
  {path:"people", canActivate:[UrlGuardGuard], component:PeopleComponent},
  {path:"network", canActivate:[UrlGuardGuard], component:NetworkComponent},
  {path:"register", component:RegisterationComponent},
  {path:"login", component:LoginComponent},
  {path:"details/:type/:id", component:DetailsComponent},
  {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
