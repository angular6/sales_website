import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { ShopService } from '../shop.service'

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent {

  link: any;
  results: any[]
  input: any
  is_category_or_subcategory: any
  noResults: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private shopService: ShopService
  ) {
    this.activatedRoute.data.subscribe(x => { this.return_results(x.typeoflisting) })
  }

  get_search_results = () => { this.shopService.getFleets().subscribe(x => { this.input = x }) }

  return_results = (typeoflistings) => {

    if (typeoflistings == "search") {
      this.results = this.shopService.getProducts()
      this.is_category_or_subcategory = 0;
      this.link = "/dublin/product/"
    }

    if (typeoflistings == "s") {
      this.is_category_or_subcategory = 1
      this.activatedRoute.params.subscribe(data => {
        this.link = "/dublin/product/"
        this.results = this.shopService.getProducts().filter(current_object => { return current_object.sc == data.param })
      })
    }

    if (typeoflistings == "c") {
      this.is_category_or_subcategory = 1
      this.activatedRoute.params.subscribe(
        data => {
          this.link = "/dublin/subcategory/"
          this.results = this.shopService.getSubcategories().filter(current_object => { return current_object.parent == data.param })
        })
    }
  }

  ngDoCheck() { if (this.is_category_or_subcategory == 0) this.get_search_results() }

}
