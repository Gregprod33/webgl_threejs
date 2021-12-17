import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-principe',
  templateUrl: './principe.component.html',
  styleUrls: ['./principe.component.scss'],
  template: `
  <canvas #canvas> width="300" height="100">
    Désolé, votre navigateur ne prend pas en charge canvas.
  </canvas>`
})
export class PrincipeComponent implements OnInit {
  page = document.querySelector("#content");
  rippleColor:string = 'rgba(255,255,255, 0.3)';
  principe:any =  "../../assets/images/principe.jpg"
  caniuse:any =  "../../assets/images/caniuse.jpg"

  @ViewChild('canvas', { static: true }) 
  canvas: ElementRef<HTMLCanvasElement>|any;

  ctx: CanvasRenderingContext2D|any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = 'orange';
    this.ctx.fillRect(10, 10, 100, 100);
  }

  goNextPage(){
    this.router.navigate(['/technique']);
    this.page?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goPreviousPage(){
    this.router.navigate(['/application']);
    this.page?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  animate(): void {}

}
