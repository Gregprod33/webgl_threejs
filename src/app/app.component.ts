import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  currentUrl: any;
  title = 'webGL';
showMenu$: Observable<boolean> | undefined;
private defaultShowMenu = true;


constructor(
  private router: Router,
  private activatedRoute: ActivatedRoute,
  ){
    this.currentUrl = this.router.url;
    console.log(this.currentUrl);
    this.showMenu$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
        
      }),
      mergeMap(route => route.data),
      map(data => data.hasOwnProperty('showMenu') ? data['showMenu'] : this.defaultShowMenu),
      )
      
    }
  }
  