import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokebuttonComponent } from './pokebutton.component';

describe('PokebuttonComponent', () => {
  let component: PokebuttonComponent;
  let fixture: ComponentFixture<PokebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokebuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
