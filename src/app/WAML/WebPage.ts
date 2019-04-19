
/** Generated Code
* emf ecore to javascript
* generated at 2019-04-19T20:59:16.296+02:00
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { Container } from './Container';
import { EInt } from './EInt';
import { EString } from './EString';

export class WebPage extends Container{
  public type = 'WebPage';
  public eClass: string;
  public $ref: string;
  
  // Type: ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt
  public id: EInt;

  // Type: ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString
  public urlPath: EString;

}
    