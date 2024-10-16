import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {UserListComponent} from "../user/components/user-list/user-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCheckboxModule,
    UserListComponent
  ]
})
export class AppComponent {
  title = 'test-app';

  onUserSelected() {
    //alert('test')
  }
}
