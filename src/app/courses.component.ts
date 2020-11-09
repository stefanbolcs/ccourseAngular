import { CoursesService } from './course/courses.service';

import { Component } from '@angular/core';

@Component({
  selector: 'courses', //<courses>
  template: `
  {{ text | summary:10 }}
  

  `,
})
export class CoursesComponent {
  //custom pipes
  text=`
  lorem saim sos hdf ajnh bibm sad jusdds   asd ioua o sdfjh sdhij df d kjsd j j  i odkj fsj fh  osdksak jad `;
  
}
