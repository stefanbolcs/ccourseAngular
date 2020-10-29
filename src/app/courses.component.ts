import { CoursesService } from './course/courses.service';

import { Component } from '@angular/core';

@Component({
  selector: 'courses', //<courses>
  template: `<h2>{{ title }}</h2>
  
  <img [src]="imageUrl" />
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul> `,
})
export class CoursesComponent {
  title = 'list of courses';
  courses=[];
  imageUrl="https://picsum.photos/200/300"

  //constructor sees it has dependency, uses dependency injektion
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
