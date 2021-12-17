import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  page = document.querySelector("#content");
  rippleColor:string = 'rgba(255,255,255, 0.3)';
  code1:any =  "../../assets/images/code1.jpg";
  code2:any =  "../../assets/images/code2.jpg";
  code3:any =  "../../assets/images/code3.jpg";
  code4:any =  "../../assets/images/code4.jpg";
  code5:any =  "../../assets/images/code5.jpg";
  code6:any =  "../../assets/images/code6.jpg";
  code7:any =  "../../assets/images/code7.jpg";
  code8:any =  "../../assets/images/code8.jpg";
  constructor(private router: Router) { }

  ngOnInit(): void {}

  goNextPage(){
    this.router.navigate(['/librairies']);
    this.page?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goPreviousPage(){
    this.router.navigate(['/technique']);
    this.page?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
