import { CoursesService } from './course/courses.service';

import { Component } from '@angular/core';

@Component({
  selector: 'courses', //<courses>
  template: `
    <button class="btn btn-primary" [class.active]="isActive">SAVE</button>
  `,
})
export class CoursesComponent {
  isActive = true;
}
