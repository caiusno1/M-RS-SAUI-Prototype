
/** Generated Code
* emf ecore to TypeScript
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { NamedElement } from './ifml-core-InteractionFlowModelElement -uml-MultiplicityElement -uml-TypedElement ifml-core-NamedElement';
import { ParameterKind } from './ifml-core-ParameterKind';

export class Parameter extends NamedElement {
  constructor() {
  super();
  }
  public eClass: string;
  public $ref: string;
  
  // Type: #/ifml/core/ParameterKind
  public kind: ParameterKind;

}
    