import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMobileListComponent } from './store-mobile-list.component';

describe('StoreMobileListComponent', () => {
  let component: StoreMobileListComponent;
  let fixture: ComponentFixture<StoreMobileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreMobileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreMobileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
