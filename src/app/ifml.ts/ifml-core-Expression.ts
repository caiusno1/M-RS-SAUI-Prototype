
/** Generated Code
* emf ecore to TypeScript
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { InteractionFlowModelElement } from './ifml-core-InteractionFlowModelElement';
import { EString } from './EString';

export class Expression extends InteractionFlowModelElement {
  constructor() {
  super();
  }
  public eClass: string;
  public $ref: string;
  
  // Type: ecore:EDataType http://www.eclipse.org/emf/2ifmlifml2/Ecore#//EString
  public language: EString;

  // Type: ecore:EDataType http://www.eclipse.org/emf/2ifmlifml2/Ecore#//EString
  public body: EString;

}
    