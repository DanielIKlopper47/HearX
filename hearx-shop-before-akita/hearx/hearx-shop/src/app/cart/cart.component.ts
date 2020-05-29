import { Component, OnInit, Input } from '@angular/core';
import { CART } from '../datasource/cart';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  myCart = false;

  constructor(
    private cart: CartService
  ) { }

  ngOnInit() {
  }

  printCart() {
    if (this.myCart == false) {
      this.myCart = true;
    } else if (this.myCart = true) {
      this.myCart = false;
    }
  }

}
