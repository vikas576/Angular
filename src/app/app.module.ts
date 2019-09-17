import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropBindComponent } from './prop-bind/prop-bind.component';
import { ClassBindComponent } from './class-bind/class-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { TempltRefVaribleComponent } from './templt-ref-varible/templt-ref-varible.component';
import { NgifelseComponent } from './ngifelse/ngifelse.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { BasicAssignment3Component } from './basic-assignment3/basic-assignment3.component';

@NgModule({
  declarations: [
    AppComponent,
    PropBindComponent,
    ClassBindComponent,
    EventBindComponent,
    TempltRefVaribleComponent,
    NgifelseComponent,
    NgswitchComponent,
    NgforComponent,
    BasicAssignment3Component
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
