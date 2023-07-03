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
import { DirectivesdemoComponent } from './directivesdemo/directivesdemo.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PropbindingComponent,
    StylebindingComponent,
    TrvbindingComponent,
    TwowayComponent,
    DirectivesdemoComponent,
    ParentcomponentComponent,
    ChildcomponentComponent,
    PipesComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
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
