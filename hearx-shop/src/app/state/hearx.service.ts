import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ID } from '@datorama/akita';
import { HearxStore, HearxStore2 } from './hearx.store';
import { HearxQuery } from "./hearx.query"
import { tap, mapTo } from 'rxjs/operators';
import { Hearx, StoreItem } from './hearx.model';
import { timer } from "rxjs"
import { Items, CartItems } from "../data/data"

@Injectable({ providedIn: 'root' })
export class HearxService {

  constructor(
    private hearxStore: HearxStore, 
    private hearxQuery: HearxQuery, 
    private hearxStore2: HearxStore2, 
    private http: HttpClient
    ) { }


  get() {
    timer(1000).pipe(mapTo(Items)).subscribe(Items => {
      this.hearxStore.set(Items);
    })
  }

  getItems(){
    this.hearxStore.set(Items);
    return this.hearxStore["storeValue"]["entities"]
  }

  add(hearx: Hearx) {
    this.hearxStore.add(hearx);
  }
  addCartItems(item: StoreItem){
    this.hearxStore2.add(item);
  }

  update(id, item: Partial<StoreItem>) {
    this.hearxStore2.update(id, item);
  }

  remove(id: any) {
    this.hearxStore2.remove(id);
  }

}
