import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
posts = [
  {
    title:"Neat Tree",
    username:"@Itsashish_yo",
    imageUrl:'assets/tree.jpeg',
    content:'A beautiful green and peaceful tree'
  },
  {
    title:"Snowy Mountain",
    username:"@Sunil",
    imageUrl:'assets/mountain.jpeg',
    content:'A wonderful snowy mountain!'
  },
  {
    title:"Biking",
    username:"@Praveen",
    imageUrl:'assets/biking.jpeg',
    content:'Drop the gear and disappear'
  }
]
}
