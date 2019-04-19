
/** Generated Code
* emf ecore to javascript
* generated at 2019-04-11T18:50:59.42+02:00
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { Element } from './Element';
import { Layout } from './Layout';
import { EString } from './EString';

export class Container extends Element{
  public type = 'Container';
  public eClass: string;
  public $ref: string;

  // Type: #//Element
  public elements: Element[];

  // Type: #//Layout
  public layout: Layout;

  // Type: ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString
  public name: EString;

}
