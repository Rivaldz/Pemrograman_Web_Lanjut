import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RivaldoComponent } from './rivaldo.component';

describe('RivaldoComponent', () => {
  let component: RivaldoComponent;
  let fixture: ComponentFixture<RivaldoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RivaldoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RivaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
