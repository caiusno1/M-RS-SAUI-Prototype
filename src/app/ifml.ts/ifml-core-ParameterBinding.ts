
/** Generated Code
* emf ecore to TypeScript
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { InteractionFlowModelElement } from './ifml-core-InteractionFlowModelElement';
import { Parameter } from './ifml-core-Parameter';

export class ParameterBinding extends InteractionFlowModelElement {
  constructor() {
  super();
  }
  public eClass: string;
  public $ref: string;
  
  // Type: #/ifml/core/Parameter
  public sourceParameter: Parameter;

  // Type: #/ifml/core/Parameter
  public targetParameter: Parameter;

}
    