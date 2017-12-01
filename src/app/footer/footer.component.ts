import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerText1: any
  footerText2: any
  footerText3: any

  constructor(
    private shopService: ShopService
  ) {

    this.footerText1 = this.shopService.footerText1
    this.footerText2 = this.shopService.footerText2
    this.footerText3 = this.shopService.footerText3
  }

  ngOnInit() {}

}
