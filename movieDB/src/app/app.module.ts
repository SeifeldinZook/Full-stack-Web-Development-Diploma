import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TvComponent } from './tv/tv.component';
import {MoviesComponent} from './movies/movies.component';
import {AboutComponent} from './about/about.component';
import {NetworkComponent} from './network/network.component';
import {FormsModule} from '@angular/forms';
import {NotfoundComponent} from './notfound/notfound.component';
import {HttpClientModule} from '@angular/common/http';
import { PeopleComponent } from './people/people.component';
import { DetailsComponent } from './details/details.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterationComponent,
    HomeComponent,
    NavbarComponent,
    TvComponent,
    MoviesComponent,
    AboutComponent,
    NetworkComponent,
    NotfoundComponent,
    PeopleComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
