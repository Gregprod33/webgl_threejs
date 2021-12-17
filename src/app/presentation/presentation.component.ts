import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit, AfterViewInit, Injectable  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PreviousRouteServiceService } from '../previous-route-service.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  reload: any = false;
  mySubscription: any;
  page = document.querySelector("#content");
  rippleColor:string = 'rgba(255,255,255, 0.3)';
  PresentationComponent: any;
  constructor(private router: Router, private previousRouteService : PreviousRouteServiceService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  
  
  goNextPage(){
    this.router.navigate(['/application']);
    this.page?.scrollTo({ top: 0, behavior: 'smooth' });
  }
 
  // ngOnInit()
  // {
  // this.interval = setInterval(() => {
  //   this.refresh();
  //   this.reload = true;
  // }, 2000);
  // }

  // ngOnDestroy(){
  // if(this.reload == true)
  //   clearInterval(this.interval);
  // }

  // refresh(){window.location.reload()}
  
  ngOnInit(): void {
     
  }

  
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  
}
