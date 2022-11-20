import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit { 
  imagesRootPath = "../../assets/background/";
  images = [
    this.imagesRootPath + 'img_1.jpg',
    this.imagesRootPath + 'img_2.jpg',
    this.imagesRootPath + 'img_3.jpg',
    this.imagesRootPath + 'img_4.jpg',
    this.imagesRootPath + 'video_1.gif'
  ];
  currentImage!: string;
  changeBackgroundCounter = 0;

  
  constructor() {
   }

  ngOnInit(): void {
    this.currentImage = this.images[0];
    setInterval(() => {
      this.changeBackgroundCounter=(this.changeBackgroundCounter+1)%this.images.length;
      this.currentImage = this.images[this.changeBackgroundCounter];
    },7000
    );
  }

}
