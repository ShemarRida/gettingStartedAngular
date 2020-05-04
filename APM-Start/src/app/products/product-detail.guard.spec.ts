import { TestBed } from '@angular/core/testing';

import { ProductDetailGuard } from './product-detail.guard';

describe('ProductsDetailGuard', () => {
  let guard: ProductDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});