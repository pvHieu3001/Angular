import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header.component';
import { BookComponent } from './book/book.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './card/card.component';
import {RoundPipe} from './round.pipe';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
