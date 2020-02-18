import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelMobileListComponent } from './model-mobile-list.component';

describe('ModelMobileListComponent', () => {
  let component: ModelMobileListComponent;
  let fixture: ComponentFixture<ModelMobileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelMobileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelMobileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
