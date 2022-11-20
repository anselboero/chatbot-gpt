import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit { 
  videosRootPath = "../../assets/background/";
  videos = [
    this.videosRootPath + 'video_1.mp4',
    this.videosRootPath + 'video_2.mp4',
    this.videosRootPath + 'video_3.mp4',
    this.videosRootPath + 'video_4.mp4'
  ];
  currentVideo!: string;
  changeBackgroundCounter = 0;

  
  constructor() {
   }

  ngOnInit(): void {
    this.currentVideo = this.videos[0];
    setInterval(() => {
      this.changeBackgroundCounter=(this.changeBackgroundCounter+1)%this.videos.length;
      this.currentVideo = this.videos[this.changeBackgroundCounter];
    },7000
    );
  }

}
