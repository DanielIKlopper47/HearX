import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../datasource/Items';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  @Input() item: Item;
  select = false;
  buttonText = 'Add to Cart'
  quantity = 1
  


  constructor(
    private cart: CartService
  ) { }

  ngOnInit() {
  }

  //refactor this

  addToCart(){
    this.buttonText = 'loading'
    setTimeout(() => { 
      this.select = true
      this.cart.addToCart(this.item.id, 1, 1*this.item.price)
    }, 1000);
  }
  add(){
    this.buttonText = 'loading'
    this.select = false;
    setTimeout(() => { 
      this.quantity += 1
      this.select = true
      this.cart.manageCart(this.item.id, this.quantity, this.quantity*this.item.price)
    }, 1000);
  }
  min(){
    this.buttonText = 'loading'
    this.select = false;
    setTimeout(() => { 
      this.quantity -= 1
      if(this.quantity < 1){
        this.select = false
        this.quantity = 1
        this.buttonText = 'Add to Cart'
        this.cart.removeFromCart(this.item.id)
      } else {
        this.select = true
        this.cart.manageCart(this.item.id, this.quantity, this.quantity*this.item.price)
        
      }
    }, 1000);
  }
  printCart(){
    console.log(this.printCart)
  }

   //refactor this
}
