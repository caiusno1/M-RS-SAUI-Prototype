
/** Generated Code
* emf ecore to TypeScript
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { TemplaetableElement } from './ifml-core-NamedElement ifml-core-InteractionFlowModelElement -uml-TemplaetableElement';
import { Parameter } from './ifml-core-Parameter';
import { InteractionFlow } from './ifml-core-InteractionFlow';

export class InteractionFlowElement extends TemplaetableElement {
  constructor() {
  super();
  }
  public eClass: string;
  public $ref: string;
  
  // Type: #/ifml/core/Parameter
  public parameters: Parameter[];

  // Type: #/ifml/core/InteractionFlow
  public inInteractionFlows: InteractionFlow[];

  // Type: #/ifml/core/InteractionFlow
  public outInteractionFlows: InteractionFlow[];

}
    