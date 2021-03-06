import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input class="todo-input"
           #inputElementRef
           [value]="title"
           (keyup.enter)="submitValue($event.target.value)">

    <button class="btn"
            (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = null; // What the Text Box initially says

  constructor() { }

  ngOnInit() {

  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle); 
    if( this.title != null ){     //makes text box empty whenever you press save
      this.title = null;
    }  
    else{
      this.title = '';
    }
  }
  
}
