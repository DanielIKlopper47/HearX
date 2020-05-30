import { Component, OnInit, Input } from '@angular/core';
import { CART } from '../datasource/cart';
import { CartService } from './cart.service';
import { HearxService } from '../state/hearx.service';
import { HearxQuery, HearxQuery2 } from '../state/hearx.query';
import { HearxStore, HearxStore2 } from '../state/hearx.store';
import { Order } from '@datorama/akita';
import { Observable } from 'rxjs';
import { StoreItem } from "../state/hearx.model"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  myCart = false;

  constructor(
    private cart: CartService,
    private hearxService: HearxService,
    private hearxQuery2: HearxQuery2,
    private hearxStore2: HearxStore2
  ) { }

  public items$ = this.hearxQuery2.selectAll({ sortBy: "product_id", sortByOrder: Order.ASC }); //{ sortBy: "name", sortByOrder: Order.DESC }
  public loading$ = this.hearxQuery2.selectLoading();

  getItems() {
    this.hearxService.get()
  }

  ngOnInit() {
    this.getItems()
    console.log(this.items$)
  }

  printCart() {
    if (this.myCart == false) {
      this.myCart = true;
    } else if (this.myCart = true) {
      this.myCart = false;
    }
  }
}
