import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  entryList = ['Shop', 'Su di noi', 'Carrello'];
  selectedPage2 : string = 'a';
  constructor() { }
  @Output() updatePage2  = new EventEmitter<string>;
  ngOnInit(): void {
  }
  updatePageInHome(value : string) {
    this.updatePage2.emit(value);
  }
}
