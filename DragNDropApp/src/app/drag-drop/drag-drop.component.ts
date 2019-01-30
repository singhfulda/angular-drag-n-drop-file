import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.less']
})
export class DragDropComponent implements OnInit {

  private file: File;

  constructor() { }

  ngOnInit() {
  }

  onFilesChange(file: File) {
    // do stuff here
    this.file = file;
    if (this.file) {
      console.log("got files in component"+ file.name);
    }
  }

}
