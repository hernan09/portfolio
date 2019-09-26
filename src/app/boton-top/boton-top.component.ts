import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boton-top',
  templateUrl: './boton-top.component.html',
  styleUrls: ['./boton-top.component.css']
})
export class BotonTopComponent implements OnInit {

  frames = [
    {"name": "Angular.js","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
    {"name": "React.js","img":"https://cdn.worldvectorlogo.com/logos/react.svg"},
    {"name": ".NET","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
    {"name": "HTML 5","img":"https://cdn.worldvectorlogo.com/logos/html5.svg"},
    {"name": "CSS3","img":"https://cdn.worldvectorlogo.com/logos/css-3.svg"},
    {"name": "JavaScript","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
    {"name": "GIT","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
    {"name": "Node.js","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
    {"name": "Vue.js","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
    {"name": "Mongo Db","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
    {"name": "SQL","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
    {"name": "Jquery","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
    {"name": "IONIC","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"},
    {"name": "Bootstrap","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"}
    ];
    product;

  constructor(private route: ActivatedRoute) { 
    console.log(this.frames)
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = this.frames[params.get('id')];
    });
  }

}
