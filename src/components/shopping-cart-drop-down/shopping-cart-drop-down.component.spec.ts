import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartDropDownComponent } from './shopping-cart-drop-down.component';

describe('ShoppingCartDropDownComponent', () => {
  let component: ShoppingCartDropDownComponent;
  let fixture: ComponentFixture<ShoppingCartDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ShoppingCartDropDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
