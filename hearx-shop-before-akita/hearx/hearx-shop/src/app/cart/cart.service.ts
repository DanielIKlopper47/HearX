import { Injectable, Input  } from '@angular/core';
import { CART } from '../datasource/cart';

@Injectable ()
export class CartService {
    //  @Input() private cart: CART[];
     private cart = [];

    addToCart(id, qty, prc){
        this.cart.push({product_id: id, quantity: qty, price: prc})
    }
    manageCart(id, qty, prc){
        this.cart.find(x => x.product_id == id).quantity = qty;
        this.cart.find(x => x.product_id == id).price = prc;
    }
    removeFromCart(id){
        this.cart = this.cart.filter(x => x.product_id != id)
    }
    getCart(){
        return this.cart
    }

}