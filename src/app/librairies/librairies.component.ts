import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-librairies',
  templateUrl: './librairies.component.html',
  styleUrls: ['./librairies.component.scss']
})
export class LibrairiesComponent implements OnInit {
  page = document.querySelector("#content");
  rippleColor:string = 'rgba(255,255,255, 0.3)';
  unity:any =  "../../assets/images/unity.jpg";
  babylon:any =  "../../assets/images/babylon.jpg";
  three:any =  "../../assets/images/three.jpg";
  constructor(private router: Router) { }

  ngOnInit(): void {}
  goNextPage(){
    this.router.navigate(['/enjeux']);
    this.page?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goPreviousPage(){
    this.router.navigate(['/code']);
    this.page?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
