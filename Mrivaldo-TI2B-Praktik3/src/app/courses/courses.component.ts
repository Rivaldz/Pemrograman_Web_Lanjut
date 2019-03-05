import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'Belajar angular';
  Course;
  // Courses = [
  //   {id : 0, name : 'HTML'}, 
  //   {id : 1, name : 'PHP'},
  //   {id : 2, name : 'Angular'},
  //   {id : 3, name : 'C#'},        
  //   {id : 4, name : '.Net'}, 
  // ]
  // getTitle(){
  //   return this.title;
  // }

  constructor(private service:CoursesService) {
    this.Course=service.getCourses();
   }

  ngOnInit() {
  }

}
