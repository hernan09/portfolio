import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'card',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent implements OnInit {
 mensaje: string;

@Input() name: string;
@Input() img: string;
@Input() id: number;
@Output() mostrar = new EventEmitter();
  constructor() {

   }

  ngOnInit() {
  }

  onPropagar() {
    this.mostrar.emit(this.mensaje);
  }


}
