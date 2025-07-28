import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfollio } from './portfollio';

describe('Portfollio', () => {
  let component: Portfollio;
  let fixture: ComponentFixture<Portfollio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portfollio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portfollio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
