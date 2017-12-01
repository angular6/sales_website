import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { ShopService } from '../shop.service'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/* beautify preserve:start */declare var $: any;/* beautify preserve:end */

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  special_product_listing: any = false
  theNameOfTheSubcategoryOfThisProduct: any
  product_object: any
  id: any
  item: any
  loadingGifIsRequired: any = 1
  modal_type: any
  extras: any = []
  waitOver: any = 0
  callNow: any
  specialURL:any

  constructor(
    private activatedRoute: ActivatedRoute,
    private shopService: ShopService,
    private db: AngularFireDatabase
  ) {

    this.callNow = this.shopService.callNow
    this.specialURL = this.shopService.specialURL


    //$(document).ready(() => { alert("jkskjdsjksdkj") })
    this.set_the_product_id()
    this.set_product_object()
    this.set_firebase_object()
    this.set_theNameOfTheSubcategoryOfThisProduct()
    setTimeout(() => { this.waitOver = 1 }, 300)
  }

  set_the_product_id = () => {
    this.activatedRoute.params.subscribe(v => { this.id = v.param }); /*kevin*/
    if (this.id == 82) { this.special_product_listing = true }
  }

  set_product_object = () => { this.product_object = this.shopService.getProducts()[this.id - 1] }

  set_firebase_object = () => {
    this.item = this.db.object('/id' + this.id)
    this.item.subscribe(x => {
      for (var i = 0; i < 7; i++) {
        if (x['extra' + i] != "" && x['extra' + i] != undefined)
          this.extras.push(x['extra' + i])
      }
      this.loadingGifIsRequired = 0
    })
  }

  set_theNameOfTheSubcategoryOfThisProduct = () => {
    this.theNameOfTheSubcategoryOfThisProduct = this.shopService.getSubcategories()[this.product_object['sc'] - 1].name
  }

}
