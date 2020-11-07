import { CoursesService } from './course/courses.service';

import { Component } from '@angular/core';

@Component({
  selector: 'courses', //<courses>
  template: `
  
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

  `,
})
export class CoursesComponent {
  email="me@example.com";

  onKeyUp(){
   console.log(this.email);
  }
  
}
