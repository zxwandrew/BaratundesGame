import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1endComponent } from './level1end.component';

describe('Level1endComponent', () => {
  let component: Level1endComponent;
  let fixture: ComponentFixture<Level1endComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level1endComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1endComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
