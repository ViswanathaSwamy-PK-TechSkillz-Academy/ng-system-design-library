import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvNgSystemDesignComponent } from './sv-ng-system-design.component';

describe('SvNgSystemDesignComponent', () => {
  let component: SvNgSystemDesignComponent;
  let fixture: ComponentFixture<SvNgSystemDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvNgSystemDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvNgSystemDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
