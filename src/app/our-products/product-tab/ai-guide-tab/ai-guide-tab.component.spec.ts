import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiGuideTabComponent } from './ai-guide-tab.component';

describe('AiGuideTabComponent', () => {
  let component: AiGuideTabComponent;
  let fixture: ComponentFixture<AiGuideTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiGuideTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiGuideTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
