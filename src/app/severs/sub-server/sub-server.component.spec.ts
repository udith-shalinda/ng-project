import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubServerComponent } from './sub-server.component';

describe('SubServerComponent', () => {
  let component: SubServerComponent;
  let fixture: ComponentFixture<SubServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
