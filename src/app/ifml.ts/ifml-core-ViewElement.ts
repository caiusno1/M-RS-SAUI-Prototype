
/** Generated Code
* emf ecore to TypeScript
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { InteractionFlowElement } from './ifml-core-InteractionFlowElement';
import { ViewElementEvent } from './ifml-core-ViewElementEvent';
import { ActivationExpression } from './ifml-core-ActivationExpression';
import { ViewContainer } from './ifml-core-ViewContainer';

export class ViewElement extends InteractionFlowElement {
  constructor() {
  super();
  }
  public eClass: string;
  public $ref: string;
  
  // Type: #/ifml/core/ViewElementEvent
  public viewElementEvents: ViewElementEvent[];

  // Type: #/ifml/core/ActivationExpression
  public activationExpression: ActivationExpression;

  // Type: #/ifml/core/ViewContainer
  public viewContainer: ViewContainer;

}
    