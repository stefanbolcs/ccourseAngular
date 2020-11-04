import { CoursesService } from './course/courses.service';

import { Component } from '@angular/core';

@Component({
  selector: 'courses', //<courses>
  template: `
  <input #email (keyup.enter)="onKeyUp(email.value)" />
  `,
})
export class CoursesComponent {

  onKeyUp(email){
   console.log(email);
  }
  
}
