import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiReviewTabComponent } from './ai-review-tab.component';

describe('AiReviewTabComponent', () => {
  let component: AiReviewTabComponent;
  let fixture: ComponentFixture<AiReviewTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiReviewTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiReviewTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
