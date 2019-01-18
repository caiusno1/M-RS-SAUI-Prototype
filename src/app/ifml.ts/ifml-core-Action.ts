
/** Generated Code
* emf ecore to TypeScript
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { InteractionFlowElement } from './ifml-core-InteractionFlowElement';
import { ActionEvent } from './ifml-core-ActionEvent';
import { DynamicBehavior } from './ifml-core-DynamicBehavior';

export class Action extends InteractionFlowElement {
  constructor() {
  super();
  }
  public eClass: string;
  public $ref: string;
  
  // Type: #/ifml/core/ActionEvent
  public actionEvents: ActionEvent[];

  // Type: #/ifml/core/DynamicBehavior
  public dynamicBehavior: DynamicBehavior;

}
    