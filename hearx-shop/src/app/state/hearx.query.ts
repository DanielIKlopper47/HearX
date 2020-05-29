import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { HearxStore, HearxState, StoreItemState, HearxStore2 } from './hearx.store';

@Injectable({ providedIn: 'root' })
export class HearxQuery extends QueryEntity<HearxState> {

  constructor(protected store: HearxStore) {
    super(store);
  }

}

@Injectable({ providedIn: 'root' })
export class HearxQuery2 extends QueryEntity<StoreItemState> {

  constructor(protected store: HearxStore2) {
    super(store);
  }

}
