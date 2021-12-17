import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public showContainer: boolean = false;
  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showContainer = true;
        } else {
          this.showContainer = false;
        }
      });
  }


  constructor(public breakpointObserver: BreakpointObserver, private router:Router){}

  logo:any =  "../../assets/images/logo.png"

  goToRobot(){
    this.router.navigate(['/accueil'])
  .then(() => {
    window.location.reload();
  });
  }

}
