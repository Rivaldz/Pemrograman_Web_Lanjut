import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(){
    return [
      {id: 0, name: 'HTML'},
      {id: 2, name: 'PHP'},
      {id: 3, name: 'C#'},
      {id: 4, name: 'Java'},
      {id: 5, name: 'python'}, 
  ];
  }
}
