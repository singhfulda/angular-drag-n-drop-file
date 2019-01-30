import { Directive, HostListener, HostBinding, EventEmitter, Output } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {

  @HostBinding('style.background') private background = '#eee';

  @Output() private filesChangeEmiter: EventEmitter<File> = new EventEmitter();
  private allowed_extensions: Array<string> = ['png', 'jpg', 'bmp', 'gif'];
  private picture: any;

  // The rest of the code with @HostBinding and @HostListeners ...
  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const files = evt.dataTransfer.files;
    this.background = '#999';
    if(files.length > 0) {
      // do some stuff here
      console.log('event fired');
    }
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    //do some stuff
    this.background = '#eee';
  }

  @HostListener('drop', ['$event']) public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
     // emit only first file which passes extensions test
      this.background = '#eee';
      for(let count = 0; count < files.length; count++) {
        let valid_counter = 0;
        const ext = (files[count].name.split('.')[files[count].name.split('.').length - 1]).toLowerCase();
        if (this.allowed_extensions.lastIndexOf(ext) != -1 && valid_counter < 1 ) {
          // Read file into Url
          const reader: FileReader =  new FileReader();
          reader.addEventListener('load', () => {
              this.picture = reader.result;
              console.log(this.picture);
              this.filesChangeEmiter.emit(this.picture);
          }, false);

              reader.readAsDataURL(files[count]);

              valid_counter++;
        }
      }


    }
  }

}
