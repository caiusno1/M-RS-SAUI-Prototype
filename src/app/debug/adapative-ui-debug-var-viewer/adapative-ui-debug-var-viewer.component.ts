import { ContextChangeService } from 'src/app/Adaptive-UI-Services/context-change.service';
import { Component, OnInit } from '@angular/core';
import { ContextModelContainer } from 'src/app/ContextModell/ContextModelContainer';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AdaptiveUIModelService } from 'src/app/Adaptive-UI-Services/adaptive-uimodel.service';
import { RuleEngineService } from 'src/app/Adaptive-UI-Services/rule-engine.service';

@Component({
  selector: 'app-adapative-ui-debug-var-viewer',
  templateUrl: './adapative-ui-debug-var-viewer.component.html',
  styleUrls: ['./adapative-ui-debug-var-viewer.component.css']
})
export class AdapativeUIDebugVarViewerComponent implements OnInit {
  public context: Observable<ContextModelContainer>;
  public uimodel: Observable<string>;
  public adaptationRules: Observable<any[]>;
  constructor(ctxchaServ: ContextChangeService, uimdServ: AdaptiveUIModelService, reServ: RuleEngineService) {
    this.context = ctxchaServ.CTXObserver;
    this.uimodel = uimdServ.UIdataModel.pipe<string>(map((dm) => {
      /*return dm.toJSON();*/
      // JSON.stringify(dm);
      return null;
    }
    ));
    this.adaptationRules = reServ.ruleSet;
  }

  ngOnInit() {
  }

}
