
/** Generated Code
* emf ecore to TypeScript
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { EString } from './EString';
import { Constraint } from './ifml-core-Constraint';
import { Annotation } from './ifml-core-Annotation';

export class Element {
  constructor() {
  
  }
  public eClass: string;
  public $ref: string;
  
  // Type: ecore:EDataType http://www.eclipse.org/emf/2ifmlifml2/Ecore#//EString
  public id: EString;

  // Type: #/ifml/core/Constraint
  public constraints: Constraint[];

  // Type: #/ifml/core/Annotation
  public annotations: Annotation[];

}
    