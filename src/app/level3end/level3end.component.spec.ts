import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level3endComponent } from './level3end.component';

describe('Level3endComponent', () => {
  let component: Level3endComponent;
  let fixture: ComponentFixture<Level3endComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level3endComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level3endComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
