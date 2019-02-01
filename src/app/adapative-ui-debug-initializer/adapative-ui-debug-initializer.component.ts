import { StyleAdaptationVisitor } from './../style-adaptation-visitor';
import { AdaptiveUIComponentReflectionService } from './../adaptive-uicomponent-reflection.service';
import { RuleEngineService } from './../rule-engine.service';
import { AdaptiveUIModelService } from './../adaptive-uimodel.service';
import { AppComponent } from './../app.component';
import { ContextChangeService } from './../context-change.service';
import { Component, OnInit, Input, Host } from '@angular/core';
import { AdaptUiModelBase } from '../Adaptive-UI-DataModel/adapt-ui-model-base';
import { AdaptiveUibuttonComponent } from '../Adaptive-UI-Elements/adaptive-uibutton/adaptive-uibutton.component';
import { AdaptiveUIContainerComponent } from '../Adaptive-UI-Elements/adaptive-uicontainer/adaptive-uicontainer.component';
import { Adaptation, AdaptationKind } from '../adaptation';
import { ContextModelContainer } from '../ContextModell/ContextModelContainer';
import { Button } from 'protractor';

@Component({
  selector: 'app-adapative-ui-debug-initializer',
  templateUrl: './adapative-ui-debug-initializer.component.html',
  styleUrls: ['./adapative-ui-debug-initializer.component.css']
})
export class AdapativeUIDebugInitializerComponent implements OnInit {
  private app: AppComponent;
  private initOnlyOnce = true;
  constructor(private ctxchaServ: ContextChangeService,
    private uidmServ: AdaptiveUIModelService,
    private ruleEngine: RuleEngineService,
    private reflectServ: AdaptiveUIComponentReflectionService) {
  }

  ngOnInit() {
  }
  public adaptUI() {
    this.ctxchaServ.ctx.userContext.blind = !this.ctxchaServ.ctx.userContext.blind;
    this.ctxchaServ.CTXObserver.next(this.ctxchaServ.ctx);
    /*const button = new AdaptUiModelBase;
    button.Component = AdaptiveUibuttonComponent;
    button.children = null;
    this.uidmServ.model.children.push(button);*/
    this.uidmServ.UIdataModel.next(this.uidmServ.model);
  }
  public initializeUIModel() {
    if (this.initOnlyOnce) {
      this.initOnlyOnce = false;
      const UIdataModel = new AdaptUiModelBase;
      UIdataModel.tags = 'test';
      UIdataModel.Component = this.reflectServ.AdaptiveUIComponentDict['AdaptiveUIContainerComponent'];
      const button = new AdaptUiModelBase;
      button.Component = AdaptiveUibuttonComponent;
      button.children = null;
      UIdataModel.children = [button];
      this.uidmServ.UIdataModel.next(UIdataModel);
      /* Rule engine init*/
      this.ctxchaServ.CTXObserver.subscribe((ctx) => {
        this.ruleEngine.assert(ctx);
        this.ruleEngine.match();
      });
      const adapt = new Adaptation;
      adapt.params = {'background-color': 'blue'};
      adapt.kind = AdaptationKind.Style;
      adapt.targetTags = ['test'];
      const adapt2 = new Adaptation;
      adapt2.params = {'background-color': 'red'};
      adapt2.targetTags = ['test'];
      adapt2.kind = AdaptationKind.Style;
      const adapt3 = new Adaptation;
      adapt3.params = [{'color': 'green'}, {'type': 'AdaptiveUibuttonComponent'}];
      adapt3.targetTags = ['test'];
      adapt3.kind = AdaptationKind.Add;
      this.ruleEngine.addRule('blindRule', [ContextModelContainer, 'ctx', 'ctx.userContext.blind'], adapt );
      this.ruleEngine.addRule('blindRule2', [ContextModelContainer, 'ctx', 'ctx.userContext.blind'], adapt3 );
      this.ruleEngine.addRule('noneblindRule', [ContextModelContainer, 'ctx', '!ctx.userContext.blind'], adapt2 );

    }
  }

}
