import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeversComponent } from './severs.component';

describe('SeversComponent', () => {
  let component: SeversComponent;
  let fixture: ComponentFixture<SeversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
