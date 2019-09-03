import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropBindComponent } from './prop-bind/prop-bind.component';
import { ClassBindComponent } from './class-bind/class-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    PropBindComponent,
    ClassBindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
