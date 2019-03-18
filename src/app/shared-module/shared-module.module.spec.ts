import { SharedModuleModule } from './shared-module.module';
import {describe, it, expect, beforeEach} from '@angular/core/testing/src/testing_internal';

describe('SharedModuleModule', () => {
  let sharedModuleModule: SharedModuleModule;

  beforeEach(() => {
    sharedModuleModule = new SharedModuleModule();
  });

  it('should create an instance', () => {
    expect(sharedModuleModule).toBeTruthy();
  });
});
