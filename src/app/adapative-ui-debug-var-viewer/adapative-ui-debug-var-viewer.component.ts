import { RuleEngineService } from './../rule-engine.service';
import { AdaptiveUIContainerComponent } from './../Adaptive-UI-Elements/adaptive-uicontainer/adaptive-uicontainer.component';
import { AdaptiveUielementbase } from './../Adaptive-UI-Elements/adaptive-uielementbase';
import { AdaptiveUIModelService } from './../adaptive-uimodel.service';
import { ContextChangeService } from './../context-change.service';
import { AdaptUiModelBase } from 'src/app/Adaptive-UI-DataModel/adapt-ui-model-base';
import { ContextModelContainer } from './../ContextModell/ContextModelContainer';
import { Component, OnInit, Input, ComponentRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map, last } from 'rxjs/operators';
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
      return dm.toJSON();
    }
    ));
    this.adaptationRules = reServ.ruleSet;
  }

  ngOnInit() {
  }

}
