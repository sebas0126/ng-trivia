import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaContentComponent } from './trivia-content.component';

describe('TriviaContentComponent', () => {
  let component: TriviaContentComponent;
  let fixture: ComponentFixture<TriviaContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
