import { Component, OnInit  } from '@angular/core';
import { ITEMS } from '../datasource/Items';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  items = ITEMS
  shopName = `HearX`
  fltr = false
  type;
  types = ['Names', 'Price']
  order;
  orders = ['ASC', 'DESC']




  constructor(

  ) { }

  ngOnInit() {
  }

  filter(){
    if(this.fltr == true){
      this.fltr = false
    } else {
      this.fltr = true
    }
  }
  sort(){
    if(this.type == 'Price' && this.order == 'ASC'){
      this.items.sort((a, b) => (a.price > b.price) ? 1 : -1)
    }
    if(this.type == 'Price' && this.order == 'DESC'){
      this.items.sort((a, b) => (a.price > b.price) ? -1 : 1)
    }
    if(this.type == 'Names' && this.order == 'ASC'){
      this.items.sort((a, b) => (a.name > b.name) ? 1 : -1)
    }
    if(this.type == 'Names' && this.order == 'DESC'){
      this.items.sort((a, b) => (a.name > b.name) ? -1 : 1)
    }
  }

}
