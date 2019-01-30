import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.less']
})
export class DragDropComponent implements OnInit {

  private file: File;
  private picture: any;

  constructor() { }

  ngOnInit() {
  }

  onFilesChange(file: File) {
    // do stuff here
    this.file = file;
    if (this.file) {
      console.log('got files in component' + file.name);

      // Read file into Url
      const reader: FileReader =  new FileReader();
      reader.addEventListener('load', () => {
          this.picture = reader.result;
          console.log(this.picture);
          }, false);

          reader.readAsDataURL(file);
    }
  }

}
