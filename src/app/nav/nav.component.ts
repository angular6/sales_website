import { Component } from '@angular/core';
import { ShopService } from '../shop.service'
import { Location } from '@angular/common'
import { Router, RoutesRecognized } from '@angular/router'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  categories: any
  hide_margin_under_breadcrumb: any
  page_is_search: any;
  change_location_path: any;
  bs: any
  search: any
  show_breadcrumb: any
  show_breadcrumb_2: any
  breadcrumb_array: any
  name: any
  category: any
  isSearch: any
  navText1: any
  navText2: any


  constructor(
    private shopService: ShopService,
    private location: Location,
    private router: Router,
    private title: Title

  ) {

    this.navText1 = this.shopService.navText1
    this.navText2 = this.shopService.navText2


    this.router.events.subscribe((x) => {

      if (x instanceof RoutesRecognized) {

        window.scrollTo(0, 0)
        var type = x.state.root.firstChild.data.typeoflisting == undefined ? 'home' : x.state.root.firstChild.data.typeoflisting
        var num = x.state.root.firstChild.params.param == undefined ? '' : x.state.root.firstChild.params.param

        this.breadcrumb_array = [];
        this.isSearch = 0
        this.show_breadcrumb = 1
        this.show_breadcrumb_2 = 1
        this.hide_margin_under_breadcrumb = 0

        if (type == "home") {
          this.category = undefined
          this.hide_margin_under_breadcrumb = 1
          this.show_breadcrumb = 0
          this.show_breadcrumb_2 = 0
          this.name = this.shopService.name
        }

        if (type == "search") {
          this.hide_margin_under_breadcrumb = 1
          this.isSearch = 1
          this.show_breadcrumb = 0
          this.show_breadcrumb_2 = 0
          this.name = "Search"
        }
        if (type == "c") {
          this.show_breadcrumb_2 = 0
          this.category = num
          this.breadcrumb_array = []
          this.name = this.shopService.getBreadcrumbCategoryObject(this.category).name
        }

        if (type == "s") {
          var subcategory = num
          this.category = this.shopService.getCategoryFromSubcategory(subcategory)
          this.breadcrumb_array = [
            this.shopService.getBreadcrumbCategoryObject(this.category),
          ]
          this.name = this.shopService.getBreadcrumbSubcategoryObject(subcategory).name
        }

        if (type == "_p") {
          this.search = ""
          var product = num
          var subcategory = this.shopService.getSubcategoryFromProduct(product)
          this.category = this.shopService.getCategoryFromSubcategory(subcategory)
          this.breadcrumb_array = [
            this.shopService.getBreadcrumbCategoryObject(this.category),
            this.shopService.getBreadcrumbSubcategoryObject(subcategory),
          ]
          this.name = this.shopService.getBreadcrumbProductObject(product).name
        }

        title.setTitle(this.name + this.shopService.postTitle)

      }
    })
    this.categories = this.shopService.getCategories()
    this.change_location_path = () => { this.router.navigate(['/dublin/search']) }
    this.bs = () => {
      this.router.navigate(['/dublin/search'])
      shopService.search = this.search
    }
  }

  ngDoCheck() {
    this.shopService.search = this.search
  }

}
