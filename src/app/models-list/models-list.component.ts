import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss']
})
export class ModelsListComponent {

  images = ['https://cdn.dribbble.com/users/673247/screenshots/2500770/atom.gif', 'https://i.giphy.com/media/rVz1J8spLtUtO/giphy.webp', 
  'https://media.giphy.com/media/PZ2XgGsn4n49q/giphy.gif', 'https://media.giphy.com/media/OGdWZnVzRP1IY/giphy.gif',
  'https://media.giphy.com/media/tqxqW5F4RtdWo/giphy.gif', 'https://media.giphy.com/media/87dO7wL8mTYzK/giphy.gif',
  'https://media.giphy.com/media/11i03wSzIuNXiw/giphy.gif', 'https://media2.giphy.com/media/Ufvzy251HTbQA/giphy.gif?cid=790b76115d10f90b595571425986180c&rid=giphy.gif',
  'https://media3.giphy.com/media/ZFiNY3IDiP9UA/giphy.gif?cid=790b76115d10f900746e7579551a5478&rid=giphy.gif'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.container.id === event.previousContainer.id) {
      // move inside same list
      moveItemInArray(this.images, event.previousIndex, event.currentIndex);
    } else {
      // move between lists
    }
  }

}
