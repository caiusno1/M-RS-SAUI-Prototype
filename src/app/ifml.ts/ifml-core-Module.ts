
/** Generated Code
* emf ecore to TypeScript
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { InteractionFlowModelElement } from './ifml-core-InteractionFlowModelElement';
import { Port } from './ifml-core-Port';

export class Module extends InteractionFlowModelElement {
  constructor() {
  super();
  }
  public eClass: string;
  public $ref: string;
  
  // Type: #/ifml/core/Port
  public inputPorts: Port[];

  // Type: #/ifml/core/Port
  public outputPorts: Port[];

  // Type: #/ifml/core/InteractionFlowModelElement
  public interactionFlowModelElements: InteractionFlowModelElement[];

}
    