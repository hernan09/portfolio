import { Component, OnInit } from '@angular/core';
// estyo me sirve para hacer enrutado ancla con animacion en los links
import * as smoothscroll from "smoothscroll-polyfill";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgsRevealConfig } from 'ng-scrollreveal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import tippy from 'tippy.js'

 //


import * as $ from 'jquery';
import { error } from 'util';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ NgsRevealConfig ]
})
export class HomeComponent implements OnInit {
  gridStyle = {
    width: '25%',
    textAlign: 'center',
    margin: "auto"
  };


  jquery: any;
  load: boolean = false;
  aboutMostrar: boolean = false;
  horario = Date.now();
  email: any;
  texto: any;
  user: FormGroup;
  show2: boolean = true;
  mailStorages:string;
  links = [
    {"link": "https://github.com/hernan09/React-App-ShowVideo","name":"Wow Videos","frame":"React.js"},
    {"link": "https://github.com/hernan09/ionic-animal","name":"sonidos de animales","frame":"Ionic"},
    {"link": "https://github.com/hernan09/vanila-static","name":"videojuego","frame":"JS Vanilla"},
    {"link": "https://github.com/hernan09/CDT-app","name":"pagina de noticias","frame":"React.js"},
    {"link": "https://github.com/hernan09/MapZero","name":"App con Google map","frame":"Angular && Ionic"}
     ]

    frames = [
      {"id":1,"name": "Angular.js","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
      {"id":2,"name": "React.js","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
      {"id":3,"name": ".NET","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
      {"id":4,"name": "HTML 5","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
      {"id":5,"name": "CSS3","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
      {"id":6,"name": "JavaScript","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
      {"id":7,"name": "GIT","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
      {"id":8,"name": "Node.js","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
      {"id":9,"name": "Vue.js","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
      {"id":10,"name": "Mongo","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
      {"id":11,"name": "SQL","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
      {"id":12,"name": "Jquery","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
      {"id":13,"name": "IONIC","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
      {"id":14,"name": "Bootstrap","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
      {"id":15,"name": "Docker","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
      {"id":16,"name": "Typescript","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"}
      ];

  show: boolean = false;


  constructor( private config: NgsRevealConfig , public http: HttpClient) {
      this.mailStorages = localStorage.getItem('mailStorage');
      //se generan variables por el formGroup y cada nombre de input "formcontrolname" se instancian con su formcontrol y luego se validan con el validators (campo vacio y minimo de 2 letras en este caso)
      this.user = new FormGroup({
       email: new FormControl( this.mailStorages , [Validators.required, Validators.minLength(4)]),
       texto: new FormControl('', Validators.required)
      });

      smoothscroll.polyfill();

      config.duration = 1000;
      config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

      setInterval(() => {console.log(this.horario), this.hora(); }, 1000);
   }

  contact() {


    if (this.show === false) {
      this.show = true;

      setTimeout(() => this.show = false, 10000);
    } else {
      this.show = false;
    }
  }
  enviarmail() {
   this.load = true;
   const mailEnviado = this.user.value;
   console.log(mailEnviado);

    localStorage.setItem('mailStorage', mailEnviado.email);

   this.http.post('https://senmail.herokuapp.com/mailer', mailEnviado).subscribe(data => {
     console.log('data enviada', data);
     if (data) {
       this.load = false;
     }
   });
  }

  scrollToElement(destino): void {

    destino.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});

  }
  cambio(event) {
    console.log(event.target.value);
    if (event.target.value !== null) {
      this.show2 = false;
    } else if (event.target.value === null) {
      this.show2 = true;
    }
  }

  hora() {
    if (this.horario) {

      this.horario = Date.now();
    }
    return this.horario;
  }

  aboutmeshow() {
    if (this.aboutMostrar === false) {
      this.aboutMostrar = true;
    } else {
      this.aboutMostrar = false;
    }
  }
  showinfotec(name) {
    console.log( name );
  }
  ngOnInit() {
  }

  dandoMensaje(event) {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const second = date.getSeconds();

    console.log(hour + ':' + minutes + ':' + second);
    console.table(this.frames);
  }

}
