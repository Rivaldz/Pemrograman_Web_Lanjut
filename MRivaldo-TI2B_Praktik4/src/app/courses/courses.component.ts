import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'Belajar angular';
  Courses;

  binding = 'property-binding';
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  isActive = true;


  // getTitle(){
  //   return this.title;
  // }
  nama = 'shintia';

  onSave($event){
    $event.stopPropagation();
    console.log("button sudah di klik",$event);
  }

  onKeyUp(){
    console.log(this.nama);
  }

  onDivClick($event){
    console.log("ini method div",$event);
  }

  constructor(private service:CoursesService){  
    this.Courses=service.getCourses();
  }
  
  ngOnInit() {
  }

}
