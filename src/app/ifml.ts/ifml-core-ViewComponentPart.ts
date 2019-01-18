
/** Generated Code
* emf ecore to TypeScript
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { InteractionFlowElement } from './ifml-core-InteractionFlowElement';
import { ViewElementEvent } from './ifml-core-ViewElementEvent';
import { ActivationExpression } from './ifml-core-ActivationExpression';
import { ViewComponentPart } from './ifml-core-ViewComponentPart';

export class ViewComponentPart extends InteractionFlowElement {
  constructor() {
  super();
  }
  public eClass: string;
  public $ref: string;
  
  // Type: #/ifml/core/ViewElementEvent
  public viewElementEvents: ViewElementEvent[];

  // Type: #/ifml/core/ActivationExpression
  public activationExpression: ActivationExpression;

  // Type: #/ifml/core/ViewComponentPart
  public subViewComponentParts: ViewComponentPart[];

  // Type: #/ifml/core/ViewComponentPart
  public parentViewComponentPart: ViewComponentPart;

}
    