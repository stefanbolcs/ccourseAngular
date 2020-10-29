import { CoursesService } from './course/courses.service';

import { Component } from '@angular/core';

@Component({
  selector: 'courses', //<courses>
  template: `<h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul> `,
})
export class CoursesComponent {
  title = 'list of courses';
  courses=[];

  //constructor sees it has dependency, uses dependency injektion
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
