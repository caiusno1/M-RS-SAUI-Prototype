
/** Generated Code
* emf ecore to TypeScript
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { ViewElement } from './ifml-core-ViewElement';
import { EBoolean } from './EBoolean';

export class ViewContainer extends ViewElement {
  constructor() {
  super();
  }
  public eClass: string;
  public $ref: string;
  
  // Type: ecore:EDataType http://www.eclipse.org/emf/2ifmlifml2/Ecore#//EBoolean
  public isLandMark: EBoolean;

  // Type: ecore:EDataType http://www.eclipse.org/emf/2ifmlifml2/Ecore#//EBoolean
  public isDefault: EBoolean;

  // Type: #/ifml/core/ViewElement
  public viewElements: ViewElement[];

}
    