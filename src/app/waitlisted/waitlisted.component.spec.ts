import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitlistedComponent } from './waitlisted.component';

describe('WaitlistedComponent', () => {
  let component: WaitlistedComponent;
  let fixture: ComponentFixture<WaitlistedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitlistedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitlistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
