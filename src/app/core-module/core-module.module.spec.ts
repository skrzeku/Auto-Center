import { CoreModuleModule } from './core-module.module';
import {describe, it, expect, beforeEach} from '@angular/core/testing/src/testing_internal';


describe('CoreModuleModule', () => {
  let coreModuleModule: CoreModuleModule;

  beforeEach(() => {
    coreModuleModule = new CoreModuleModule();
  });

  it('should create an instance', () => {
    expect(coreModuleModule).toBeTruthy();
  });
});
