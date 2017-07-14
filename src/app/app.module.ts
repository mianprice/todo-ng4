import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskDetailComponent } from './task-detail.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TaskDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
