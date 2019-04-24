
/** Generated Code
* emf ecore to javascript
* generated at 2019-04-24T18:33:50.201+02:00
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { UserContext } from './UserContext';
import { EnviromentContext } from './EnviromentContext';
import { PlatformContext } from './PlatformContext';
import { CustomContextProperty } from './CustomContextProperty';

export class ContextML{
  public type = 'ContextML';
  public eClass: string;
  public $ref: string;
  
  // Type: #//UserContext
  public userContext: UserContext;

  // Type: #//EnviromentContext
  public enviromentContext: EnviromentContext;

  // Type: #//PlatformContext
  public platformContext: PlatformContext;

  // Type: #//CustomContextProperty
  public customcontextproperty: CustomContextProperty[] = [];

}
    