import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject} from 'rxjs';
import { ContextML } from '../ContextML/ContextML';

@Injectable({
  providedIn: 'root'
})
export class ContextChangeService {
  public CTXObserver: Subject<ContextML>;
  public ctx: ContextML;
  constructor() {
    this.CTXObserver = new BehaviorSubject<ContextML>(new ContextML());
    this.ctx = new ContextML;
    this.CTXObserver.next(this.ctx);
    this.CTXObserver.subscribe(val => this.ctx = val);
  }
  public setAndSubmit(func) {
    this.CTXObserver.next(func(this.ctx));
  }
}
