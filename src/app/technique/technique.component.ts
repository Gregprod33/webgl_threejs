import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technique',
  templateUrl: './technique.component.html',
  styleUrls: ['./technique.component.scss']
})
export class TechniqueComponent implements OnInit {
  page = document.querySelector("#content");
  rippleColor:string = 'rgba(255,255,255, 0.3)';
  matricep:any =  "../../assets/images/matricep.jpeg";
  matricem:any =  "../../assets/images/matricem.jpeg";
  matricev:any =  "../../assets/images/matricev.jpeg";

  

  constructor(private router: Router) { }

  ngOnInit(): void {}

  goNextPage(){
    this.router.navigate(['/code']);
    this.page?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goPreviousPage(){
    this.router.navigate(['/principe']);
    this.page?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
