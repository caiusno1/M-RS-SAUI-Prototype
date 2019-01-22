import { UserContext } from './user-context';
import { PlatformContext } from './platform-context';
import { EnviromentContext } from './enviroment-context';
import { Subject } from 'rxjs';

export class ContextModelContainer {
  public userContext: UserContext;
  public platformContext: PlatformContext;
  public enviromentContext: EnviromentContext;
  public contextChanged: Subject<ContextModelContainer>;
  constructor() {
    this.contextChanged = new Subject();
    if (this.userContext == null) {
      this.userContext = new UserContext(this);
    }
    if (this.platformContext == null) {
      this.platformContext = new PlatformContext(this);
    }
    if (this.enviromentContext == null) {
      this.enviromentContext = new EnviromentContext(this);
    }
  }
}
