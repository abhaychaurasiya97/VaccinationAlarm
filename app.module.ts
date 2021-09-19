import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './mycomponent/todos/todos.component';
import { HelplineComponent } from './helpline/helpline.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HelplineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
