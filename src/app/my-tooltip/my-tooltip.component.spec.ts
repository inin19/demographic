import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTooltipComponent } from './my-tooltip.component';

describe('MyTooltipComponent', () => {
  let component: MyTooltipComponent;
  let fixture: ComponentFixture<MyTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
