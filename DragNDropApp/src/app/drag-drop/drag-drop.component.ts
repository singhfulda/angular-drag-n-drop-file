import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.less']
})
export class DragDropComponent implements OnInit {

  private picture: any;

  constructor() { }

  ngOnInit() {
  }

  onFilesChange(picture: any) {
    // do stuff here
    this.picture = picture;
    if (this.picture) {


    }
  }

}
