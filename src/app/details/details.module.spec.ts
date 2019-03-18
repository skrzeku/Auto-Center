import { DetailsModule } from './details.module';
import {describe, it, expect, beforeEach} from '@angular/core/testing/src/testing_internal';


describe('DetailsModule', () => {
  let detailsModule: DetailsModule;

  beforeEach(() => {
    detailsModule = new DetailsModule();
  });

  it('should create an instance', () => {
    expect(detailsModule).toBeTruthy();
  });
});
