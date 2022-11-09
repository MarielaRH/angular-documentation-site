import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsDirectiveComponent } from './components-directive.component';

describe('ComponentsDirectiveComponent', () => {
  let component: ComponentsDirectiveComponent;
  let fixture: ComponentFixture<ComponentsDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
