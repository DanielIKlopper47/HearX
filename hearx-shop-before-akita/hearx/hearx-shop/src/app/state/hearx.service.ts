import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Hearx } from './hearx.model';
import { HearxStore } from './hearx.store';

@Injectable({ providedIn: 'root' })
export class HearxService {

  constructor(private hearxStore: HearxStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Hearx[]>('https://api.com').pipe(tap(entities => {
      this.hearxStore.set(entities);
    }));
  }

  add(hearx: Hearx) {
    this.hearxStore.add(hearx);
  }

  update(id, hearx: Partial<Hearx>) {
    this.hearxStore.update(id, hearx);
  }

  remove(id: ID) {
    this.hearxStore.remove(id);
  }

}
