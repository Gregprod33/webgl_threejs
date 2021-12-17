import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PreviousRouteServiceService {
  private prev!: string;
  private curr!: string;
  public currentUrl: string;
  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {        
        this.prev = this.curr;
        this.curr = event.url;
      };
    });
  }
  public getPreviousUrl() {
    return this.prev;
  } 
  public redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
}
