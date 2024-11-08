import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthContainerComponent } from './wealth-container.component';

describe('WealthContainerComponent', () => {
  let component: WealthContainerComponent;
  let fixture: ComponentFixture<WealthContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WealthContainerComponent]
    });
    fixture = TestBed.createComponent(WealthContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
