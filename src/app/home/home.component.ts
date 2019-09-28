import { Component, OnInit } from '@angular/core';
// estyo me sirve para hacer enrutado ancla con animacion en los links
import * as smoothscroll from 'smoothscroll-polyfill';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgsRevealConfig } from 'ng-scrollreveal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router , Event , NavigationStart, NavigationEnd} from '@angular/router';
import * as $ from 'jquery';
import { error } from 'util';
import { from } from 'rxjs';
import { IfStmt } from '@angular/compiler';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ NgsRevealConfig ]
})
export class HomeComponent implements OnInit {
  jquery: any;
  load: boolean = false;
  aboutMostrar: boolean = false;
  horario = Date.now();
  user: any;
  show2: boolean = true;
  alertCard: boolean = false ;
  links = [
    {"link": "https://github.com/hernan09/React-App-ShowVideo","name":"Wow Videos","frame":"React.js"},
    {"link": "https://github.com/hernan09/ionic-animal","name":"sonidos de animales","frame":"Ionic"},
    {"link": "https://github.com/hernan09/vanila-static","name":"videojuego","frame":"JS Vanilla"},
    {"link": "https://github.com/hernan09/CDT-app","name":"pagina de noticias","frame":"React.js"},
    {"link": "https://github.com/hernan09/MapZero","name":"App con Google map","frame":"Angular && Ionic"}
     ]

    frames = [
      {"name": "Angular.js","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks "},
      {"name": "React.js","img":"https://cdn.worldvectorlogo.com/logos/react.svg","descripcion":"Amplia experiencia con este fantastico frameworks "},
      {"name": ".NET","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
      {"name": "HTML 5","img":"https://cdn.worldvectorlogo.com/logos/html5.svg","descripcion":"Amplia experiencia con este fantastico frameworks "},
      {"name": "CSS3","img":"https://cdn.worldvectorlogo.com/logos/css-3.svg","descripcion":"Amplia experiencia con este fantastico frameworks "},
      {"name": "JavaScript","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks "},
      {"name": "GIT","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks "},
      {"name": "Node.js","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks "},
      {"name": "Vue.js","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks "},
      {"name": "Mongo Db","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks "},
      {"name": "SQL","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks "},
      {"name": "Jquery","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks "},
      {"name": "IONIC","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks "},
      {"name": "Bootstrap","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks "}
      ];

  show: boolean = false;


  constructor( private config: NgsRevealConfig , public http: HttpClient, public router: Router) {

      smoothscroll.polyfill();

      config.duration = 1000;
      config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

      setInterval(() => {console.log(this.horario), this.hora(); }, 1000);

      this.router.events.subscribe((routerEvent: Event) => {
          if (routerEvent instanceof NavigationStart) {
                  this.load = true;
          } else if (routerEvent instanceof NavigationEnd) {
                  this.load = false;
          }
      });
   }

  contact() {


    if (this.show === false) {
      this.show = true;

      setTimeout(() => this.show = false, 10000);
    } else {
      this.show = false;
    }
  }

   isValidEmail(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
  }

  ocultarAlerta() {
    setTimeout(() => {this.alertCard = false; }, 3000);
  }
  
  enviarmail(event) {
   this.load = true;
   const mailEnviado = event.value;
   console.log(mailEnviado);

    localStorage.setItem('mailStorage', mailEnviado.email);

   this.http.post('https://senmail.herokuapp.com/mailer', mailEnviado).subscribe(data => {
     console.log('data enviada', data);
     if (data) {
       this.load = false;
       this.alertCard = true;
       this.ocultarAlerta();
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
   /*
  aboutmeshow() {
    if (this.aboutMostrar === false) {
      this.aboutMostrar = true;
    } else {
      this.aboutMostrar = false;
    }
  }
  */
  showinfotec(name) {
    console.log( name );
  }
  ngOnInit() {
  }

}
