import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibListElementComponent } from './bib-list-element.component';

describe('BibListElementComponent', () => {
  let component: BibListElementComponent;
  let fixture: ComponentFixture<BibListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
