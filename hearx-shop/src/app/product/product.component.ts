import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item, cartItem } from '../datasource/Items';
import { CartService } from '../cart/cart.service';
import { HearxService } from '../state/hearx.service';
import { HearxStore2 } from '../state/hearx.store';
import { resolve } from 'url';
import { HearxQuery, HearxQuery2 } from '../state/hearx.query';
import { StoreItem } from "../state/hearx.model"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  @Input() item: cartItem;
  @Output() plus = new EventEmitter<StoreItem>();
  select = false;
  buttonText = 'Add to Cart'
  quantity = 1
  currentID


  constructor(
    private cart: CartService,
    private hearxService: HearxService,
    private hearxStore2: HearxStore2,
    private hearxQuery: HearxQuery,
    private hearxQuery2: HearxQuery2
  ) { }

  ngOnInit() {
    // console.log(this.hearxStore2["storeValue"]["entities"]);
  }

  //refactor this
  async addToCart(item) {
    this.buttonText = 'loading'
    setTimeout(() => {
      this.select = true
    }, 1000);
    await new Promise(resolve => {
      this.hearxQuery2.selectCount().subscribe(res => {
        this.currentID = res + 1
        resolve()
      });
    });

    let cartItem = {
      id: this.currentID,
      product_id: item.id,
      price: item.price,
      quantity: this.quantity
    }

    this.hearxService.addCartItems(cartItem);
  }
  async add(item) {
    this.buttonText = 'loading'
    this.select = false;

    this.quantity += 1

    let thisID
    await new Promise(resolve => {
      this.hearxQuery2.selectAll().subscribe(res => {
        thisID = res.find(x => x.product_id == item.id)
        resolve()
      });
    });

    let cartItem = {
      id: thisID.id,
      product_id: item.id,
      price: item.price * this.quantity,
      quantity: this.quantity
    }

    this.hearxService.update(cartItem.id, cartItem)

    setTimeout(() => {
      this.select = true
    }, 1000)
  }

  async min(item) {
    this.buttonText = 'loading'
    this.select = false;
    this.quantity -= 1

    let thisID
    await new Promise(resolve => {
      this.hearxQuery2.selectAll().subscribe(res => {
        thisID = res.find(x => x.product_id == item.id)
        resolve()
      });
    });

    let cartItem = {
      id: thisID.id,
      product_id: item.id,
      price: item.price * this.quantity,
      quantity: this.quantity
    }

    setTimeout(() => {
      if (this.quantity < 1) {
        this.select = false
        this.quantity = 1
        this.buttonText = 'Add to Cart'
        this.hearxService.remove(cartItem.id)
      } else {
        this.select = true
        this.hearxService.update(cartItem.id, cartItem)
      }
    }, 1000)
  }

  // min() {
  //   this.buttonText = 'loading'
  //   this.select = false;
  //   setTimeout(() => {
  //     this.quantity -= 1
  //     if (this.quantity < 1) {
  //       this.select = false
  //       this.quantity = 1
  //       this.buttonText = 'Add to Cart'
  //       this.cart.removeFromCart(this.item.product_id)
  //     } else {
  //       this.select = true
  //       let item = {
  //         product_id: this.item.product_id,
  //         quantity: this.quantity, 
  //         price: 1 * this.item.price
  //       }
  //     this.hearxService.addCartItems(item)
  //     }
  //   }, 1000);
  // }


  // printCart() {
  //   console.log(this.printCart)
  // }

  //refactor this
}
