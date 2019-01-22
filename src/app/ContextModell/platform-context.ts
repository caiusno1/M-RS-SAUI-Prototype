import { ContextModelContainer } from './ContextModelContainer';

export class PlatformContext {
  contextModelRoot: ContextModelContainer;
  constructor(context: ContextModelContainer) {
    this.contextModelRoot = context;
  }
}
