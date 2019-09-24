import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
array = [];
  constructor() {
    this.array = ['../../assets/web-developer.jpg', '../../assets/imgnes/codigo.jpg', '../../assets/web.jpg '];
  }

  ngOnInit() {
  }

}
