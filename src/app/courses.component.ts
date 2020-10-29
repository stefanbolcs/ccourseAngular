import { CoursesService } from './course/courses.service';

import { Component } from '@angular/core';

@Component({
  selector: 'courses', //<courses>
  template: `
    <button class="btn btn-primary">SAVE</button>
  `,
})
export class CoursesComponent {
  colSpan = 2;
  imageUrl = 'https://picsum.photos/200/300';
}
