import { AdaptUiModelBase } from './Adaptive-UI-DataModel/adapt-ui-model-base';
import { AdaptiveUIContainerComponent } from './Adaptive-UI-Elements/adaptive-uicontainer/adaptive-uicontainer.component';
import { Component, Input, SimpleChanges, OnChanges, ViewChild, OnInit } from '@angular/core';
import { AdaptiveUibuttonComponent } from './Adaptive-UI-Elements/adaptive-uibutton/adaptive-uibutton.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  @Input() dataModel: AdaptUiModelBase;
  @ViewChild(AdaptiveUIContainerComponent) root: AdaptiveUIContainerComponent;
  private lastValue;
  ngOnChanges(changes: SimpleChanges): void {
    const changedModel = changes.dataModel.currentValue;
    if (changedModel !== this.lastValue) {
      this.lastValue = changedModel;
      this.root.model = changedModel;
      this.root.children = changedModel.children;
    }
  }
  ngOnInit(): void {
    this.dataModel = new AdaptUiModelBase;
    this.dataModel.Component = AdaptiveUIContainerComponent;
    const button = new AdaptUiModelBase;
    button.Component = AdaptiveUibuttonComponent;
    button.children = null;
    this.dataModel.children = [button];
    this.root.model = this.dataModel;
    this.root.children = this.dataModel.children;
    // this.root.loadComponent();
  }
  public adaptUI() {
    const button = new AdaptUiModelBase;
    button.Component = AdaptiveUibuttonComponent;
    button.children = null;
    button.isBlue = true;
    this.dataModel.children.push(button);
  }
}
