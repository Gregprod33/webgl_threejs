import { Component, OnInit } from '@angular/core';
import { Link } from 'src/Link';
import { LINKS } from 'src/mock-links';

@Component({
  selector: 'app-liens',
  templateUrl: './liens.component.html',
  styleUrls: ['./liens.component.scss']
})
export class LiensComponent implements OnInit {
  details = false;
  links:Link[] = [];
  edan1:any =  "../../assets/images/edan1.png"
  medusa:any =  "../../assets/images/medusa.png"
  constructor() { }

  ngOnInit(): void {
    this.links = LINKS;
  }

  toggleShowDetails() {
    this.details = !this.details;
  }

}
