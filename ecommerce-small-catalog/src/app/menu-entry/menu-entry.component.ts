import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.css'],
  providers: [AppComponent]
})
export class MenuEntryComponent implements OnInit {
  @Input()
  entryName?: string;
  isSelected: boolean = false;
  dropDownMenu: string[] = [];
  constructor() {
  }
  @Output() updatePage = new EventEmitter<string>;
  ngOnInit(): void {
    for (let i = 0; i < 4; i++) {
      console.log('test ' + i + this.entryName);
      if (this.entryName) this.dropDownMenu[i] = this.entryName + i;
      console.log(this.dropDownMenu);
    }
  }
  selectEntry(): void {
    console.log('test');
    this.isSelected = !this.isSelected;
    let currPage = this.entryName ? this.entryName : 'error';
    this.updatePage.emit(currPage);
  }
}
