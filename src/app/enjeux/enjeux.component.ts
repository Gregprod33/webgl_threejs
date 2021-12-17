import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enjeux',
  templateUrl: './enjeux.component.html',
  styleUrls: ['./enjeux.component.scss']
})
export class EnjeuxComponent implements OnInit {
  page = document.querySelector("#content");
  rippleColor:string = 'rgba(255,255,255, 0.3)';
  custom:any =  "../../assets/images/custom.jpg";
  globe:any =  "../../assets/images/globe.png";
  constructor(private router: Router) { }

  ngOnInit(): void {}

  goPreviousPage(){
    this.router.navigate(['/librairies']);
    this.page?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
