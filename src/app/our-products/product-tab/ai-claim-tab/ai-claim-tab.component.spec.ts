import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiClaimTabComponent } from './ai-claim-tab.component';

describe('AiClaimTabComponent', () => {
  let component: AiClaimTabComponent;
  let fixture: ComponentFixture<AiClaimTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiClaimTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiClaimTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
