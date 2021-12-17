import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})

export class ApplicationComponent implements OnInit {

  rippleColor:string = 'rgba(255,255,255, 0.3)';
  constructor(private router: Router) { }
  page = document.querySelector("#content");
  ngOnInit(): void {}
  goNextPage(){
    this.router.navigate(['/principe']);
    this.page?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goPreviousPage(){
    this.router.navigate(['/presentation']);
    this.page?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
