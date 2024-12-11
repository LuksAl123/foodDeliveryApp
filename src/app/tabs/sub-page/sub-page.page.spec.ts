import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubPagePage } from './sub-page.page';

describe('SubPagePage', () => {
  let component: SubPagePage;
  let fixture: ComponentFixture<SubPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
