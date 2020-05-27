import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpModule} from '@angular/http';
import {Routes, RouterModule, Router} from '@angular/router'

const routeConfig: Routes = [
  {path: "contacts", component: ContactsComponent},
  {path: "detail/:id", component: ContactDetailComponent},
  {path: "", redirectTo: "/contacts", pathMatch:'full'},
  {path: "**", component: PageNotFoundComponent},
];

import { AppComponent } from './app.component';
import {HeaderComponent} from './header.component';
import { BookComponent } from './book/book.component';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './card/card.component';
import {RoundPipe} from './round.pipe';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookComponent,
    FormComponent,
    PersonComponent,
    ChildComponent,
    CardComponent,
    RoundPipe,
    WeatherComponent,
    LoginComponent,
    ContactsComponent,
    ContactDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
