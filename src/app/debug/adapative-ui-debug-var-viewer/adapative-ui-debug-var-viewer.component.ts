import { TGGRule } from './../../../../TriGGEngine/Examples/TGGExample1/projects/trigg-engine/src/lib/TGGModels/TGGRule';
import { ContextML } from './../../ContextML/ContextML';
import { ContextChangeService } from 'src/app/Adaptive-UI-Services/context-change.service';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AdaptiveUIModelService } from 'src/app/Adaptive-UI-Services/adaptive-uimodel.service';
import { TriggEngine } from 'TriGGEngine/Examples/TGGExample1/projects/trigg-engine/src/public_api';

@Component({
  selector: 'app-adapative-ui-debug-var-viewer',
  templateUrl: './adapative-ui-debug-var-viewer.component.html',
  styleUrls: ['./adapative-ui-debug-var-viewer.component.css']
})
export class AdapativeUIDebugVarViewerComponent implements OnInit {
  public context: Observable<ContextML>;
  public uimodel: Observable<string>;
  public adaptationRules: TGGRule[];
  constructor(ctxchaServ: ContextChangeService, uimdServ: AdaptiveUIModelService, private triggEngine: TriggEngine) {
    this.context = ctxchaServ.CTXObserver;
    this.uimodel = uimdServ.websiteModel.pipe<string>(map((dm) => {
      return JSON.stringify(dm);
    }
    ));
    this.adaptationRules = triggEngine.ruleSet;
  }

  ngOnInit() {
  }

}
