import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-candy-home',
  templateUrl: './candy-home.component.html',
  styleUrls: ['./candy-home.component.scss']
})
export class CandyHomeComponent {

  @Input()
  path!: string;

  @Output() pathChange: EventEmitter<string> = new EventEmitter<string>();


  // quise hacer un metodo para cambiar el path, pero no tuve componente padre al que enviarle el path
  changePath(path: string) {
    this.path = path;
    this.pathChange.emit(this.path);
  }
}
