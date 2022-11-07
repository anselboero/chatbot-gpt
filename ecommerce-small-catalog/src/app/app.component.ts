import { Component, Output } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-small-catalog';
  selectedPage: String = 'home';
  setCurrentPage(value: string) {
    this.selectedPage = value
    // = value.page};
  }
}
