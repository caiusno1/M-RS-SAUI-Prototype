import { Injectable } from '@angular/core';
import { Message } from './message';
declare var nools: any;
@Injectable({
  providedIn: 'root'
})
export class RuleEngineService {
  public flow: any;
  public session: any;
  constructor() {
    this.flow = nools.flow('Adaption Flow');
    this.session = this.flow.getSession();
  }
  public addRule(name, premise, callback) {
    this.flow.rule(name, premise, callback);
    this.session.dispose();
    this.session = this.flow.getSession();
  }
  public assert(fact) {
    this.session.assert(fact);
  }
  public match() {
    this.session.match();
  }
}
