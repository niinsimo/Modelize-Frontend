import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitViewerComponent } from './split-viewer.component';

describe('SplitViewerComponent', () => {
  let component: SplitViewerComponent;
  let fixture: ComponentFixture<SplitViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
