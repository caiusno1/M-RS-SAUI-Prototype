import { Heading } from './../../AngularDSL/Heading';
import { ListLayout } from './../../AngularDSL/ListLayout';
import { GridLayout } from './../../AngularDSL/GridLayout';
import { CardLayout } from './../../AngularDSL/CardLayout';
import { ContextModelContainer } from './../../ContextModell/ContextModelContainer';
import { Button } from './../../AngularDSL/Button';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ContextChangeService } from 'src/app/Adaptive-UI-Services/context-change.service';
import { AdaptiveUIModelService } from 'src/app/Adaptive-UI-Services/adaptive-uimodel.service';
import { RuleEngineService } from 'src/app/Adaptive-UI-Services/rule-engine.service';
import { AdaptiveUIComponentReflectionService } from 'src/app/experimentation_area/adaptive-uicomponent-reflection.service';
import { Router } from '@angular/router';
import { RoutingModel, AdaptiveRoute } from 'src/app/Adaptive-UI-Routing/routing-model';
import { Page } from 'src/app/AngularDSL/Page';
import { Adaptation, AdaptationKind } from 'src/app/Adaptive-UI-Services/adaptation';

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
      const cl = new CardLayout;
      initPage.layout = cl;
      const header = new Heading;
      header.text = 'My Adaptive UI Prototype with a Model@Runtime approach';
      header.level = 1;
      initPage.elements.push(header);
      const b = new Button;
      initPage.elements.push(b);
      const b2 = new Button;
      initPage.elements.push(b2);
      const b3 = new Button;
      initPage.elements.push(b3);
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
        this.ruleEngine.assertMatchAndRetract(ctx);
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
