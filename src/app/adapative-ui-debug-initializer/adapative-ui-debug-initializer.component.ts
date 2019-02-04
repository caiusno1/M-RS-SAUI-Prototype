import { Page } from './../AngularDSL/Page';
import { AdaptiveUIContainerComponent } from './../Adaptive-UI-Elements/adaptive-uicontainer/adaptive-uicontainer.component';
import { StyleAdaptationVisitor } from './../style-adaptation-visitor';
import { AdaptiveUIComponentReflectionService } from './../adaptive-uicomponent-reflection.service';
import { RuleEngineService } from './../rule-engine.service';
import { AdaptiveUIModelService } from './../adaptive-uimodel.service';
import { AppComponent } from './../app.component';
import { ContextChangeService } from './../context-change.service';
import { Component, OnInit, Input, Host } from '@angular/core';
import { AdaptUiModelBase } from '../Adaptive-UI-DataModel/adapt-ui-model-base';
import { AdaptiveUibuttonComponent } from '../Adaptive-UI-Elements/adaptive-uibutton/adaptive-uibutton.component';
import { Adaptation, AdaptationKind } from '../adaptation';
import { ContextModelContainer } from '../ContextModell/ContextModelContainer';
import { RoutingModel, AdaptiveRoute } from '../Adaptive-UI-DataModel/routing-model';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Button } from '../AngularDSL/Button';

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
    private reflectServ: AdaptiveUIComponentReflectionService,
    private router: Router) {
  }

  ngOnInit() {
  }
  public adaptUI() {
    this.ctxchaServ.ctx.userContext.blind = !this.ctxchaServ.ctx.userContext.blind;
    this.ctxchaServ.CTXObserver.next(this.ctxchaServ.ctx);
  }
  public initializeUIModel() {
    if (this.initOnlyOnce) {
      this.initOnlyOnce = false;
      //
      const initModel = this.uidmServ.websiteModel.getValue();
      initModel.pages = [];
      const initPage = new Page;
      initPage.elements = [];
      const b = new Button;
      initPage.elements.push(b);
      const secondPage = new Page;
      initModel.pages.push(initPage);
      initPage.tags = 'test';
      initModel.pages.push(secondPage);

      this.uidmServ.websiteModel.next(initModel);
      this.uidmServ.UIdataModel.next(initPage);
      const routes = new RoutingModel;
      routes.routes = [];
      routes.routes.push(new AdaptiveRoute('', initPage));
      routes.routes.push(new AdaptiveRoute('info', secondPage));
      this.uidmServ.routing.next(routes);


      /* Rule engine init*/
      this.ctxchaServ.CTXObserver.subscribe((ctx) => {
        this.ruleEngine.assert(ctx);
        this.ruleEngine.match(undefined);
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
      const btn = new Button();
      btn.tags = 'zed';
      btn.style = {'color': 'green' };
      adapt3.params = [{'model': btn}];
      adapt3.targetTags = ['test'];
      adapt3.kind = AdaptationKind.Add;
      const adapt4 = new Adaptation;
      adapt4.targetTags = ['zed'];
      adapt4.kind = AdaptationKind.Remove;
      this.ruleEngine.addRule('blindRule', [ContextModelContainer, 'ctx', 'ctx.userContext.blind'], adapt );
      this.ruleEngine.addRule('blindRule2', [ContextModelContainer, 'ctx', 'ctx.userContext.blind'], adapt3 );
      this.ruleEngine.addRule('noneblindRule', [ContextModelContainer, 'ctx', '!ctx.userContext.blind'], adapt2 );
      this.ruleEngine.addRule('noneblindRule2', [ContextModelContainer, 'ctx', '!ctx.userContext.blind'], adapt4 );
    }
  }
  public routeMe() {
    this.router.navigateByUrl('info');
  }
  public routeMeToDefault() {
    this.router.navigateByUrl('');
  }

}
