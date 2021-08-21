import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View3DModelComponent } from './view3-dmodel.component';

describe('View3DModelComponent', () => {
  let component: View3DModelComponent;
  let fixture: ComponentFixture<View3DModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View3DModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View3DModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
