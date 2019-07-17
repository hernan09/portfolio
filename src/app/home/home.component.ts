import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  show:Boolean = false

  constructor() {  }
  
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
