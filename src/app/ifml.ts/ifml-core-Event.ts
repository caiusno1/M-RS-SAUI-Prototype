
/** Generated Code
* emf ecore to TypeScript
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { InteractionFlowElement } from './ifml-core-InteractionFlowElement';
import { ActivationExpression } from './ifml-core-ActivationExpression';
import { NavigationFlow } from './ifml-core-NavigationFlow';
import { InteractionFlowExpression } from './ifml-core-InteractionFlowExpression';

export class Event extends InteractionFlowElement {
  constructor() {
  super();
  }
  public eClass: string;
  public $ref: string;
  
  // Type: #/ifml/core/ActivationExpression
  public activationExpression: ActivationExpression;

  // Type: #/ifml/core/NavigationFlow
  public navigationFlows: NavigationFlow[];

  // Type: #/ifml/core/InteractionFlowExpression
  public interactionFlowExpression: InteractionFlowExpression;

}
    