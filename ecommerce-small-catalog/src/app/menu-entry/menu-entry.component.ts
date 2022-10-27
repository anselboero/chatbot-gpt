import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.css']
})
export class MenuEntryComponent implements OnInit {
  @Input() 
  entryName ?: string;
  isSelected :boolean = false;
  dropDownMenu : string[] = [];
  constructor() { 
  }

  ngOnInit(): void {
    for(let i = 0; i<4; i++) {
      console.log('test ' + i + this.entryName);
      if(this.entryName) this.dropDownMenu[i]=this.entryName+i;
      console.log(this.dropDownMenu);
    }
  }
  selectEntry() : void {
    console.log('test');
    this.isSelected = true;
  }
}
