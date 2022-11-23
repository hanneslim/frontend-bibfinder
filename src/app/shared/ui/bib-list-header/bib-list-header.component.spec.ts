import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibListHeaderComponent } from './bib-list-header.component';

describe('BibListHeaderComponent', () => {
  let component: BibListHeaderComponent;
  let fixture: ComponentFixture<BibListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibListHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
