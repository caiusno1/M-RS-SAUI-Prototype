
/** Generated Code
* emf ecore to TypeScript
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { NamedElement } from './ifml-core-NamedElement';
import { InteractionFlowModelElement } from './ifml-core-InteractionFlowModelElement';
import { Context } from './ifml-core-Context';

export class ViewPoint extends NamedElement {
  constructor() {
  super();
  }
  public eClass: string;
  public $ref: string;
  
  // Type: #/ifml/core/InteractionFlowModelElement
  public interactionFlowModelElements: InteractionFlowModelElement[];

  // Type: #/ifml/core/Context
  public context: Context;

}
    