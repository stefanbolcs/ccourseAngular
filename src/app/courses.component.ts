import { CoursesService } from './course/courses.service';

import { Component } from '@angular/core';

@Component({
  selector: 'courses', //<courses>
  template: `
  <div (click)="onDivClicked()">
    <button (click)="onSave($event)"> Save </button>
    </div>
  `,
})
export class CoursesComponent {

  //this is event bubling
  onDivClicked(){
    console.log("diw as clicked")
  }
  onSave($event) {
    $event.stopPropagation();
    
    console.log("button was clicked",$event);
  }
}
