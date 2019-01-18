
/** Generated Code
* emf ecore to TypeScript
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { InteractionFlowModelElement } from './ifml-core-InteractionFlowModelElement';
import { InteractionFlowElement } from './ifml-core-InteractionFlowElement';
import { ParameterBindingGroup } from './ifml-core-ParameterBindingGroup';

export class InteractionFlow extends InteractionFlowModelElement {
  constructor() {
  super();
  }
  public eClass: string;
  public $ref: string;
  
  // Type: #/ifml/core/InteractionFlowElement
  public srcInteractionFlowElement: InteractionFlowElement;

  // Type: #/ifml/core/InteractionFlowElement
  public trgtInteractionFlowElement: InteractionFlowElement;

  // Type: #/ifml/core/ParameterBindingGroup
  public parameterBindingGroup: ParameterBindingGroup;

}
    