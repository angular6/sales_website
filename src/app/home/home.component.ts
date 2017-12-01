import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    isLarge: any
  startLoad: any

  constructor() {}

  checkIfScreenWidthIsLarge(event ? ) {
    this.isLarge = window.innerWidth > 992
  }

  ngOnInit() {
    this.checkIfScreenWidthIsLarge()
    setTimeout(() => { this.startLoad = 1 }, 0)
  }
}
