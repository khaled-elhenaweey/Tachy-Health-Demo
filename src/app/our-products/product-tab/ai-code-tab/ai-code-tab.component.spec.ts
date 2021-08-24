import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiCodeTabComponent } from './ai-code-tab.component';

describe('AiCodeTabComponent', () => {
  let component: AiCodeTabComponent;
  let fixture: ComponentFixture<AiCodeTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiCodeTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiCodeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
