import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apout } from './apout';

describe('Apout', () => {
  let component: Apout;
  let fixture: ComponentFixture<Apout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
