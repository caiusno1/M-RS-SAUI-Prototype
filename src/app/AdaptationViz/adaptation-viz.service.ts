import { Observable, BehaviorSubject} from 'rxjs';
import { RuleApplication } from './../../../TriGGEngine/Examples/TGGExample1/src/app/models/RuleApplication';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdaptationVizService {
  public activeAdaptations: RuleApplication[] = [];
  public blockedAdaptations: BehaviorSubject<Set<RuleApplication>> = new BehaviorSubject<Set<RuleApplication>>(new Set());
  public blockedAdaptionsPretty: Observable<any[]>;
  constructor() {
    this.blockedAdaptionsPretty = this.blockedAdaptations.pipe(map(((blockedApps: Set<RuleApplication>) => {
      let list = Array.from(blockedApps).map((blockedApp:any) => {
        let blockers = [];
        blockedApp.constraints.forEach(constraint => {
          constraint.blockedBy.forEach(blockingAPP => {
            blockers.push(blockingAPP);
          });
        });
        return {ruleName: blockedApp.ruleName, blockedBy: blockers};
      });
      console.log(list);
      return list;
    })));
  }
}
