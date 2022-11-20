import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @HostBinding('class') cssClass = 'bg-img1'; 
  constructor() { }

  ngOnInit(): void {
  }

}
