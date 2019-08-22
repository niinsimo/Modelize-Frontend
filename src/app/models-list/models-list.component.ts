import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss']
})
export class ModelsListComponent {

  images = [
  {"id" : "1", "url" :"../assets/paradox/screenshots/paradox.png"}, 
  {"id" : "2", "url" : "../assets/jupiter/screenshots/jupiter.png"}, 
  {"id" : "3", "url" : "../assets/pascoite/screenshots/pascoite.png"}, 
  {"id" : "4", "url" : "../assets/magnetvali/screenshots/magnetvali.png"},
  {"id" : "5", "url" : "https://media.giphy.com/media/tqxqW5F4RtdWo/giphy.gif"},
  {"id" : "6", "url" : "https://media.giphy.com/media/87dO7wL8mTYzK/giphy.gif"},
  {"id" : "7", "url" : "https://media.giphy.com/media/11i03wSzIuNXiw/giphy.gif"}, 
  {"id" : "8", "url" : "https://media2.giphy.com/media/Ufvzy251HTbQA/giphy.gif?cid=790b76115d10f90b595571425986180c&rid=giphy.gif"},
  {"id" : "9", "url" : "https://media3.giphy.com/media/ZFiNY3IDiP9UA/giphy.gif?cid=790b76115d10f900746e7579551a5478&rid=giphy.gif"}
];

  drop(event: CdkDragDrop<string[]>, imageUrl: String) {
    if (event.container.id === event.previousContainer.id) {
      // move inside same list
      moveItemInArray(this.images, event.previousIndex, event.currentIndex);
    } else {
      // move between lists
      console.log(imageUrl);
    }
  }

}
