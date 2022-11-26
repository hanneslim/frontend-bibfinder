import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMapSwitchComponent } from './list-map-switch.component';

describe('ListMapSwitchComponent', () => {
  let component: ListMapSwitchComponent;
  let fixture: ComponentFixture<ListMapSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMapSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMapSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
