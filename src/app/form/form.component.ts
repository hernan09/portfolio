import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'formComponent',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // tslint:disable-next-line: new-parens
  @Output()  mailer = new EventEmitter;
  user: FormGroup;
  mailStorages: string;
  email: any;
  texto: any;
  constructor() {
    this.mailStorages = localStorage.getItem('mailStorage');
    //se generan variables por el formGroup y cada nombre de input "formcontrolname" se instancian con su formcontrol y luego se validan con el validators (campo vacio y minimo de 2 letras en este caso)
    this.user = new FormGroup({
     email: new FormControl( this.mailStorages , [Validators.required, Validators.minLength(4)]),
     texto: new FormControl('', Validators.required)
    });
  }

  enviarmail() {
    this.mailer.emit(this.user);
    console.log('se emite el eventoo', this.user);
  }


  ngOnInit() {
  }

}
