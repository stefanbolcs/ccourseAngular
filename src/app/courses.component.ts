import { CoursesService } from './course/courses.service';

import { Component } from '@angular/core';

@Component({
  selector: 'courses', //<courses>
  template: `
  {{course.title | uppercase | lowercase}}<br />
  {{course.students | number}}<br />
  {{course.rating | number:'1.2-2'}}<br />
  {{course.price | currency:'AUD':true:'3.2-2'}} <br />
  {{course.releaseDate | date:'shortDate'}}
  

  `,
})
export class CoursesComponent {
  //pipes
  course = {
    title:"The complete angualr course",
    rating:4.9485,
    students:33333,
    price:196.47,
    releaseDate: new Date(2018,1,1)
  }
  
}
