import {Component, EventEmitter, Input, Output} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {HighlightDirective} from "../../directives/highlight.directive";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    JsonPipe,
    HighlightDirective,
    FormsModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  readonly users: any[] = [
    {
      id: 1,
      firstName: 'First',
      lastName: 'Last',
    },
  ];

  readonly userAge = 20;

  maxAge: number = 20;

  @Input({required: true})
  caption!: string;

  @Output()
  userSelected = new EventEmitter<void>();

  onClick(): void {
    this.maxAge = 100;
    this.userSelected.emit();
  }
}
