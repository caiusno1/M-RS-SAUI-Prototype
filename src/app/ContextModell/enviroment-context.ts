import { ContextModelContainer } from './ContextModelContainer';
export class EnviromentContext {
  contextModelRoot: ContextModelContainer;
  constructor(context: ContextModelContainer) {
    this.contextModelRoot = context;
  }
}
