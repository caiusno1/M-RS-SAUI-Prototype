import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { AdaptiveUIModelService } from './adaptive-uimodel.service';
import { AdaptationService } from './adaptation.service';
import { Adaptation } from './adaptation';
import { Injectable } from '@angular/core';
declare var nools: any;
@Injectable({
  providedIn: 'root'
})
export class RuleEngineService {
  public flow: any;
  public session: any;
  public ruleSet: BehaviorSubject<any[]>;
  constructor(private adaptServ: AdaptationService, private modelServ: AdaptiveUIModelService) {
    this.flow = nools.flow('Adaption Flow');
    this.session = this.flow.getSession();
    this.ruleSet = new BehaviorSubject([]);
  }
  public addRule(name, premise, adaptation: Adaptation) {
    this.flow.rule(name, premise, () => {
      this.adaptServ.execute(adaptation);
    });
    this.session.dispose();
    this.session = this.flow.getSession();

    this.ruleSet.value.push({'name': name, 'premise': premise, 'adaptation': JSON.stringify(adaptation) });
    this.ruleSet.next(this.ruleSet.value);
  }
  public assert(fact) {
    this.session.assert(fact);
  }
  public match() {
    this.session.match();
  }
}
