import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrvbindingComponent } from './trvbinding.component';

describe('TrvbindingComponent', () => {
  let component: TrvbindingComponent;
  let fixture: ComponentFixture<TrvbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrvbindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrvbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
