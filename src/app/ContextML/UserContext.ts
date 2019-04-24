
/** Generated Code
* emf ecore to javascript
* generated at 2019-04-24T18:33:50.201+02:00
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { AgeUserDefined } from './AgeUserDefined';
import { AgeCalculated } from './AgeCalculated';
import { Glasses } from './Glasses';
import { Gender } from './Gender';
import { Vision } from './Vision';
import { Experience } from './Experience';
import { Mood } from './Mood';
import { UsageTime } from './UsageTime';
import { UserID } from './UserID';
import { Language } from './Language';

export class UserContext{
  public type = 'UserContext';
  public eClass: string;
  public $ref: string;
  
  // Type: #//AgeUserDefined
  public ageUserDefined: AgeUserDefined;

  // Type: #//AgeCalculated
  public ageCalculated: AgeCalculated;

  // Type: #//Glasses
  public glasses: Glasses;

  // Type: #//Gender
  public gender: Gender;

  // Type: #//Vision
  public vision: Vision;

  // Type: #//Experience
  public experience: Experience;

  // Type: #//Mood
  public mood: Mood;

  // Type: #//UsageTime
  public usageTime: UsageTime;

  // Type: #//UserID
  public userID: UserID;

  // Type: #//Language
  public language: Language;

}
    