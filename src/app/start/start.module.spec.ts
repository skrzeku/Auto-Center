import { StartModule } from './start.module';
import {describe, expect, it, beforeEach} from '@angular/core/testing/src/testing_internal';



describe('StartModule', () => {
  let startModule: StartModule;

  beforeEach(() => {
    startModule = new StartModule();
  });

  it('should create an instance', () => {
    expect(startModule).toBeTruthy();
  });
});
