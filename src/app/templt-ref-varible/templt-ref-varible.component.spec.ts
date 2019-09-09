import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempltRefVaribleComponent } from './templt-ref-varible.component';

describe('TempltRefVaribleComponent', () => {
  let component: TempltRefVaribleComponent;
  let fixture: ComponentFixture<TempltRefVaribleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempltRefVaribleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempltRefVaribleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
