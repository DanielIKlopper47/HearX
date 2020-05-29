import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Hearx, StoreItem } from './hearx.model';

export interface HearxState extends EntityState<Hearx> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'hearx' })
export class HearxStore extends EntityStore<HearxState> {

  constructor() {
    super();
  }

}

export interface StoreItemState extends EntityState<StoreItem> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'store' })
export class HearxStore2 extends EntityStore<StoreItemState> {

  constructor() {
    super();
  }

}
