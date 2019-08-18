import { Component, OnInit } from '@angular/core';
// estyo me sirve para hacer enrutado ancla con animacion en los links
import * as smoothscroll from "smoothscroll-polyfill";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgsRevealConfig } from 'ng-scrollreveal';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  jquery: any;
  aboutMostrar: boolean = false;
  horario = Date.now();
  email: any;
  texto: any;
  user: FormGroup;
  show2: boolean = true;
  links = [
    {"link": "https://github.com/hernan09/React-App-ShowVideo","name":"Wow Videos","frame":"React.js"},
    {"link": "https://github.com/hernan09/ionic-animal","name":"sonidos de animales","frame":"Ionic"},
    {"link": "https://github.com/hernan09/vanila-static","name":"videojuego","frame":"JS Vanilla"},
    {"link": "https://github.com/hernan09/CDT-app","name":"pagina de noticias","frame":"React.js"},
    {"link": "https://github.com/hernan09/MapZero","name":"App con Google map","frame":"Angular && Ionic"}
     ]

    frames = [
      {"name": "Angular.js","img":"http://localhost:4200/assets/imgnes/angular.png"},
      {"name": "React.js","img":"http://localhost:4200/assets/imgnes/react.png"},
      {"name": ".NET","img":"http://localhost:4200/assets/imgnes/net.png"},
      {"name": "HTML 5","img":"http://localhost:4200/assets/imgnes/html.png"},
      {"name": "CSS3","img":"http://localhost:4200/assets/imgnes/css.png"},
      {"name": "JavaScript","img":"http://localhost:4200/assets/imgnes/js.png"},
      {"name": "GIT","img":"http://localhost:4200/assets/imgnes/git.png"},
      {"name": "Node.js","img":"http://localhost:4200/assets/imgnes/node.png"},
      {"name": "Vue.js","img":"http://localhost:4200/assets/imgnes/vue.png"},
      {"name": "Mongo Db","img":"http://localhost:4200/assets/imgnes/mongo.png"},
      {"name": "SQL","img":"http://localhost:4200/assets/imgnes/sql.png"},
      {"name": "Jquery","img":"http://localhost:4200/assets/imgnes/jquery.png"},
      {"name": "IONIC","img":"http://localhost:4200/assets/imgnes/ionic.png"},
      {"name": "Bootstrap","img":"http://localhost:4200/assets/imgnes/bootstrap.jpg"}
      ];

  show: boolean = false;


  constructor( private config: NgsRevealConfig , public http: HttpClient) {
      //se generan variables por el formGroup y cada nombre de input "formcontrolname" se instancian con su formcontrol y luego se validan con el validators (campo vacio y minimo de 2 letras en este caso)
      this.user = new FormGroup({
       email: new FormControl('', [Validators.required, Validators.minLength(4)]),
       texto: new FormControl('', Validators.required)
      });

      smoothscroll.polyfill();


      config.duration = 1000;
      config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

      setInterval(() => {console.log(this.horario), this.hora()}, 1000);
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

   const mailEnviado = this.user.value;
   console.log(mailEnviado);
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

}
