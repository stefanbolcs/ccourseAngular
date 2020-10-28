
import {Component} from '@angular/core';

@Component({
    selector:'courses', //<courses>
    template:'<h2>Courses{{"Title"+title}}</h2>'
})
export class CoursesComponent {
title="list of courses";
}