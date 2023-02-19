import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartItemComponent } from './shopping-cart-item.component';

describe('ShoppingCartItemComponent', () => {
  let component: ShoppingCartItemComponent;
  let fixture: ComponentFixture<ShoppingCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ShoppingCartItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
