import { CoursesService } from './course/courses.service';

import { Component } from '@angular/core';

@Component({
  selector: 'courses', //<courses>
  template: `
    <button [style.backgroundColor]="isActive ? 'blue':'white'">SAVE</button>
  `,
})
export class CoursesComponent {
  isActive = false;
}
