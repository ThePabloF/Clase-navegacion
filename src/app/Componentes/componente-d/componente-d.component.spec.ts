import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDComponent } from './componente-d.component';

describe('ComponenteDComponent', () => {
  let component: ComponenteDComponent;
  let fixture: ComponentFixture<ComponenteDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
