import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level4endComponent } from './level4end.component';

describe('Level4endComponent', () => {
  let component: Level4endComponent;
  let fixture: ComponentFixture<Level4endComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level4endComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level4endComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
