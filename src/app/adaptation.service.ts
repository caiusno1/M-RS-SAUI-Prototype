import { ModelAddAdaptationVisitor } from './model-add-adaptation-visitor';
import { Adaptation, AdaptationKind } from './adaptation';
import { AdaptiveUIModelService } from './adaptive-uimodel.service';
import { AdapativeUIDebugVarViewerComponent } from './adapative-ui-debug-var-viewer/adapative-ui-debug-var-viewer.component';
import { AdaptUiModelBase } from './Adaptive-UI-DataModel/adapt-ui-model-base';
import { Injectable } from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';
import { StyleAdaptationVisitor } from './style-adaptation-visitor';

@Injectable({
  providedIn: 'root'
})
export class AdaptationService {
  constructor(private uimdServ: AdaptiveUIModelService) {}
  /*public execute(code: SafeStyle, type: number, targetModelElement: AdaptUiModelBase) {
    console.log('adaptation');
    targetModelElement.style = code;
    console.log('adaptation2');
  }*/
  public execute(adapt: Adaptation) {
    switch (adapt.kind) {
      case AdaptationKind.Style:
        // console.log('adaptation');
        const svisitor = new StyleAdaptationVisitor();
        svisitor._tags = adapt.targetTags;
        svisitor._style = adapt.params;
        svisitor.visit(this.uimdServ.model);
        // console.log('adaptation2');
        break;
      case AdaptationKind.Add:
        const avisitor = new ModelAddAdaptationVisitor();
        avisitor._tags = adapt.targetTags;
        avisitor._style = adapt.params[0];
        avisitor.AddType = adapt.params[1];
        avisitor.visit(this.uimdServ.model);
        break;
      case AdaptationKind.Add:
        const rvisitor = new ModelAddAdaptationVisitor();
        rvisitor._tags = adapt.targetTags;
        rvisitor._style = adapt.params[0];
        rvisitor.AddType = adapt.params[1];
        rvisitor.visit(this.uimdServ.model, null);
        break;
    }
    this.uimdServ.UIdataModel.next(this.uimdServ.model);
  }
}
