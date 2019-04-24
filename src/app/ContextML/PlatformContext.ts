
/** Generated Code
* emf ecore to javascript
* generated at 2019-04-24T18:33:50.201+02:00
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { DeviceName } from './DeviceName';
import { FontScale } from './FontScale';
import { OSName } from './OSName';
import { OSVersion } from './OSVersion';
import { Timezone } from './Timezone';
import { PlatformType } from './PlatformType';
import { ScreenWidth } from './ScreenWidth';
import { ScreenHeight } from './ScreenHeight';
import { PlatformID } from './PlatformID';
import { ConnectionType } from './ConnectionType';
import { ConnectionPerformance } from './ConnectionPerformance';
import { BatteryLevel } from './BatteryLevel';
import { Charging } from './Charging';

export class PlatformContext{
  public type = 'PlatformContext';
  public eClass: string;
  public $ref: string;
  
  // Type: #//DeviceName
  public deviceName: DeviceName;

  // Type: #//FontScale
  public fontscale: FontScale;

  // Type: #//OSName
  public os_name: OSName;

  // Type: #//OSVersion
  public os_version: OSVersion;

  // Type: #//Timezone
  public timezone: Timezone;

  // Type: #//PlatformType
  public platformType: PlatformType;

  // Type: #//ScreenWidth
  public screenWidth: ScreenWidth;

  // Type: #//ScreenHeight
  public screenHeight: ScreenHeight;

  // Type: #//PlatformID
  public platformid: PlatformID;

  // Type: #//ConnectionType
  public connectionType: ConnectionType;

  // Type: #//ConnectionPerformance
  public connectionPerformance: ConnectionPerformance;

  // Type: #//BatteryLevel
  public batteryLevel: BatteryLevel;

  // Type: #//Charging
  public charging: Charging;

}
    