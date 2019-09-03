import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss']
})
export class ModelsListComponent{

  constructor(private _snackBar: MatSnackBar) {}

  images = [
  {"id" : "1", "url" :"../assets/paradox/screenshots/paradox.png", "subject": "Matemaatika", "heading": "Paradoks", "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco."}, 
  {"id" : "2", "url" : "../assets/jupiter/screenshots/jupiter.png", "subject": "Geograafia", "heading": "Jupiter", "description": "Duis aute irure dolor in reprehenderit in voluptate."}, 
  {"id" : "3", "url" : "../assets/pascoite/screenshots/pascoite.png", "subject": "Füüsika", "heading": "Pascoite", "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa."}, 

  {"id" : "4", "url" : "../assets/magnetvali/screenshots/magnetvali.png", "subject": "Füüsika", "heading": "Magnetväli", "description": "Qui officia deserunt mollit anim id est laborum."},
  {"id" : "5", "url" : "https://media.giphy.com/media/tqxqW5F4RtdWo/giphy.gif", "subject": "Bioloogia", "heading": "Süda", "description": "In nisl nisi scelerisque eu ultrices. Dapibus ultrices in iaculis nunc sed."},
  {"id" : "6", "url" : "https://media.giphy.com/media/87dO7wL8mTYzK/giphy.gif", "subject": "Bioloogia", "heading": "Verelibled", "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa."},
  {"id" : "7", "url" : "https://media.giphy.com/media/11i03wSzIuNXiw/giphy.gif", "subject": "Füüsika", "heading": "Pascoite", "description": "Nec feugiat nisl pretium fusce id velit. Aliquet eget sit amet tellus."}, 
  {"id" : "8", "url" : "https://media2.giphy.com/media/Ufvzy251HTbQA/giphy.gif?cid=790b76115d10f90b595571425986180c&rid=giphy.gif", "subject": "Füüsika", "heading": "Pascoite", "description": "Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Id semper risus."},
  {"id" : "9", "url" : "https://media3.giphy.com/media/ZFiNY3IDiP9UA/giphy.gif?cid=790b76115d10f900746e7579551a5478&rid=giphy.gif", "subject": "Füüsika", "heading": "Vereringe", "description": "Nunc aliquet bibendum enim facilisis gravida neque convallis a cras."}
];

  classes = [
    "Bioloogia 7", "Füüsika 8"
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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
  });
  }

}