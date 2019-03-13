import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Mrivaldo-TI2B';
  courses=[1,2];

  viewMode='map';

  coursesFor=[
    {id:1,name:'courses1'},
    {id:2,name:'courses2'},
    {id:3,name:'courses3'},
    {id:4,name:'courses4'},
    {id:5,name:'courses5'},
  ]

  onAdd(){
    this.coursesFor.push({id:6,name:'courses6'});
  }

  onRemove(item){
    console.log(item);
    let index = this.coursesFor.indexOf(item);
    console.log(index);
    this.coursesFor.splice(index,1);
  }
  onChange(item){
    item.name='Update';
  }
  courseForOne;
  loadCourse(){
    this.courseForOne=[
      {id:1,nama:'courseone1'}, 
      {id:2,nama:'courseone2'},
      {id:3,nama:'courseone3'},
      {id:4,nama:'courseone4'},
      {id:5,nama:'courseone5'},
    ];
  }
}
