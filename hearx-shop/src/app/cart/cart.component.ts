import { Component, OnInit, Input } from '@angular/core';
import { CART } from '../datasource/cart';
import { CartService } from './cart.service';
import { HearxService } from '../state/hearx.service';
import { HearxQuery, HearxQuery2 } from '../state/hearx.query';
import { HearxStore, HearxStore2 } from '../state/hearx.store';
import { Order } from '@datorama/akita';
import { Observable, Subscription } from 'rxjs';
import { StoreItem } from "../state/hearx.model"
import { Items } from '../data/data';
import { resolve } from 'url';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  myCart = false;
  Items;

  constructor(
    private cart: CartService,
    private hearxService: HearxService,
    private hearxQuery2: HearxQuery2,
    private hearxStore2: HearxStore2
  ) { }

  public items$ = this.hearxQuery2.selectAll({ sortBy: "product_id", sortByOrder: Order.ASC }); //{ sortBy: "name", sortByOrder: Order.DESC }
  public loading$ = this.hearxQuery2.selectLoading();

  getItems() {
    this.hearxService.getCart()
  }

  async getCart(){
    await new Promise(resolve => {
      this.hearxQuery2.selectAll().subscribe(x => {
        this.Items = x
        resolve()
      })
    })
  }

  ngOnInit() {
    this.hearxService.getCart()
    this.getItems()

    setInterval(() => {
      this.getCart()
    }, 500)
    
  }

  getSum(Items) : number {
    let sum = 0;
    if (Items != undefined){
      for(let i = 0; i < Items.length; i++) {
        sum += Items[i]['price'];
      }
      return sum;
    }
    return 0
  }
}
