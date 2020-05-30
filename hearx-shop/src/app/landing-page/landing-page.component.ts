import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ITEMS } from '../datasource/Items';
import { HearxService } from '../state/hearx.service';
import { HearxQuery, HearxQuery2 } from '../state/hearx.query';
import { HearxStore } from '../state/hearx.store';
import { Order } from '@datorama/akita';
import { Observable } from 'rxjs';
import { StoreItem } from '../state/hearx.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  // items = ITEMS
  // items = [];
  // list
  // fltr = false
  shopName = `HearX`
  type;
  types = ['Names', 'Price']
  order;
  orders = ['ASC', 'DESC']
  open = false;



  constructor(
    private hearxService: HearxService,
    private hearxQuery: HearxQuery,
    private hearxQuery2: HearxQuery2,
    private hearxStore: HearxStore
  ) { }

  public items$ = this.hearxQuery.selectAll({ sortBy: "name", sortByOrder: Order.DESC });
  public loading$ = this.hearxQuery.selectLoading();

  public cartItems$ = this.hearxQuery2.selectAll({ sortBy: "product_id", sortByOrder: Order.ASC });
  public cartloading$ = this.hearxQuery2.selectLoading();

  getItems() {
    this.hearxService.get()
  }

  ngOnInit() {
    document.getElementById("cart").style.display = "none"
    this.getItems();
    this.type = "Names"
    this.order = "DESC"
  }

  ngAfterViewInit(){

  }

  openCart(){
    document.getElementById("cart").style.display = "block"
    this.open = true
  }
  closeCart(){
    document.getElementById("cart").style.display = "none"
    this.open = false
  }

  sort() {
    if (this.type == 'Price' && this.order == 'ASC') {
      this.items$ = this.hearxQuery.selectAll({ sortBy: "price", sortByOrder: Order.ASC });
    }
    if (this.type == 'Price' && this.order == 'DESC') {
      this.items$ = this.hearxQuery.selectAll({ sortBy: "price", sortByOrder: Order.DESC });
    }
    if (this.type == 'Names' && this.order == 'ASC') {
      this.items$ = this.hearxQuery.selectAll({ sortBy: "name", sortByOrder: Order.ASC });
    }
    if (this.type == 'Names' && this.order == 'DESC') {
      this.items$ = this.hearxQuery.selectAll({ sortBy: "name", sortByOrder: Order.DESC });
    }
  }
}
