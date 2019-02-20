import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'Belajar angular';
  Courses=[
    {id: 0, name: 'HTML'},
    {id: 2, name: 'PHP'},
    {id: 3, name: 'C#'},
    {id: 4, name: 'Java'},
    {id: 5, name: 'python'},
  ]
  getTitle(){
    return this.title;
  }

  constructor(){  }
  
  ngOnInit() {
  }

}
