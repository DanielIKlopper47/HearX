import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Hearx } from './hearx.model';

export interface HearxState extends EntityState<Hearx> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'hearx' })
export class HearxStore extends EntityStore<HearxState> {

  constructor() {
    super();
  }

}
