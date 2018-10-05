import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsUtilisationComponent } from './conditions-utilisation.component';

describe('ConditionsUtilisationComponent', () => {
  let component: ConditionsUtilisationComponent;
  let fixture: ComponentFixture<ConditionsUtilisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionsUtilisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsUtilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
