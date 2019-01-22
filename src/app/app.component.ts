import { RuleEngineService } from './rule-engine.service';
import { element } from 'protractor';
import { UserContext } from './ContextModell/user-context';
import { ContextModelContainer } from './ContextModell/ContextModelContainer';
import { AdaptUiModelBase } from './Adaptive-UI-DataModel/adapt-ui-model-base';
import { AdaptiveUIContainerComponent } from './Adaptive-UI-Elements/adaptive-uicontainer/adaptive-uicontainer.component';
import { Component, Input, SimpleChanges, OnChanges, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { AdaptiveUibuttonComponent } from './Adaptive-UI-Elements/adaptive-uibutton/adaptive-uibutton.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private _contextModel: ContextModelContainer;
  @Input() UIdataModel: AdaptUiModelBase;
  @Input() contextDataModel: ContextModelContainer;

  @ViewChild(AdaptiveUIContainerComponent) root: AdaptiveUIContainerComponent;
  constructor(private ruleEngine: RuleEngineService ) {

  }
  ngOnInit(): void {
    this.UIdataModel = new AdaptUiModelBase;
    this.UIdataModel.Component = AdaptiveUIContainerComponent;
    const button = new AdaptUiModelBase;
    button.Component = AdaptiveUibuttonComponent;
    button.children = null;
    this.UIdataModel.children = [button];
    this.root.model = this.UIdataModel;
    this.root.children = this.UIdataModel.children;
    this.contextDataModel = new ContextModelContainer;
    this.contextDataModel.contextChanged.subscribe((ctx) => {
      this.ruleEngine.assert(ctx);
      this.ruleEngine.match();
    });
    this.ruleEngine.addRule('blindRule', [ContextModelContainer, 'ctx', 'ctx.userContext._blind'], function(results) {
      button.isBlue = true;
      alert('rule uses');
    });
  }
  public adaptUI() {
    this.contextDataModel.userContext.blind = true;
    const button = new AdaptUiModelBase;
    button.Component = AdaptiveUibuttonComponent;
    button.children = null;
    button.isBlue = false;
    this.UIdataModel.children.push(button);
  }
}
