import { ModelRemoveAdaptationVisitor } from './model-remove-adaptation-visitor';
import { ModelAddAdaptationVisitor } from './model-add-adaptation-visitor';
import { Adaptation, AdaptationKind } from './adaptation';
import { AdaptiveUIModelService } from './adaptive-uimodel.service';
import { Injectable } from '@angular/core';
import { StyleAdaptationVisitor } from './style-adaptation-visitor';

@Injectable({
  providedIn: 'root'
})
export class AdaptationService {
  constructor(private uimdServ: AdaptiveUIModelService) {}
  public execute(adapt: Adaptation) {
    switch (adapt.kind) {
      case AdaptationKind.Style:
        // console.log('adaptation');
        const svisitor = new StyleAdaptationVisitor();
        svisitor._tags = adapt.targetTags;
        svisitor._style = adapt.params;
        for ( const page of this.uimdServ.websiteModel.getValue().pages) {
          svisitor.visit(page);
        }
        // svisitor.visit(this.uimdServ.model);
        // console.log('adaptation2');
        break;
      case AdaptationKind.Add:
        const avisitor = new ModelAddAdaptationVisitor();
        avisitor._tags = adapt.targetTags;
        avisitor.addModel = adapt.params[0].model;
        for ( const page of this.uimdServ.websiteModel.getValue().pages) {
          avisitor.visit(page);
        }
        // avisitor.visit(this.uimdServ.model);
        break;
      case AdaptationKind.Remove:
        const rvisitor = new ModelRemoveAdaptationVisitor();
        rvisitor._tags = adapt.targetTags;
        for ( const page of this.uimdServ.websiteModel.getValue().pages) {
          rvisitor.visit(page, null);
        }
        // rvisitor.visit(this.uimdServ.model, null);
        break;
    }
    this.uimdServ.UIdataModel.next(this.uimdServ.UIdataModel.getValue());
  }
}
