
/** Generated Code
* emf ecore to javascript
* generated at 2019-04-24T18:33:50.201+02:00
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { Light } from './Light';
import { Activity } from './Activity';
import { Time } from './Time';
import { Date } from './Date';
import { Weather } from './Weather';
import { NoiseLevel } from './NoiseLevel';
import { EnviromentID } from './EnviromentID';

export class EnviromentContext{
  public type = 'EnviromentContext';
  public eClass: string;
  public $ref: string;
  
  // Type: #//Light
  public light: Light;

  // Type: #//Activity
  public activity: Activity;

  // Type: #//Time
  public time: Time;

  // Type: #//Date
  public date: Date;

  // Type: #//Weather
  public weather: Weather;

  // Type: #//NoiseLevel
  public noiseLevel: NoiseLevel;

  // Type: #//EnviromentID
  public enviromentID: EnviromentID;

}
    