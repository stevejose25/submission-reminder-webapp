import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionitemComponent } from './submissionitem.component';

describe('SubmissionitemComponent', () => {
  let component: SubmissionitemComponent;
  let fixture: ComponentFixture<SubmissionitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
