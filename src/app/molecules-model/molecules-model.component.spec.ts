import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculesModelComponent } from './molecules-model.component';

describe('MoleculesModelComponent', () => {
  let component: MoleculesModelComponent;
  let fixture: ComponentFixture<MoleculesModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoleculesModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoleculesModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
