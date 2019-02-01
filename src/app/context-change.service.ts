import { ContextModelContainer } from './ContextModell/ContextModelContainer';
import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContextChangeService {
  public CTXObserver: Subject<ContextModelContainer>;
  public ctx: ContextModelContainer;
  constructor() {
    this.CTXObserver = new Subject<ContextModelContainer>();
    this.ctx = new ContextModelContainer;
    this.CTXObserver.next(this.ctx);
    this.CTXObserver.subscribe(val => this.ctx = val);
  }
  public setAndSubmit(func) {
    this.CTXObserver.next(func(this.ctx));
  }
}
