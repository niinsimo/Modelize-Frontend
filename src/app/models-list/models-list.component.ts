import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss']
})
export class ModelsListComponent implements OnInit {
  imageCollection = [];

  constructor() { 
    for (let i = 0; i < 9; i++) {
      //const url = 'http://via.placeholder.com/400x300?text=Image No ' + (i + 1);
      const images = ['https://cdn.dribbble.com/users/673247/screenshots/2500770/atom.gif', 'https://i.giphy.com/media/rVz1J8spLtUtO/giphy.webp', 
      'https://media.giphy.com/media/PZ2XgGsn4n49q/giphy.gif', 'https://media.giphy.com/media/OGdWZnVzRP1IY/giphy.gif',
      'https://media.giphy.com/media/tqxqW5F4RtdWo/giphy.gif', 'https://media.giphy.com/media/87dO7wL8mTYzK/giphy.gif',
      'https://media.giphy.com/media/11i03wSzIuNXiw/giphy.gif', 'https://media2.giphy.com/media/Ufvzy251HTbQA/giphy.gif?cid=790b76115d10f90b595571425986180c&rid=giphy.gif',
      'https://media3.giphy.com/media/ZFiNY3IDiP9UA/giphy.gif?cid=790b76115d10f900746e7579551a5478&rid=giphy.gif'];

      this.imageCollection[i] = {
        url: images[i],
        show: false
      };
    }
  }

  ngOnInit() {
  }

}
