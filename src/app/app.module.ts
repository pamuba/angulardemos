import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { PropbindingComponent } from './propbinding/propbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { TrvbindingComponent } from './trvbinding/trvbinding.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PropbindingComponent,
    StylebindingComponent,
    TrvbindingComponent,
    TwowayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
