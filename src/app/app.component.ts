import { Component } from '@angular/core';
import { RouterModule }   from '@angular/router';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/tasks">Tasks</a>
   </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'NG4 Todo';
}
