import { Component, OnInit } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import * as smoothscroll from "smoothscroll-polyfill";
import * as $ from 'jquery';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jquery:any
  aboutMostrar:boolean=false
  horario = Date.now()
  links = [
    {"link":"https://github.com/hernan09/React-App-ShowVideo","name":"Wow Videos","frame":"React.js"},
    {"link":"https://github.com/hernan09/ionic-animal","name":"sonidos de animales","frame":"Ionic"},
    {"link":"https://github.com/hernan09/vanila-static","name":"videojuego","frame":"JS Vanilla"},
    {"link":"https://github.com/hernan09/CDT-app","name":"pagina de noticias","frame":"React.js"},
    {"link":"https://github.com/hernan09/MapZero","name":"App con Google map","frame":"Angular && Ionic"}
     ]

    frames=[
      {"name":"Angular.js"},
      {"name":"React.js"},
      {"name":".NET"},
      {"name":"VB.NET"},
      {"name":"HTML 5"},
      {"name":"CSS3"},
      {"name":"JavaScript"},
      {"name":"GIT"},
      {"name":"Node.js"},
      {"name":"Vue.js"},
      {"name":"Mongo Db"},
      {"name":"SQL"},
      {"name":"Jquery"},
      {"name":"IONIC"},
      {"name":"Bootstrap"},
      {"name":"Scrum"}
      ] 
  

  show:Boolean = false

  constructor() { 
      smoothscroll.polyfill();
      this.links

      setInterval(()=>{console.log(this.horario),this.hora()},1000)
   }
  
  contact(){

   
    if(this.show==false){
      this.show = true

      setTimeout(()=>this.show=false,10000)
    }else{
      this.show = false
    }
  }  
  
  scrollToElement(destino): void {
   
    destino.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});

  }

  hora(){
    if(this.horario){
      
      this.horario = Date.now()
    }
    return this.horario
  }
  


  aboutmeshow(){

    if(this.aboutMostrar==false){
      this.aboutMostrar=true
    }else{
      this.aboutMostrar=false
    }
 
  }
  showinfotec(name){
    console.log(name)
  }
  ngOnInit() {
   
  }

}
