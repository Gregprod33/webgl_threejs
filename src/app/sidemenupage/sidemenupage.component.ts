import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenupage',
  templateUrl: './sidemenupage.component.html',
  styleUrls: ['./sidemenupage.component.scss']
})
export class SidemenupageComponent implements OnInit {
  page = document.querySelector("#content");
  public showContainer: boolean = false;
  constructor(public breakpointObserver: BreakpointObserver, private router: Router) { }
  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showContainer = true;
        } else {
          this.showContainer = false;
        }
      });
  }

  scrollUp(){
    this.page?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
