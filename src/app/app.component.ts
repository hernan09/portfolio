import { Component } from '@angular/core';
import { Router , Event , NavigationStart , NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  load = false;
  constructor( public router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        console.time('1');
              this.load = true;
              console.log('aca esta entrando al link', this.load);
      } else if (routerEvent instanceof NavigationEnd) {
        setTimeout(() => { this.load = false; } , 1000);
        console.timeEnd('1');
        console.log('aca termina de entrar al link', this.load);
      }
  });
  }
}
