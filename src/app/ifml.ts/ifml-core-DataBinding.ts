
/** Generated Code
* emf ecore to TypeScript
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { ContentBinding } from './ifml-core-ContentBinding';
import { ConditionalExpression } from './ifml-core-ConditionalExpression';
import { VisualizationAttribute } from './ifml-core-VisualizationAttribute';
import { Classifier } from './-uml-Classifier';

export class DataBinding extends ContentBinding {
  constructor() {
  super();
  }
  public eClass: string;
  public $ref: string;
  
  // Type: #/ifml/core/ConditionalExpression
  public conditionalExpression: ConditionalExpression[];

  // Type: #/ifml/core/VisualizationAttribute
  public visualizationAttributes: VisualizationAttribute[];

  // Type: #/-uml/Classifier
  public classifier: Classifier;

}
    