import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaAutorComponent } from './alta-autor.component';

describe('AltaAutorComponent', () => {
  let component: AltaAutorComponent;
  let fixture: ComponentFixture<AltaAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
