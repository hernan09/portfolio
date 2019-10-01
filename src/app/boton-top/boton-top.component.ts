import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boton-top',
  templateUrl: './boton-top.component.html',
  styleUrls: ['./boton-top.component.css']
})
export class BotonTopComponent implements OnInit {
 
  frames = [
    {"name": "Angular.js","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks"},
    {"name": "React.js","img":"https://cdn.worldvectorlogo.com/logos/react.svg","descripcion":"Amplia experiencia con este fantastico frameworks "},
    {"name": ".NET","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks"},
    {"name": "HTML 5","img":"https://cdn.worldvectorlogo.com/logos/html5.svg","descripcion":"Amplia experiencia con este fantastico frameworks "},
    {"name": "CSS3","img":"https://cdn.worldvectorlogo.com/logos/css-3.svg","descripcion":"Amplia experiencia con este fantastico frameworks "},
    {"name": "JavaScript","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks "},
    {"name": "GIT","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks "},
    {"name": "Node.js","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks "},
    {"name": "Vue.js","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks "},
    {"name": "Mongo Db","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks "},
    {"name": "SQL","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks "},
    {"name": "Jquery","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks"},
    {"name": "IONIC","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks "},
    {"name": "Bootstrap","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png","descripcion":"Amplia experiencia con este fantastico frameworks"}
    ];
    product;

  constructor(private route: ActivatedRoute) {
    console.log(this.frames);
   
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = this.frames[params.get('id')];
    });
  }

}
