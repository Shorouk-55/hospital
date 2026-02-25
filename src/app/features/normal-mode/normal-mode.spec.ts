import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalMode } from './normal-mode';

describe('NormalMode', () => {
  let component: NormalMode;
  let fixture: ComponentFixture<NormalMode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormalMode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalMode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
