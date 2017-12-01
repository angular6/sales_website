import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of';


export class ShopService {

  search: any = ""
  navText1: any = "The slogan goes here"
  callNow: any = "Call Now (555) 000 000"
  navText2: any = "Sales Website"
  footerText1: any = "742 Evergreen Terrace, Springfield"
  footerText2: any = "Fax: (555) 000 000"
  footerText3: any = "Copyright. All Rights Reserved"
  postTitle: any = " - my website - my slogan"
  name: any = "Website Name"
  specialURL: any = ""

  getFleets(): Observable < any > { return Observable.of(this.search) }

  getCategories(): any {
    return [
      { "id": 1, "name": "Category 1" },
      { "id": 2, "name": "Category 2" },
    ]
  }

  getSubcategories(): any {
    return [
      { "id": 1, "parent": 1, "name": "Sub Category 1" },
      { "id": 2, "parent": 1, "name": "Sub Category 2" },
      { "id": 3, "parent": 2, "name": "Sub Category 3" },
    ]
  }

  getProducts(): any {
    return [
      { "id": 1, "name": "ABC Product", "c": 1, "sc": 1 },
      { "id": 2, "name": "DEF Product", "c": 1, "sc": 1 },
      { "id": 3, "name": "GHI Product", "c": 1, "sc": 2 },
      { "id": 4, "name": "JKL Product", "c": 1, "sc": 2 },
      { "id": 5, "name": "MNO Product", "c": 2, "sc": 2 },
      { "id": 6, "name": "PQR Product", "c": 2, "sc": 3 },
      { "id": 7, "name": "STU Product", "c": 2, "sc": 3 },
    ]
  }

  getCategoryFromSubcategory(subcategory): any { return this.getSubcategories().filter(x => { return x.id == subcategory })[0].parent }
  getSubcategoryFromProduct(product): any { return this.getProducts().filter(x => { return x.id == product })[0].sc }

  getBreadcrumbCategoryObject(category_id): any {

    var object = this.getCategories().filter(current_object => { return current_object.id == category_id })[0]
    object.routerlink = '/dublin/category'
    return object

  }

  getBreadcrumbSubcategoryObject(subcategory_id): any {

    var object = this.getSubcategories().filter(current_object => { return current_object.id == subcategory_id })[0]
    object.routerlink = '/dublin/subcategory'
    return object

  }

  getBreadcrumbProductObject(product_id): any {

    var object = this.getProducts().filter(current_object => { return current_object.id == product_id })[0]
    object.routerlink = '/dublin/product'
    return object

  }

}
