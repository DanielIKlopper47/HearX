import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { HearxStore, HearxState } from './hearx.store';

@Injectable({ providedIn: 'root' })
export class HearxQuery extends QueryEntity<HearxState> {

  constructor(protected store: HearxStore) {
    super(store);
  }

}
