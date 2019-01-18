
/** Generated Code
* emf ecore to TypeScript
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { NamedElement } from './ifml-core-NamedElement';
import { InteractionFlowModel } from './ifml-core-InteractionFlowModel';
import { ContentModel } from './ifml-core-ContentModel';
import { ViewPoint } from './ifml-core-ViewPoint';

export class IFMLModel extends NamedElement {
  constructor() {
  super();
  }
  public eClass: string;
  public $ref: string;
  
  // Type: #/ifml/core/InteractionFlowModel
  public interactionFlowModel: InteractionFlowModel;

  // Type: #/ifml/core/ContentModel
  public contentModel: ContentModel;

  // Type: #/ifml/core/ViewPoint
  public interactionFlowModelViewPoints: ViewPoint[];

}
    