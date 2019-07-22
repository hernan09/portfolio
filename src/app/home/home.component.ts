import { Component, OnInit } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  links = [
    {"link":"https://github.com/hernan09/React-App-ShowVideo","name":"Wow Videos","frame":"React.js"},
    {"link":"https://github.com/hernan09/ionic-animal","name":"sonidos de animales","frame":"Ionic"},
    {"link":"https://github.com/hernan09/vanila-static","name":"videojuego","frame":"JS Vanilla"},
    {"link":"https://github.com/hernan09/CDT-app","name":"pagina de noticias","frame":"React.js"},
    {"link":"https://github.com/hernan09/MapZero","name":"App con Google map","frame":"Angular && Ionic"}
    

     ]
  

  show:Boolean = false

  constructor() { 
      this.links
    
   }
  
  contact(){

   
    if(this.show==false){
      this.show = true

      setTimeout(()=>this.show=false,10000)
    }else{
      this.show = false
    }
  }  
  
  

  ngOnInit() {
  }

}
