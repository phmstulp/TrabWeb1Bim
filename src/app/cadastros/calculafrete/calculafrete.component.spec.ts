import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculafreteComponent } from './calculafrete.component';

describe('CalculafreteComponent', () => {
  let component: CalculafreteComponent;
  let fixture: ComponentFixture<CalculafreteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculafreteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculafreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
